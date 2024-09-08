import type { components } from "@/shared/types/lava"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body: components["schemas"]["SaleWebhook"] = await req.json()

    console.log("Received data lava-webhook:", body)

    // Вебхук отправляется при успешной оплате подписки, а также при ее следующих оплатах.
    // При отмене подписки клиентом вебхук не отправляется

    return NextResponse.json(
      { message: "Data received successfully" },
      { status: 200 },
    )
  } catch (error) {
    console.error("POST /api/lava-webhook", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    )
  }
}
