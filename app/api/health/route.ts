import { env } from "@/env"
import prisma from "@/prisma"
import { XRAY_TOKEN_NAME } from "@/shared/config"
import type { components } from "@/shared/types/xray"
import ky from "ky"
import { NextResponse } from "next/server"

export const revalidate = 120

export async function GET() {
  const databaseConnectionStatus = await checkDatabaseConnection()
  const clusterStatus = await checkCluster()

  const response = NextResponse.json({
    status: "ok",
    database: databaseConnectionStatus ? "connected" : "disconnected",
    cluster: clusterStatus ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  })

  response.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  )

  return response
}

async function checkDatabaseConnection(): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`
    return true
  } catch (error) {
    console.error("Prisma check failed:", error)
    return false
  }
}

async function checkCluster(isRetry = false): Promise<boolean> {
  try {
    const token = await prisma.tokens.findUnique({
      where: { id: XRAY_TOKEN_NAME },
    })

    const nodes = await ky(env.XRAY_API + "/api/nodes", {
      headers: {
        Authorization: "Bearer " + token?.token,
      },
      timeout: 3_000,
      retry: 1,
    }).json<components["schemas"]["NodeResponse"][]>()
    const connected = nodes.filter((node) => node.status === "connected").length

    const isMajorityConnected = connected > nodes.length / 2

    return isMajorityConnected
  } catch (error: any) {
    if (error.name === "TimeoutError" && !isRetry) {
      console.warn("Cluster check failed: TimeoutError. I'll try again")
      return checkCluster(true)
    }
    console.error("Cluster check failed:", error)
    return false
  }
}
