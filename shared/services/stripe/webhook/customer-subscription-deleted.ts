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

    const promises = [
      prisma.users.update({
        where: { id: userId },
        data: { subscriptionType: null },
      }),
      prisma.stripeSubscriptions.delete({
        where: { id: subscription.id },
      }),
    ]

    await Promise.all(promises)
  } catch (error) {
    console.error(error)
    throw error
  }
}
