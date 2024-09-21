import { env } from "@/env"
import { getSign } from "@/shared/cryptomus"
import type {
  CreateInvoiceRequest,
  CreateInvoiceResponse,
} from "@/shared/types/cryptomus"
import { nanoid } from "nanoid"
import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const cryptomus = createTRPCRouter({
  invoice: protectedProcedure
    .input(
      z.object({
        amount: z.enum(["5", "50"]),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const body = JSON.stringify({
          amount: input.amount,
          currency: "USD",
          order_id: nanoid(36),
          additional_data: ctx.user.id,
          url_success: "https://frkn.org/account",
          url_callback: "https://frkn.org/api/cryptomus-webhook",
        } as CreateInvoiceRequest)

        const sign = getSign(body, env.CRYPTOMUS_API_KEY)

        const response = await fetch("https://api.cryptomus.com/v1/payment", {
          method: "POST",
          headers: {
            merchant: env.CRYPTOMUS_ID,
            sign,
            "Content-Type": "application/json",
          },
          body,
        })
        const invoice: CreateInvoiceResponse = await response.json()

        if (invoice.state === 1) {
          throw new Error(invoice.message)
        }

        return {
          url: invoice.result.url,
        }
      } catch (error) {
        console.error("TRPC cryptomus.invoice", error)
        return null
      }
    }),
})
