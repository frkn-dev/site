import { env } from "@/env"
import prisma from "@/prisma"
import { XRAY_TOKEN_NAME } from "@/shared/config"
import { extractCountry } from "@/shared/format/country"
import type { components } from "@/shared/types/xray"
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
      const request = () =>
        fetch(env.XRAY_API + "/api/user/" + me.id, {
          headers: {
            Authorization: "Bearer " + token?.token,
          },
        })

      let response = await request()
      if (response.status === 404) {
        create(me.id)
        response = await request()
      }

      const xray: components["schemas"]["UserResponse"] = await response.json()

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

      const response = await fetch(env.XRAY_API + "/api/nodes", {
        headers: {
          Authorization: "Bearer " + token?.token,
        },
      })
      const nodes: components["schemas"]["NodeResponse"][] =
        await response.json()

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

export async function create(userId: string) {
  const user: components["schemas"]["UserCreate"] = {
    username: userId,
    data_limit: 104_857_600, // 100 MB
    data_limit_reset_strategy: "day",
    proxies,
    inbounds,
  }

  const token = await prisma.tokens.findUnique({
    where: { id: XRAY_TOKEN_NAME },
  })

  try {
    const response = await fetch(env.XRAY_API + "/api/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token?.token,
      },
      body: JSON.stringify(user),
    })

    const xray: components["schemas"]["UserResponse"] = await response.json()

    return {
      subscription_url: xray.subscription_url,
      expire: xray.expire,
      limit: xray.data_limit,
      limit_reset_strategy: xray.data_limit_reset_strategy,
    }
  } catch (error) {
    console.error("XRay user create", error)
    return null
  }
}

export async function upgrade(userId: string) {
  const timestamp = Math.floor(Date.now() / 1000)

  const user: components["schemas"]["UserModify"] = {
    status: "active",
    data_limit: 0, // unlimited
    data_limit_reset_strategy: "no_reset",
    expire: timestamp + 31 * 24 * 60 * 60, // 31 days
    proxies,
    inbounds,
  }

  const token = await prisma.tokens.findUnique({
    where: { id: XRAY_TOKEN_NAME },
  })

  const request = () =>
    fetch(env.XRAY_API + "/api/user/" + userId, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token?.token,
      },
      body: JSON.stringify(user),
    })

  try {
    const response = await request()
    if (response.status === 404) {
      await create(userId)
      await request()
    }

    return { status: "ok" }
  } catch (error) {
    console.error("XRay upgrade", error)
    return null
  }
}
