import { env } from "@/env"
import prisma from "@/prisma"
import { XRAY_TOKEN_NAME } from "@/shared/config"
import type { components } from "@/shared/types/xray"
import { NextResponse } from "next/server"

export async function GET() {
  const id = XRAY_TOKEN_NAME
  const token = await getToken()

  if (token) {
    await prisma.tokens.upsert({
      where: { id },
      create: { id, token: token.access_token },
      update: { token: token.access_token },
    })
  }

  const res = NextResponse.json({
    status: "ok",
  })
  res.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  )
  res.headers.set("Pragma", "no-cache")
  res.headers.set("Expires", "0")
  res.headers.set("Surrogate-Control", "no-store")

  return res
}

async function getToken() {
  const params: Omit<
    components["schemas"]["Body_admin_token_api_admin_token_post"],
    "scope"
  > = {
    username: env.XRAY_USERNAME,
    password: env.XRAY_PASSWORD,
  }
  const body = new URLSearchParams(Object.entries(params))

  try {
    const response = await fetch(env.XRAY_API + "/api/admin/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    })

    return response.json() as Promise<components["schemas"]["Token"]>
  } catch (error) {
    console.error("/api/cron getToken error", error)
    return null
  }
}
