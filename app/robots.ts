import { DOMAIN } from "@/shared/config"
import type { MetadataRoute } from "next"
import { headers } from "next/headers"

export default function robots(): MetadataRoute.Robots {
  const host = headers().get("host")
  const isProd = host === DOMAIN
  const disallow = isProd ? ["/api"] : "/"

  return {
    rules: {
      userAgent: "*",
      disallow,
    },
    sitemap: isProd ? `https://${DOMAIN}/sitemap.xml` : undefined,
  }
}
