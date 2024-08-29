import { env } from "@/env"
import { stripe as stripeClient } from "@/shared/services/stripe/client"
import { getOrCreateCustomer } from "@/shared/services/stripe/get-or-create-customer"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const stripe = createTRPCRouter({
  createCheckoutSession: protectedProcedure.mutation(async ({ ctx }) => {
    const me = ctx.user

    if (me.stripeSubscription) {
      return { alreadySubscribed: true, url: null }
    }

    const customer = await getOrCreateCustomer(me)

    const host = env.HOST

    const checkoutSession = await stripeClient.checkout.sessions.create({
      customer,
      client_reference_id: me.id,
      mode: "subscription",
      line_items: [
        {
          price: env.STRIPE_PRICE_ID_MONTHLY,
          quantity: 1,
        },
      ],
      success_url: host,
      cancel_url: host,
      allow_promotion_codes: true,
      subscription_data: {
        metadata: {
          userId: me.id,
        },
      },
    })

    return {
      alreadySubscribed: false,
      url: checkoutSession.url,
    }
  }),
  createPortal: protectedProcedure.mutation(async ({ ctx }) => {
    const me = ctx.user

    const customer = await getOrCreateCustomer(me)

    const { url } = await stripeClient.billingPortal.sessions.create({
      customer,
      return_url: `${env.HOST}/account`,
    })

    return url
  }),
})