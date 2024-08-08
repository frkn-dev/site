import type { Peer } from "@/shared/api/legacy"

export function createConfig({ iface, peer }: Peer): string {
  return `[Interface]
Address = ${iface.address}
DNS = ${iface.dns}
PrivateKey = ${iface.key}

[Peer]
PublicKey = ${peer.pubkey}
PresharedKey = ${peer.psk}
AllowedIPs = ${peer.allowed_ips}
Endpoint = ${peer.endpoint}
PersistentKeepalive = 25`
}
