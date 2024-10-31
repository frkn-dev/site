import { stripe as stripeClient } from "@/shared/services/stripe/client"
import { getOrCreateCustomer } from "@/shared/services/stripe/get-or-create-customer"
import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const stripe = createTRPCRouter({
  createCheckoutSession: protectedProcedure
    .input(
      z.object({
        plan: z.enum(["1m", "1y"]),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const me = ctx.user
      const customer = await getOrCreateCustomer(me)

      const checkoutSession = await stripeClient.checkout.sessions.create({
        customer,
        client_reference_id: me.id,
        mode: "subscription",
        line_items: [
          {
            price:
              input.plan === "1m"
                ? "price_1PlHJLDV3xgtdzN4PxKt6fij"
                : "price_1QFwq2DV3xgtdzN4pvFywpNO",
            quantity: 1,
          },
        ],
        allow_promotion_codes: true,
        success_url: "https://frkn.org/account",
        cancel_url: "https://frkn.org/account",
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
    })

    return url
  }),
})
