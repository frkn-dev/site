import crypto from "node:crypto"

export function getSubscriptionToken(
  username: string,
  secret: string,
  created = new Date(),
): string {
  const timestamp = Math.ceil(created.getTime() / 1000)

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

export function decodeSubscriptionToken(
  token: string,
  secret: string,
): string | undefined {
  try {
    const uToken = token.slice(0, -10)
    const signature = token.slice(-10)

    const uTokenDec = Buffer.from(
      uToken.replaceAll("-", "+").replaceAll("_", "/"),
      "base64",
    ).toString("utf-8")
    const hash = crypto
      .createHash("sha256")
      .update(uToken + secret)
      .digest()

    const resign = Buffer.from(hash)
      .toString("base64")
      .replaceAll("+", "-")
      .replaceAll("/", "_")
      .slice(0, 10)

    if (signature === resign) {
      const [username, createdAt] = uTokenDec.split(",")

      return username as string
    }

    return undefined // signature doesn't match
  } catch {
    return undefined // decoding error or other problem
  }
}
