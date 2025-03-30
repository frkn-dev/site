import { env } from "@/env"
import prisma from "@/prisma"
import { getSign } from "@/shared/cryptomus"
import { upgrade } from "@/shared/trpc/routers/xray"
import type { WebhookResponse } from "@/shared/types/cryptomus"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body: WebhookResponse = await req.json()
    const userId = body.additional_data

    const { sign, ...data } = body
    const jsonData = JSON.stringify(data).replace(/\//g, "\\/")
    const signature = getSign(jsonData, env.CRYPTOMUS_API_KEY)

    if (signature !== sign || !userId) {
      console.error("cryptomus", signature, body)
      return NextResponse.json(
        { message: "Missing signature" },
        { status: 401 },
      )
    }

    if (body.is_final) {
      await prisma.cryptomusInvoices.create({
        data: {
          orderId: body.order_id,
          status: body.status,
          amount: body.amount,
          currency: body.currency,
          paymentAmount: body.payment_amount,
          payerCurrency: body.payer_currency,
          paymentAmountUsd: body.payment_amount_usd,
          network: body.network,
          userId,
        },
      })
    }

    if (body.status === "paid" || body.status === "paid_over") {
      const user = await prisma.users.update({
        where: { id: userId },
        data: {
          subscriptionType: "Cryptomus",
        },
      })

      const plan = Number(body.amount) === 5 ? "1m" : "1y"

      await upgrade(userId, user.cluster, plan)
    }

    return NextResponse.json({ status: "ok" })
  } catch (error) {
    console.error("POST /api/cryptomus-webhook", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    )
  }
}
