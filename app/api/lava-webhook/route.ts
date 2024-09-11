import { env } from "@/env"
import prisma from "@/prisma"
import { caller } from "@/shared/trpc/caller"
import type { components } from "@/shared/types/lava"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body: components["schemas"]["SaleWebhook"] = await req.json()
    const signature = req.headers.get("x-api-key")

    if (signature !== env.LAVA_TOP_WEBHOOK_SECRET) {
      return NextResponse.json(
        { message: "Missing signature" },
        { status: 401 },
      )
    }

    const url = new URL(req.url)
    const type = url.searchParams.get(
      "type",
    ) as components["schemas"]["WebhookEventTypeDto"]

    await prisma.lavaSubscriptions.create({
      data: {
        contractId: body.contractId!,
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

    const message = await caller.xray.update()

    return NextResponse.json({ message }, { status: 200 })
  } catch (error) {
    console.error("POST /api/lava-webhook", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    )
  }
}
