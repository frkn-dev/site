import prisma from "@/prisma"
import type { Stripe } from "stripe"

export async function customerSubscriptionCreated(
  event: Stripe.CustomerSubscriptionCreatedEvent,
) {
  try {
    const subscription = event.data.object
    const userId = subscription.metadata.userId

    if (!userId) {
      throw new Error("User id not found in subscription metadata: " + userId)
    }

    await prisma.users.update({
      where: { id: userId },
      data: { subscriptionType: "Stripe" },
    })
  } catch (error) {
    console.error("customerSubscriptionCreated", error)
    throw error
  }
}
