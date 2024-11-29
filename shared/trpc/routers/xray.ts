import prisma from "@/prisma"
import { getHostname } from "@/shared/config"
import { extractCountry } from "@/shared/format/country"
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
      const cluster = await prisma.clusters.findUnique({
        where: { id: me.cluster },
      })
      const xrayApiUrl = getHostname(me.cluster)

      const xray = await ky(xrayApiUrl + "/api/user/" + me.id, {
        headers: {
          Authorization: "Bearer " + cluster?.token,
        },
        timeout: 3_000,
        retry: 2,
        hooks: {
          afterResponse: [
            async (request, options, response) => {
              if (response.status === 404) {
                await create(me.id, me.cluster)
                return ky(request)
              }
            },
          ],
        },
      }).json<components["schemas"]["UserResponse"]>()

      return {
        status: xray.status,
        subscription_url: xrayApiUrl + xray.subscription_url,
        ss_links: xray.links
          .filter((link) => link.startsWith("ss://"))
          .map((link) => ({
            country: extractCountry(link),
            link,
          })),
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

  const cluster = await prisma.clusters.findUnique({
    where: { id: clusterId },
  })

  try {
    const xray = await ky
      .post(getHostname(clusterId) + "/api/user", {
        headers: {
          Authorization: "Bearer " + cluster?.token,
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

const getProPlan = (plan: "1m" | "1y") => {
  const days = plan === "1m" ? 31 : 367
  return {
    status: "active",
    data_limit: 0, // unlimited
    data_limit_reset_strategy: "no_reset",
    expire: Math.floor(Date.now() / 1000) + days * 24 * 60 * 60,
    proxies,
    inbounds,
  } as const
}

export async function upgrade(
  userId: string,
  clusterId: string,
  plan: "free" | "1m" | "1y",
  isRetry = false,
) {
  const body: components["schemas"]["UserModify"] =
    plan === "free" ? freePlan : getProPlan(plan)

  const cluster = await prisma.clusters.findUnique({
    where: { id: clusterId },
  })

  try {
    await ky.put(getHostname(clusterId) + "/api/user/" + userId, {
      headers: {
        Authorization: "Bearer " + cluster?.token,
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
