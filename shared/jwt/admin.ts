import { env } from "@/env"
import jwt from "jsonwebtoken"

const TOKEN_EXPIRE_MINUTES = 1440

export function createAdminToken(secret: string, isSudo = true): string | null {
  try {
    const data = {
      sub: env.XRAY_USERNAME,
      access: isSudo ? "sudo" : "admin",
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + TOKEN_EXPIRE_MINUTES * 60,
    }

    return jwt.sign(data, secret, { algorithm: "HS256" })
  } catch {
    return null
  }
}
