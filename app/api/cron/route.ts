import { env } from "@/env"
import prisma from "@/prisma"
import { getMysqlClient } from "@/prisma/mysql"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const maxDuration = 60
export const revalidate = 600

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const isFullSync = url.searchParams.get("type") === "full"
  const clusters = await prisma.clusters.findMany()

  for (const cluster of clusters) {
    const db = getMysqlClient(env.CLUSTER_DATABASE_JSON[cluster.id])
    const [all, paid] = await Promise.all([
      db.users.count(),
      db.users.count({
        where: {
          status: "active",
          data_limit: null,
          data_limit_reset_strategy: "no_reset",
          expire: { gt: Math.floor(Date.now() / 1000) },
        },
      }),
    ])

    await prisma.clusters.update({
      where: { id: cluster.id },
      data: {
        all,
        paid,
        updated: new Date(),
      },
    })

    if (isFullSync) {
      const jwt = await db.jwt.findUnique({ where: { id: 1 } })
      if (jwt) {
        await prisma.clusters.update({
          where: { id: cluster.id },
          data: { jwt: jwt.secret_key, updated: new Date() },
        })
      }
    }
  }

  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  })
}

export async function POST() {
  return NextResponse.json({ status: "ok" })
}
