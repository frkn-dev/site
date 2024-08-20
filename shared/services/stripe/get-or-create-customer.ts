import type { Users } from "@prisma/client"

import prisma from "@/prisma"
import { stripe } from "@/shared/services/stripe/client"

export async function getOrCreateCustomer(user: Users) {
  if (user.stripeCustomerId) {
    return user.stripeCustomerId
  }

  const customer = await stripe.customers.create(
    {
      metadata: {
        userId: user.id,
      },
    },
    {
      idempotencyKey: user.id,
    },
  )

  await prisma.users.update({
    where: { id: user.id },
    data: { stripeCustomerId: customer.id },
  })

  return customer.id
}
