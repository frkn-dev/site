import { env } from "@/env"
import prisma from "@/prisma"
import { getMysqlClient } from "@/prisma/mysql"
import { NextResponse } from "next/server"

export const revalidate = 900

export async function GET() {
  const clusters = await prisma.clusters.findMany()

  for (const cluster of clusters) {
    const db = getMysqlClient(env.CLUSTER_DATABASE_JSON[cluster.id])
    const [all, paid, jwt] = await Promise.all([
      db.users.count(),
      db.users.count({
        where: {
          status: "active",
          data_limit: null,
          data_limit_reset_strategy: "no_reset",
          expire: { gt: Math.floor(Date.now() / 1000) },
        },
      }),
      db.jwt.findUnique({ where: { id: 1 } }),
    ])

    if (jwt) {
      await prisma.clusters.update({
        where: { id: cluster.id },
        data: {
          all,
          paid,
          jwt: jwt.secret_key,
          updated: new Date(),
        },
      })
    }
  }

  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  })
}
