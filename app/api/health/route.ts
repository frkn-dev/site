import { env } from "@/env"
import prisma from "@/prisma"
import mysql from "@/prisma/mysql"
import { getHostname } from "@/shared/config"
import type { components } from "@/shared/types/xray"
import ky from "ky"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const revalidate = 120

type Param = "cluster" | "postgres" | "mysql" | null

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const type = url.searchParams.get("type") as Param
  const clusterId = url.searchParams.get("id")
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

  if (type === "cluster" && clusterId) {
    const status = await checkCluster(clusterId)
    return NextResponse.json({
      cluster: status ? "connected" : "disconnected",
      timestamp,
    })
  }

  return NextResponse.json({ timestamp })
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
    await mysql.$queryRaw`SELECT 1`
    return true
  } catch (error) {
    console.error("Prisma:mysql check failed:", error)
    return false
  }
}

async function checkCluster(id: string, isRetry = false): Promise<boolean> {
  try {
    const cluster = await prisma.clusters.findUnique({
      where: { id },
    })

    const nodes = await ky(getHostname(cluster?.id) + "/api/nodes", {
      headers: {
        Authorization: "Bearer " + cluster?.token,
      },
      timeout: 3_000,
      retry: 1,
    }).json<components["schemas"]["NodeResponse"][]>()
    const connected = nodes.filter((node) => node.status === "connected").length

    const isMajorityConnected = connected > nodes.length / 2

    return isMajorityConnected
  } catch (error: any) {
    if (error.name === "TimeoutError" && !isRetry) {
      console.warn(`Cluster ${id} check failed: TimeoutError. I'll try again`)
      return checkCluster(id, true)
    }
    console.error(`Cluster ${id} check failed:`, error)
    return false
  }
}
