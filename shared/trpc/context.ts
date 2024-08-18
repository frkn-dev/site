import { env } from "@/env"
import prisma from "@/prisma"
import jwt, { type JwtPayload } from "jsonwebtoken"
import { cookies } from "next/headers"
import type { NextRequest } from "next/server"

export async function createContext(req: NextRequest) {
  const authCookie = cookies().get("frkn_auth")

  if (authCookie) {
    const { id } = jwt.verify(authCookie.value, env.JWT_SECRET) as JwtPayload

    const user = await prisma.users.findUnique({
      where: { id },
      include: {
        stripeSubscription: {
          include: {
            stripeSubscriptionItems: true,
          },
        },
      },
    })

    return {
      req,
      user,
    }
  }

  return {
    req,
    user: null,
  }
}
