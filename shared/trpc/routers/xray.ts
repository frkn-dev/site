import { env } from "@/env"
import prisma from "@/prisma"
import { XRAY_TOKEN_NAME } from "@/shared/config"
import { extractCountry } from "@/shared/format/country"
import type { components } from "@/shared/types/xray"
import ky from "ky"
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc"

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
      const token = await prisma.tokens.findUnique({
        where: { id: XRAY_TOKEN_NAME },
      })

      const xray = await ky(env.XRAY_API + "/api/user/" + me.id, {
        headers: {
          Authorization: "Bearer " + token?.token,
        },
        timeout: 3_000,
        retry: 2,
        hooks: {
          afterResponse: [
            async (request, options, response) => {
              if (response.status === 404) {
                await create(me.id)
                return ky(request)
              }
            },
          ],
        },
      }).json<components["schemas"]["UserResponse"]>()

      return {
        status: xray.status,
        subscription_url: env.XRAY_API + xray.subscription_url,
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
  nodes: publicProcedure.query(async () => {
    try {
      const token = await prisma.tokens.findUnique({
        where: { id: XRAY_TOKEN_NAME },
      })

      const nodes = await ky(env.XRAY_API + "/api/nodes", {
        headers: {
          Authorization: "Bearer " + token?.token,
        },
      }).json<components["schemas"]["NodeResponse"][]>()

      return {
        hasError: nodes.some((node) => node.status === "error"),
        allConnected: nodes.every((node) => node.status === "connected"),
      }
    } catch (error) {
      console.error("XRay nodes", error)
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

export async function create(userId: string, isRetry = false) {
  const user: components["schemas"]["UserCreate"] = {
    username: userId,
    ...freePlan,
  }

  const token = await prisma.tokens.findUnique({
    where: { id: XRAY_TOKEN_NAME },
  })

  try {
    const xray = await ky
      .post(env.XRAY_API + "/api/user", {
        headers: {
          Authorization: "Bearer " + token?.token,
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
      console.warn("XRay user create: TimeoutError")
      return create(userId, true)
    }
    console.error("XRay user create", error)
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
  plan: "free" | "1m" | "1y",
  isRetry = false,
) {
  const body: components["schemas"]["UserModify"] =
    plan === "free" ? freePlan : getProPlan(plan)

  const token = await prisma.tokens.findUnique({
    where: { id: XRAY_TOKEN_NAME },
  })

  try {
    await ky.put(env.XRAY_API + "/api/user/" + userId, {
      headers: {
        Authorization: "Bearer " + token?.token,
      },
      json: body,
      timeout: 3_000,
      retry: 1,
      hooks: {
        afterResponse: [
          async (request, options, response) => {
            if (response.status === 404) {
              await create(userId)
              return ky(request)
            }
          },
        ],
      },
    })

    return { status: "ok" }
  } catch (error: any) {
    if (error.name === "TimeoutError" && !isRetry) {
      console.warn("XRay upgrade: TimeoutError")
      return upgrade(userId, plan, true)
    }
    console.error("XRay upgrade", error)
    return null
  }
}
