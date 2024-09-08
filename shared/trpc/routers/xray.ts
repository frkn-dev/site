import { env } from "@/env"
import prisma from "@/prisma"
import { XRAY_TOKEN_NAME } from "@/shared/config"
import type { components } from "@/shared/types/xray"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const xray = createTRPCRouter({
  create: protectedProcedure.mutation(async ({ ctx }) => {
    const me = ctx.user
    const user: components["schemas"]["UserCreate"] = {
      username: me.id,
      data_limit: 104_857_600, // 100 MB
      data_limit_reset_strategy: "day",
      proxies: {
        vmess: {},
        vless: {},
        shadowsocks: {},
      },
      inbounds: {},
    }

    const token = await prisma.tokens.findUnique({
      where: { id: XRAY_TOKEN_NAME },
    })

    if (token) {
      try {
        const response = await fetch(env.XRAY_API + "/api/user", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token.token,
          },
          body: JSON.stringify(user),
        })

        const xray: components["schemas"]["UserResponse"] =
          await response.json()

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
  }),
  get: protectedProcedure.query(async ({ ctx }) => {
    const me = ctx.user
    const cluster = "https://mk2.frkn.org"
    const token = await prisma.tokens.findUnique({
      where: { id: XRAY_TOKEN_NAME },
    })

    if (token) {
      try {
        const response = await fetch(env.XRAY_API + "/api/user/" + me.id, {
          headers: {
            Authorization: "Bearer " + token.token,
          },
        })

        const xray: components["schemas"]["UserResponse"] =
          await response.json()

        return {
          status: xray.status,
          subscription_url: cluster + xray.subscription_url,
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
    }
  }),
})

function extractCountry(uri: string): string {
  const desc = uri.split("#")?.[1]
  if (desc) {
    return decodeURIComponent(desc).split(" [")[0] ?? "UN"
  }
  return "UN"
}
