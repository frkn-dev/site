import crypto from "node:crypto"

export function getSubscriptionToken(username: string, secret: string) {
  const timestamp = Math.ceil(new Date().getTime() / 1000)

  const data = Buffer.from(`${username},${timestamp}`, "utf-8")
    .toString("base64")
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/, "")

  const hash = crypto
    .createHash("sha256")
    .update(data + secret, "utf-8")
    .digest()

  const sign = Buffer.from(hash)
    .toString("base64")
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .slice(0, 10)

  return data + sign
}
