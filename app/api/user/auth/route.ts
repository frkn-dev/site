import { env } from "@/env"
import prisma from "@/prisma"
import argon2 from "argon2"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"
import { z } from "zod"

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
      salt: Buffer.from(env.PASSWORD_PEPPER),
    })

    const user = await prisma.users.findUnique({
      where: { password: hashedPassword },
    })

    if (!user) {
      return NextResponse.json({
        status: "error",
        message: "Invalid credentials",
      })
    }

    const token = jwt.sign({ id: user.id }, env.JWT_SECRET, {
      expiresIn: "1y",
    })

    const response = NextResponse.json({
      status: "success",
      id: user.id,
      token,
    })

    response.cookies.set("frkn_auth", token, {
      secure: true,
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 31536000, // 1y
    })

    return response
  } catch (error) {
    console.error("/api/auth", error)
    return NextResponse.json({
      status: "error",
      message: "Internal server error",
    })
  }
}
