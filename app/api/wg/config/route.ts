import { countries } from "@/app/api/wg/vars"
import prisma from "@/prisma"
import { getUserAddress } from "@/shared/ip"
import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  id: z.string(),
  country: z.enum(countries),
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const body = schema.safeParse(json)

    if (!body.success) {
      return NextResponse.json(
        {
          status: "error",
          message: body.error.message,
        },
        { status: 400 },
      )
    }

    const [server, user] = await Promise.all([
      prisma.wgServers.findFirstOrThrow({
        where: {
          country: body.data.country,
        },
      }),
      prisma.wgUsers.findUniqueOrThrow({
        where: { id: body.data.id },
      }),
    ])

    return NextResponse.json({
      Interface: {
        PrivateKey: user.private,
        Address: getUserAddress(user.offset),
      },
      Peer: {
        PublicKey: server.publicKey,
        Endpoint: server.ip + ":51820",
      },
    })
  } catch {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}
