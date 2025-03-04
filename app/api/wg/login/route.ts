import prisma from "@/prisma"
import { generateWireGuardKeys } from "@/shared/wg"
import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  os: z.string(),
  systemVersion: z.string(),
  locale: z.string(),
  processors: z.string(),
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const body = schema.safeParse(json)

    if (!body.success) {
      return NextResponse.json(
        {
          status: "error",
          message: body.error.message,
        },
        { status: 400 },
      )
    }

    const { publicKey, privateKey } = generateWireGuardKeys()
    const user = await prisma.wgUsers.create({
      data: {
        public: publicKey,
        private: privateKey,
      },
    })

    return NextResponse.json({
      id: user.id,
    })
  } catch {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}
