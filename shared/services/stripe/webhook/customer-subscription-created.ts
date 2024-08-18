import type { Stripe } from "stripe"

import prisma from "@/prisma"

export async function customerSubscriptionCreated(
  event: Stripe.CustomerSubscriptionCreatedEvent,
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
        data: { subscriptionType: "Stripe" },
      }),
      prisma.stripeSubscriptions.create({
        data: {
          id: subscription.id,
          status: subscription.status,
          created: new Date(subscription.created * 1000),
          userId,
        },
      }),
    ]

    await Promise.all(promises)

    await prisma.stripeSubscriptionItems.createMany({
      data: subscription.items.data.map((item) => ({
        id: item.id,
        priceId: item.price.id,
        created: new Date(item.created * 1000),
        subscriptionId: subscription.id,
      })),
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}
