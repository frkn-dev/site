import { DOMAIN } from "@/shared/config"
import type { MetadataRoute } from "next"
import { headers } from "next/headers"

export default function robots(): MetadataRoute.Robots {
  const host = headers().get("host")
  const isProd = host === DOMAIN

  return {
    rules: {
      userAgent: "*",
      disallow: isProd ? "/api" : "/",
    },
    sitemap: isProd ? `https://${DOMAIN}/sitemap.xml` : undefined,
  }
}
