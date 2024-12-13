type SSConfig = {
  remark: string
  address: string
  port: number
  password: string
  method: "aes-256-gcm" | "chacha20-ietf-poly1305"
}

export function getShadowsocksLink({
  remark,
  address,
  port = 1080,
  password,
  method = "chacha20-ietf-poly1305",
}: SSConfig) {
  const base64 = Buffer.from(`${method}:${password}`, "utf-8")
    .toString("base64")
    .replaceAll("=", "")

  const encodedRemark = encodeURIComponent(remark)

  return `ss://${base64}@${address}:${port}#${encodedRemark}`
}
