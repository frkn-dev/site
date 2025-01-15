import { env } from "@/env"
import prisma from "@/prisma"
import { getMysqlClient } from "@/prisma/mysql"
import { getHostname } from "@/shared/config"
import { createAdminToken } from "@/shared/jwt/admin"
import { getSubscriptionToken } from "@/shared/sub"
import { getFlag, getShadowsocksLink } from "@/shared/sub/ss"
import type { components } from "@/shared/types/xray"
import ky from "ky"
import { createTRPCRouter, protectedProcedure } from "../trpc"

const proxies = {
  vmess: {},
  vless: {},
  shadowsocks: {},
}
const inbounds = {}

export const xray = createTRPCRouter({
  get: protectedProcedure.query(async ({ ctx }) => {
    try {
      const me = ctx.user
      const db = getMysqlClient(env.CLUSTER_DATABASE_JSON[me.cluster])

      const isUserInCluster = await db.users.findUnique({
        where: { username: me.id },
        select: { id: true },
      })
      if (!isUserInCluster) await create(me.id, me.cluster)

      const [xray, nodes] = await Promise.all([
        db.users.findUniqueOrThrow({
          where: { username: me.id },
          select: {
            proxies: {
              select: {
                type: true,
                settings: true,
              },
            },
            status: true,
            used_traffic: true,
            data_limit: true,
            data_limit_reset_strategy: true,
            created_at: true,
            expire: true,
            online_at: true,
          },
        }),
        db.nodes.findMany({
          select: {
            name: true,
            address: true,
            status: true,
          },
        }),
      ])

      const subscription_url =
        getHostname() +
        "/api/sub/" +
        getSubscriptionToken(me.id, env.HMAC_SECRET, me.created)

      const ssProxy = xray.proxies.find((proxy) => proxy.type === "Shadowsocks")
        ?.settings as { password: string; method: string }

      const ss_links = nodes.map((node) => ({
        status: node.status,
        country: getFlag(node.name),
        link: getShadowsocksLink({
          address: node.address,
          password: ssProxy?.password,
          country: node.name,
          method: ssProxy?.method,
        }),
      }))

      return {
        status: xray.status,
        subscription_url,
        ss_links,
        used_traffic: xray.used_traffic,
        limit: xray.data_limit,
        limit_reset_strategy: xray.data_limit_reset_strategy,
        created_at: xray.created_at,
        expire: xray.expire,
        online_at: xray.online_at,
      }
    } catch (error) {
      console.error("XRay user get", error)
      return null
    }
  }),
})

const freePlan = {
  data_limit: 104_857_600, // 100 MB
  data_limit_reset_strategy: "day",
  expire: 0, // unlimited in time
  proxies,
  inbounds,
} as const

export async function create(
  userId: string,
  clusterId: string,
  isRetry = false,
) {
  const user: components["schemas"]["UserCreate"] = {
    username: userId,
    ...freePlan,
  }

  const cluster = await prisma.clusters.findUniqueOrThrow({
    where: { id: clusterId },
  })
  const token = createAdminToken(cluster.jwt)

  try {
    const xray = await ky
      .post(getHostname(clusterId) + "/api/user", {
        headers: {
          Authorization: "Bearer " + token,
        },
        json: user,
        timeout: 3_000,
        retry: 1,
      })
      .json<components["schemas"]["UserResponse"]>()

    return {
      subscription_url: xray.subscription_url,
      expire: xray.expire,
      limit: xray.data_limit,
      limit_reset_strategy: xray.data_limit_reset_strategy,
    }
  } catch (error: any) {
    if (error.name === "TimeoutError" && !isRetry) {
      console.warn(`XRay ${clusterId} user create: TimeoutError`)
      return create(userId, clusterId, true)
    }
    console.error(`XRay ${clusterId} user create`, error)
    return null
  }
}

export async function upgrade(
  userId: string,
  clusterId: string,
  plan: "free" | "1m" | "1y",
  isRetry = false,
) {
  let body: components["schemas"]["UserModify"] = freePlan

  if (plan !== "free") {
    const days = plan === "1m" ? 31 : 367
    const clusterDB = getMysqlClient(env.CLUSTER_DATABASE_JSON[clusterId])
    const { expire: previousExpire } = await clusterDB.users.findUniqueOrThrow({
      where: { username: userId },
    })

    body = {
      status: "active",
      data_limit: 0, // unlimited
      data_limit_reset_strategy: "no_reset",
      expire:
        previousExpire !== null
          ? previousExpire + days * 24 * 60 * 60
          : Math.floor(Date.now() / 1000) + days * 24 * 60 * 60,
      proxies,
      inbounds,
    }
  }

  const cluster = await prisma.clusters.findUniqueOrThrow({
    where: { id: clusterId },
  })
  const token = createAdminToken(cluster.jwt)

  try {
    await ky.put(getHostname(clusterId) + "/api/user/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
      json: body,
      timeout: 3_000,
      retry: 1,
      hooks: {
        afterResponse: [
          async (request, options, response) => {
            if (response.status === 404) {
              await create(userId, clusterId)
              return ky(request)
            }
          },
        ],
      },
    })

    return { status: "ok" }
  } catch (error: any) {
    if (error.name === "TimeoutError" && !isRetry) {
      console.warn(`XRay ${clusterId} upgrade: TimeoutError`)
      return upgrade(userId, clusterId, plan, true)
    }
    console.error(`XRay ${clusterId} upgrade`, error)
    return null
  }
}
