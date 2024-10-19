import type { Stripe } from "stripe"

import prisma from "@/prisma"

export async function customerSubscriptionDeleted(
  event: Stripe.CustomerSubscriptionDeletedEvent,
) {
  try {
    const subscription = event.data.object
    const userId = subscription.metadata.userId

    if (!userId) {
      throw new Error("User id not found in subscription metadata")
    }

    await prisma.users.update({
      where: { id: userId },
      data: { subscriptionType: null },
    })
  } catch (error) {
    console.error("customerSubscriptionDeleted", error)
    throw error
  }
}
