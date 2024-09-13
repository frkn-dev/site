import { createHmac } from "node:crypto"
import { env } from "@/env"

export function hashEmail(email: string): string {
  return createHmac("sha256", env.HMAC_SECRET).update(email).digest("hex")
}
