import { env } from "@/env"
import prisma from "@/prisma"
import { generateHash } from "@/shared/cardlink"
import { upgrade } from "@/shared/trpc/routers/xray"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body: PaymentPostback = await req.json()
    const userId = body.custom
    const validSignature = generateHash(
      body.OutSum,
      body.InvId,
      env.CARDLINK_API_KEY,
    )

    if (validSignature !== body.SignatureValue || !userId) {
      console.error("cardlink", body)
      return NextResponse.json(
        { message: "Missing signature" },
        { status: 401 },
      )
    }

    await prisma.cardlinkInvoices.create({
      data: {
        userId,
        trsId: body.TrsId,
        status: body.Status,
        sum: body.OutSum,
        currency: body.CurrencyIn,
        commission: body.Commission,
      },
    })

    if (body.Status === "SUCCESS" || body.Status === "OVERPAID") {
      const user = await prisma.users.update({
        where: { id: userId },
        data: {
          subscriptionType: "Cardlink",
        },
      })

      await upgrade(user.id, "1y")
    }

    return NextResponse.json({ status: "ok" })
  } catch (error) {
    console.error("POST /api/cardlink-webhook", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    )
  }
}

type PaymentPostback = {
  InvId: string
  OutSum: number
  Commission: number
  TrsId: string
  Status: "SUCCESS" | "UNDERPAID" | "OVERPAID" | "FAIL"
  CurrencyIn: "RUB" | "USD" | "EUR" | "KZT"
  custom?: string
  SignatureValue: string
}
