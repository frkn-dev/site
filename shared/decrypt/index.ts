import crypto from "node:crypto"
import { env } from "@/env"

const algorithm = "aes-256-cbc"
const key = crypto.createHash("sha256").update(env.HMAC_SECRET).digest()
const iv = Buffer.alloc(16, 0)

export function encrypt(text: string): string {
  const cipher = crypto.createCipheriv(algorithm, key, iv)
  return cipher.update(text, "utf8", "hex") + cipher.final("hex")
}

export function decrypt(encrypted: string): string {
  const decipher = crypto.createDecipheriv(algorithm, key, iv)
  return decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8")
}
