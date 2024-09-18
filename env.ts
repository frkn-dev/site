import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    PASSWORD_PEPPER: z.string().min(1),
    JWT_SECRET: z.string().min(1),
    HMAC_SECRET: z.string().min(1),
    MAIL_SENDER_API_KEY: z.string().min(1),
    STRIPE_SECRET_KEY: z.string().startsWith("sk_"),
    STRIPE_PUBLISHABLE_KEY: z.string().startsWith("pk_"),
    STRIPE_WEBHOOK_SECRET: z.string().startsWith("whsec_"),
    STRIPE_PRICE_ID_MONTHLY: z.string().startsWith("price_"),
    LAVA_TOP_SECRET_KEY: z.string().min(1),
    LAVA_TOP_WEBHOOK_SECRET: z.string().min(1),
    DATABASE_URL: z.string().startsWith("postgresql://"),
    DIRECT_URL: z.string().startsWith("postgresql://"),
    KV_REST_API_URL: z.string().startsWith("https://"),
    KV_REST_API_TOKEN: z.string().min(1),
    XRAY_API: z.string().startsWith("https://"),
    XRAY_USERNAME: z.string().min(1),
    XRAY_PASSWORD: z.string().min(1),
  },
  client: {},
  experimental__runtimeEnv: {},
})
