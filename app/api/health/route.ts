import { env } from "@/env"
import prisma from "@/prisma"
import { getMysqlClient } from "@/prisma/mysql"
import { getHostname } from "@/shared/config"
import { createAdminToken } from "@/shared/jwt/admin"
import type { components } from "@/shared/types/xray"
import ky from "ky"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const revalidate = 120

type Param = "cluster" | "postgres" | null

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

  if (type === "cluster" && clusterId) {
    const isClusterOk = await checkCluster(clusterId)
    const isDbOk = await checkMySQL(clusterId)

    return NextResponse.json({
      api: isClusterOk ? "connected" : "disconnected",
      db: isDbOk ? "connected" : "disconnected",
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

async function checkMySQL(clusterId: string): Promise<boolean> {
  try {
    const db = getMysqlClient(env.CLUSTER_DATABASE_JSON[clusterId])
    await db.$queryRaw`SELECT 1`

    return true
  } catch (error) {
    console.error(`Prisma:mysql ${clusterId} check failed:`, error)
    return false
  }
}

async function checkCluster(id: string, isRetry = false): Promise<boolean> {
  try {
    const cluster = await prisma.clusters.findUniqueOrThrow({
      where: { id },
    })
    const token = createAdminToken(cluster.jwt)

    const nodes = await ky(getHostname(cluster.id) + "/api/nodes", {
      headers: {
        Authorization: "Bearer " + token,
      },
      timeout: 3_000,
      retry: 1,
    }).json<components["schemas"]["NodeResponse"][]>()
    const disconnected = nodes.filter(
      (node) => node.status !== "connected",
    ).length

    return disconnected < 3
  } catch (error: any) {
    if (error.name === "TimeoutError" && !isRetry) {
      console.warn(`Cluster ${id} check failed: TimeoutError. I'll try again`)
      return checkCluster(id, true)
    }
    console.error(`Cluster ${id} check failed:`, error)
    return false
  }
}
