import { env } from "@/env"
import { nanoid } from "nanoid"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const cardlink = createTRPCRouter({
  bill: protectedProcedure.mutation(async ({ ctx }) => {
    try {
      const body = JSON.stringify({
        amount: 5000,
        currency_in: "RUB",
        payer_pays_commission: 0,
        payment_method: "SBP",
        type: "normal",
        shop_id: "kd71g1Xm1K",
        order_id: nanoid(36),
        name: "ID: " + ctx.user.id,
        custom: ctx.user.id,
      } as CreateBillRequest)

      const response = await fetch("https://cardlink.link/api/v1/bill/create", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + env.CARDLINK_API_KEY,
          "Content-Type": "application/json",
        },
        body,
      })
      const bill: CreateBillResponse = await response.json()

      if (!bill.success) {
        throw new Error(bill.bill_id)
      }

      return {
        url: bill.link_page_url,
      }
    } catch (error) {
      console.error("TRPC cardlink.bill", error)
      return null
    }
  }),
})

type CreateBillResponse = {
  success: boolean
  link_url: string
  link_page_url: string
  bill_id: string
}

type CreateBillRequest = {
  /** Payment amount (e.g., 193.85) */
  amount: number
  order_id?: string
  description?: string
  type?: "normal" | "multi"
  shop_id: string
  currency_in?: "RUB" | "USD" | "EUR" | "KZT"
  custom?: string
  /** who pays the commission (1 = payer, 0 = payee) */
  payer_pays_commission?: 1 | 0
  name?: string
  payment_method?: "BANK_CARD" | "SBP"
}
