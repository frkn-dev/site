import { DOMAIN } from "@/shared/config"
import type { MetadataRoute } from "next"
import { headers } from "next/headers"
import { env } from "@/env"

export default function robots(): MetadataRoute.Robots {
  const host = headers().get("host");
 
  const isProd = env.MODE === "prod";
  const disallow = isProd ? ["/api"] : "/"

  return {
    rules: {
      userAgent: "*",
      disallow,
    },
    sitemap: isProd ? `https://${DOMAIN}/sitemap.xml` : undefined,
  }
}
