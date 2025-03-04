import ip from "ip"

export function getUserAddress(offset: number) {
  const base = ip.toLong("10.0.0.1")

  return ip.fromLong(base + offset) + "/32"
}
