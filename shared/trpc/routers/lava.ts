import { env } from "@/env"
import prisma from "@/prisma"
import { hashEmail } from "@/shared/hmac"
import { currencies, offer } from "@/shared/services/lava"
import type { components } from "@/shared/types/lava"
import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const lava = createTRPCRouter({
  invoice: protectedProcedure
    .input(
      z.object({
        email: z.string().email(),
        lang: z.string(),
        currency: z.enum(currencies),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const body: components["schemas"]["InvoiceRequestDto"] = {
          email: input.email,
          buyerLanguage: (["EN", "RU", "ES"] as const).find(
            (i) => i === input.lang,
          ),
          offerId: offer.id,
          currency: input.currency,
        }
        const data = await fetch("https://gate.lava.top/api/v2/invoice", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Api-Key": env.LAVA_TOP_SECRET_KEY,
          },
          body: JSON.stringify(body),
        })
        const invoice: components["schemas"]["InvoicePaymentParamsResponse"] =
          await data.json()

        await prisma.users.update({
          where: { id: ctx.user.id },
          data: {
            lavaBuyerId: hashEmail(input.email),
          },
        })

        return invoice
      } catch (error) {
        console.error("TRPC lava.invoice", error)
        return null
      }
    }),
})
