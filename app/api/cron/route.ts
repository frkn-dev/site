import { env } from "@/env"
import prisma from "@/prisma"
import { getMysqlClient } from "@/prisma/mysql"
import { getHostname } from "@/shared/config"
import type { components } from "@/shared/types/xray"
import ky from "ky"
import { NextResponse } from "next/server"

export const revalidate = 6000

export async function GET() {
  const clusters = await prisma.clusters.findMany()

  for (const { id, uri } of clusters) {
    const token = await getToken(id)

    const db = getMysqlClient(uri)
    const all = await db.users.count()
    const paid = await db.users.count({
      where: {
        status: "active",
        data_limit: null,
        data_limit_reset_strategy: "no_reset",
        expire: { gt: Math.floor(Date.now() / 1000) },
      },
    })

    if (token) {
      await prisma.clusters.update({
        where: { id },
        data: {
          token: token.access_token,
          all,
          paid,
          updated: new Date(),
        },
      })
    }
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

async function getToken(cluster: string, isRetry = false) {
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
      .post(getHostname(cluster) + "/api/admin/token", {
        timeout: 3_000,
        retry: 2,
        body,
      })
      .json<components["schemas"]["Token"]>()
  } catch (error: any) {
    if (error.name === "TimeoutError" && !isRetry) {
      console.warn("/api/cron getToken error: TimeoutError")
      return getToken(cluster, true)
    }
    console.error("/api/cron getToken error", error)
    return null
  }
}
