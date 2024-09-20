import crypto from "node:crypto"

/**
 * @see https://doc.cryptomus.com/business/general/request-format
 */
export function getSign(body: string, key: string): string {
  const base64 = Buffer.from(body).toString("base64")
  const data = base64 + key

  return crypto.createHash("md5").update(data).digest("hex")
}
