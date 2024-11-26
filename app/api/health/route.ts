import { env } from "@/env"
import prisma from "@/prisma"
import { XRAY_TOKEN_NAME } from "@/shared/config"
import type { components } from "@/shared/types/xray"
import ky from "ky"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const revalidate = 120

type Param = "cluster" | "postgres" | "mysql" | null

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const type = url.searchParams.get("type") as Param
  const timestamp = new Date().toISOString()

  if (type === "postgres") {
    const status = await checkPostgres()
    return NextResponse.json({
      postgres: status ? "connected" : "disconnected",
      timestamp,
    })
  }

  if (type === "mysql") {
    const status = await checkMySQL()
    return NextResponse.json({
      mysql: status ? "connected" : "disconnected",
      timestamp,
    })
  }

  const status = await checkCluster()
  return NextResponse.json({
    cluster: status ? "connected" : "disconnected",
    timestamp,
  })
}

async function checkPostgres(): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`
    return true
  } catch (error) {
    console.error("Prisma:postgres check failed:", error)
    return false
  }
}

async function checkMySQL(): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`
    return true
  } catch (error) {
    console.error("Prisma:mysql check failed:", error)
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
