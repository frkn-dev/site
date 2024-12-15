import { env } from "@/env"
import prisma from "@/prisma"
import { decodeSubscriptionToken, getSubscriptionToken } from "@/shared/sub"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const revalidate = 60

type Params = { params: { id?: string } }

export async function GET(req: NextRequest, { params }: Params) {
  if (!params.id) {
    return new NextResponse("ID is required", { status: 400 })
  }

  try {
    const username = decodeSubscriptionToken(params.id, env.HMAC_SECRET)
    const user = await prisma.users.findUniqueOrThrow({
      where: { id: username },
      select: {
        id: true,
        cluster: true,
        clusterRelation: {
          select: {
            jwt: true,
          },
        },
      },
    })

    const token = getSubscriptionToken(user.id, user.clusterRelation.jwt)

    const response = await fetch(
      `https://${user.cluster}.frkn.org/sub/${token}`,
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`)
    }

    return new NextResponse(response.body, {
      headers: { "Content-Type": "text/plain" },
    })
  } catch (error) {
    console.error("/api/sub/[id]", error)

    return new NextResponse("Server error", { status: 500 })
  }
}
