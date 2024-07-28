import { PrismaClient } from "@prisma/client"
import argon2 from "argon2"
import { NextResponse } from "next/server"
import { z } from "zod"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { password } = await req.json()

    const validation = z
      .string()
      .length(128, "Invalid hash")
      .safeParse(password)

    if (!validation.success) {
      return NextResponse.json({
        status: "error",
        message: validation.error.message,
      })
    }

    const hashedPassword = await argon2.hash(password, {
      salt: Buffer.from(process.env.PASSWORD_PEPPER),
    })

    const newUser = await prisma.user.create({
      data: { password: hashedPassword },
      select: {
        id: true,
        created: true,
      },
    })

    return NextResponse.json({ status: "success", ...newUser })
  } catch (error) {
    console.error("/api/register", error)
    return NextResponse.json({
      status: "error",
      message: "Internal server error",
    })
  }
}
