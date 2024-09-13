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
