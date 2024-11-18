import { env } from "@/env"
import prisma from "@/prisma"
import { XRAY_TOKEN_NAME } from "@/shared/config"
import type { components } from "@/shared/types/xray"
import ky from "ky"
import { NextResponse } from "next/server"

export const revalidate = 6000

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
    timestamp: new Date().toISOString(),
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

async function getToken(isRetry = false) {
  const params: Omit<
    components["schemas"]["Body_admin_token_api_admin_token_post"],
    "scope"
  > = {
    username: env.XRAY_USERNAME,
    password: env.XRAY_PASSWORD,
  }
  const body = new URLSearchParams(params)

  try {
    return ky
      .post(env.XRAY_API + "/api/admin/token", {
        timeout: 3_000,
        retry: 2,
        body,
      })
      .json<components["schemas"]["Token"]>()
  } catch (error: any) {
    if (error.name === "TimeoutError" && !isRetry) {
      console.warn("/api/cron getToken error: TimeoutError")
      return getToken(true)
    }
    console.error("/api/cron getToken error", error)
    return null
  }
}
