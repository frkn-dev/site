import { HOSTNAME } from "@/shared/config"
import type { MetadataRoute } from "next"
import { headers } from "next/headers"

export default function robots(): MetadataRoute.Robots {
  const host = headers().get("host")
  const isProd = host === HOSTNAME

  return {
    rules: {
      userAgent: "*",
      disallow: isProd ? "/api" : "/",
    },
  }
}
