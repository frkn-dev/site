import { env } from "@/env"
import prisma from "@/prisma"
import type { JwtPayload } from "jsonwebtoken"
import jwt, { JsonWebTokenError } from "jsonwebtoken"
import { cookies, headers } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const cookieToken = cookies().get("frkn_auth")?.value
    const headerToken = headers().get("Authorization")?.split(" ")[1]
    const token = cookieToken || headerToken

    if (!token) {
      return NextResponse.json({
        status: "error",
        message: "No token provided",
      })
    }

    const { id, iat, exp } = jwt.verify(token, env.JWT_SECRET) as JwtPayload

    const user = await prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        created: true,
      },
    })

    if (!user) {
      return NextResponse.json({
        status: "error",
        message: "User not found",
      })
    }

    return NextResponse.json({
      status: "success",
      user,
      token: {
        issued: iat,
        expiration: exp,
      },
    })
  } catch (error) {
    console.error("/api/user/me", error)
    if (error instanceof JsonWebTokenError) {
      return NextResponse.json({
        status: "error",
        message: "Invalid token",
      })
    }
    return NextResponse.json({
      status: "error",
      message: "Internal server error",
    })
  }
}
