import { env } from "@/env"
import prisma from "@/prisma"
import { hashEmail } from "@/shared/hmac"
import { currencies, offer } from "@/shared/services/lava"
import type { components, paths } from "@/shared/types/lava"
import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "../trpc"
import { upgrade } from "./xray"

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
  unsubscribe: protectedProcedure
    .input(
      z.object({
        email: z.string().email(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const lavaBuyerId = hashEmail(input.email)
        const user = await prisma.users.findUnique({
          where: {
            id: ctx.user.id,
            lavaBuyerId,
          },
        })

        if (!user) {
          return { status: "error", message: "Email not found" }
        }

        const subscriptions = await prisma.lavaSubscriptions.findFirst({
          where: { lavaBuyerId },
          orderBy: { timestamp: "asc" },
        })

        if (!subscriptions) {
          return { status: "error", message: "Subscription not found" }
        }

        const params = new URLSearchParams({
          email: input.email,
          contractId: subscriptions.contractId,
        } as paths["/api/v1/subscriptions"]["delete"]["parameters"]["query"])

        const data = await fetch(
          `https://gate.lava.top/api/v1/subscriptions?${params.toString()}`,
          {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "X-Api-Key": env.LAVA_TOP_SECRET_KEY,
            },
          },
        )

        if (data.ok) {
          await prisma.users.update({
            where: { lavaBuyerId },
            data: {
              subscriptionType: null,
            },
          })
          await upgrade(ctx.user.id, "free")

          return { status: "ok" }
        }

        const info = await data.json()
        return {
          status: "error",
          message: info.error || "Internal server error",
        }
      } catch (error) {
        console.error("TRPC lava.unsubscribe", error)
        return null
      }
    }),
})
