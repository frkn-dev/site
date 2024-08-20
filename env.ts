import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    HOST: z.string().url(),
    PASSWORD_PEPPER: z.string().min(1),
    JWT_SECRET: z.string().min(1),
    MAIL_SENDER_API_KEY: z.string().min(1),
    STRIPE_SECRET_KEY: z.string().startsWith("sk_"),
    STRIPE_PUBLISHABLE_KEY: z.string().startsWith("pk_"),
    STRIPE_WEBHOOK_SECRET: z.string().startsWith("whsec_"),
    DATABASE_URL: z.string().startsWith("postgresql://"),
    DIRECT_URL: z.string().startsWith("postgresql://"),
    STRIPE_PRICE_ID_MONTHLY: z.string().startsWith("price_"),
  },
  client: {},
  experimental__runtimeEnv: {},
})
