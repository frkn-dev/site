import type { Prisma } from "@prisma/client"

export type User = Prisma.UsersGetPayload<{
  include: {
    stripeSubscription: {
      include: { stripeSubscriptionItems: true }
    }
  }
}>

export type StripeSubscriber = User & {
  stripeSubscription: NonNullable<User["stripeSubscription"]> & {
    stripeSubscriptionItems: NonNullable<
      User["stripeSubscription"]
    >["stripeSubscriptionItems"]
  }
}
