import { env } from "@/env"
import prisma from "@/prisma"
import { getMe } from "@/shared/services/auth/get-me"
import { caller } from "@/shared/trpc/caller"
import type { components } from "@/shared/types/lava"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body: components["schemas"]["SaleWebhook"] = await req.json()
    const me = await getMe()
    const signature = req.headers.get("X-Api-Key")

    if (signature !== env.LAVA_TOP_SECRET_KEY || !me) {
      return NextResponse.json(
        { message: "Missing signature" },
        { status: 401 },
      )
    }

    const url = new URL(req.url)
    const type = url.searchParams.get(
      "type",
    ) as components["schemas"]["WebhookEventTypeDto"]

    console.log("lava-webhook:", signature, body) // TODO

    const promises = [
      prisma.users.update({
        where: { id: me.id },
        data: { subscriptionType: "Lava" },
      }),
      prisma.lavaSubscriptions.create({
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
          userId: me.id,
        },
      }),
    ]

    await Promise.all(promises)
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
