import { env } from "@/env"
import prisma from "@/prisma"
import jwt, { type JwtPayload } from "jsonwebtoken"
import { cookies } from "next/headers"

export async function createContext() {
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
      user,
    }
  }

  return {
    user: null,
  }
}
