import { env } from "@/env"
import prisma from "@/prisma"
import jwt, { type JwtPayload } from "jsonwebtoken"
import { cookies, headers } from "next/headers"

export async function createContext() {
  const cookie = cookies().get("frkn_auth")
  const header = headers().get("authorization")
  const token = cookie?.value || header

  if (token) {
    const { id } = jwt.verify(token, env.JWT_SECRET) as JwtPayload

    const user = await prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        password: false, // NOTE: Exclude password
        subscriptionType: true,
        lavaBuyerId: true,
        stripeCustomerId: true,
        stripeSubscription: {
          select: {
            id: true,
            status: true,
            stripeSubscriptionItems: {
              select: {
                id: true,
                priceId: true,
              },
            },
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
