import { env } from "@/env"
import prisma from "@/prisma"
import { hashEmail } from "@/shared/hmac"
import { upgrade } from "@/shared/trpc/routers/xray"
import type { components } from "@/shared/types/lava"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body: components["schemas"]["SaleWebhook"] = await req.json()
    const signature = req.headers.get("x-api-key")

    if (signature !== env.LAVA_TOP_WEBHOOK_SECRET || !body.buyer?.email) {
      console.error("lava-webhook", signature, body)
      return NextResponse.json(
        { message: "Missing signature" },
        { status: 401 },
      )
    }

    const url = new URL(req.url)
    const type = url.searchParams.get(
      "type",
    ) as components["schemas"]["WebhookEventTypeDto"]
    const lavaBuyerId = hashEmail(body.buyer.email)

    await prisma.lavaSubscriptions.create({
      data: {
        lavaBuyerId,
        contractId: body.contractId,
        parentContractId: body.parentContractId,
        status: body.status,
        type,
        timestamp: body.timestamp,
        errorMessage: body.errorMessage,
        productId: body.product?.id,
        amount: body.amount,
        currency: body.currency,
      },
    })

    if (body.status === "subscription-failed") {
      await prisma.users.update({
        where: { lavaBuyerId },
        data: {
          subscriptionType: null,
        },
      })
    }

    if (body.status === "subscription-active") {
      const user = await prisma.users.update({
        where: { lavaBuyerId },
        data: {
          subscriptionType: "Lava",
        },
      })

      await upgrade(user.id, user.cluster, "1m")
    }

    if (
      ["new", "in-progress", "completed", "failed", "cancelled"].includes(
        body.status!,
      )
    ) {
      console.error("lava: unexpected status", body.status)
    }

    return NextResponse.json({ status: "ok" })
  } catch (error) {
    console.error("POST /api/lava-webhook", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    )
  }
}
