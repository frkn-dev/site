import prisma from "@/prisma"
import { upgrade } from "@/shared/trpc/routers/xray"
import type { Stripe } from "stripe"

export async function customerSubscriptionDeleted(
  event: Stripe.CustomerSubscriptionDeletedEvent,
) {
  try {
    const subscription = event.data.object
    const userId = subscription.metadata.userId

    if (!userId) {
      throw new Error("User id not found in subscription metadata")
    }

    const user = await prisma.users.update({
      where: { id: userId },
      data: { subscriptionType: null },
    })
    await upgrade(userId, user.cluster, "free")
  } catch (error) {
    console.error("customerSubscriptionDeleted", error)
    throw error
  }
}
