import { env } from "@/env"
import prisma from "@/prisma"
import type { components } from "@/shared/types/lava"
import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "../trpc"

const offers = {
  monthly: "826591e4-2d1f-41de-87e8-1fe23987a692",
} as const // INFO: analytics("subscribe")

export const lava = createTRPCRouter({
  invoice: protectedProcedure
    .input(
      z.object({
        email: z.string().email(),
        lang: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const body: components["schemas"]["InvoiceRequestDto"] = {
          email: input.email,
          buyerLanguage: ["EN", "RU", "ES"].includes(input.lang)
            ? (input.lang as "EN" | "RU" | "ES")
            : null,
          offerId: offers.monthly,
          currency: "RUB",
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
            subscriptionType: "Lava",
            lavaParentContractId: invoice.id,
          },
        })

        return invoice
      } catch (error) {
        console.error("TRPC lava.invoice", error)
        return null
      }
    }),
})
