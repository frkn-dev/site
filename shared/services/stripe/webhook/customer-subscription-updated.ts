import type { Stripe } from "stripe"

import prisma from "@/prisma"
import { Prisma } from "@prisma/client"

export async function customerSubscriptionUpdated(
  event: Stripe.CustomerSubscriptionUpdatedEvent,
) {
  try {
    const subscription = event.data.object
    const userId = subscription.metadata.userId

    if (!userId) {
      throw new Error("User id not found in subscription metadata")
    }

    await prisma.$transaction(
      async (tx) => {
        await tx.users.update({
          where: { id: userId },
          data: { subscriptionType: "Stripe" },
        })

        await tx.stripeSubscriptions.upsert({
          where: { id: subscription.id },
          create: {
            id: subscription.id,
            status: subscription.status,
            created: new Date(subscription.created * 1000),
            userId,
          },
          update: {
            status: subscription.status,
            updated: new Date(),
          },
        })

        for (const item of subscription.items.data) {
          await tx.stripeSubscriptionItems.upsert({
            where: { id: item.id },
            create: {
              id: item.id,
              priceId: item.price.id,
              created: new Date(item.created * 1000),
              subscriptionId: subscription.id,
            },
            update: {
              priceId: item.price.id,
              updated: new Date(),
            },
          })
        }
      },
      {
        isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
      },
    )
  } catch (error) {
    console.error(error)
    throw error
  }
}
