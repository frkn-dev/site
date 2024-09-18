import type { Stripe } from "stripe"

import prisma from "@/prisma"
import { upgrade } from "@/shared/trpc/routers"

export async function customerSubscriptionCreated(
  event: Stripe.CustomerSubscriptionCreatedEvent,
) {
  try {
    const subscription = event.data.object
    const userId = subscription.metadata.userId

    if (!userId) {
      throw new Error("User id not found in subscription metadata: " + userId)
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

    if (subscription.status === "active") {
      await upgrade(userId)
    } else {
      console.error("Stripe: unexpected status", subscription.status)
    }

    await prisma.stripeSubscriptionItems.createMany({
      data: subscription.items.data.map((item) => ({
        id: item.id,
        priceId: item.price.id,
        created: new Date(item.created * 1000),
        subscriptionId: subscription.id,
      })),
    })
  } catch (error) {
    console.error("customerSubscriptionCreated", error)
    throw error
  }
}
