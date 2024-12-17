type Config = {
  address: string
  port?: number
  password: string
  country?: string | null
  method: "aes-256-gcm" | "chacha20-ietf-poly1305" | string
}

export function getShadowsocksLink({
  address,
  port,
  password,
  country,
  method,
}: Config) {
  const base64 = Buffer.from(`${method}:${password}`, "utf-8")
    .toString("base64")
    .replaceAll("=", "")

  const remark = getFlag(country) + " [FRKN]"
  const encodedRemark = encodeURIComponent(remark)

  return `ss://${base64}@${address}:${port || 1080}#${encodedRemark}`
}

export function getFlag(country?: string | null): string {
  if (!country) return "🏴‍☠️ UN"

  const map = {
    NL: "🇳🇱",
    US: "🇺🇸",
    RU: "🇷🇺",
    AT: "🇦🇹",
    CH: "🇨🇭",
    TR: "🇹🇷",
    JP: "🇯🇵",
    AM: "🇦🇲",
    KZ: "🇰🇿",
  }

  const flag = map[country.split("-")[0] as keyof typeof map] || "🏴‍☠️"

  return flag + " " + country
}
