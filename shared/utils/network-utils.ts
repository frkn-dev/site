export interface IPInfo {
  ip: string
  ipType: string
  provider: string
  country: string
  city?: string
  flag?: string
  status?: string
}

interface IPWhoResponse {
  ip: string
  success: boolean
  type: string
  continent: string
  continent_code: string
  country: string
  country_code: string
  region: string
  region_code: string
  city: string
  latitude: number
  longitude: number
  is_eu: boolean
  postal: string
  calling_code: string
  capital: string
  borders: string
  flag: {
    img: string
    emoji: string
    emoji_unicode: string
  }
  connection: {
    asn: number
    org: string
    isp: string
    domain: string
  }
  timezone: {
    id: string
    abbr: string
    is_dst: boolean
    offset: number
    utc: string
    current_time: string
  }
}

export const IP_SOURCES = {
  // ipify: "https://api.ipify.org?format=json",
  // ipify64: "https://api64.ipify.org?format=json",
  //ipleak: "https://ipleak.net/json/",
  //ipapi: "https://ipapi.co/json/",
  ipwho: "https://ipwho.is/",
  //ipinfo: "https://ipinfo.io/json",
}

const EXPECTED_DNS_SERVERS = [
  "8.8.8.8", // Google DNS
  "8.8.4.4", // Google DNS
]

export const checkDNSLeak = (ip: string): boolean => {
  const isExpectedDNS = EXPECTED_DNS_SERVERS.includes(ip)
  return !isExpectedDNS
}

export const getIPType = (ip: string): string => {
  return ip.includes(":") ? "IPv6" : "IPv4"
}

export const fetchIPInfo = async (source: string): Promise<IPInfo | null> => {
  try {
    const response = await fetch(source)
    const data: IPWhoResponse = await response.json()

    let provider = "Неизвестно"
    let country = "Неизвестно"
    let city = "Неизвестно"
    let flag = "*"

    if (data.success) {
      provider = data.connection.org
      country = data.country
      city = data.city
      flag = data.flag.img
    }

    return {
      ip: data.ip,
      ipType: getIPType(data.ip),
      provider,
      country,
      city,
      flag,
    }
  } catch (error) {
    console.error(`Ошибка при запросе к ${source}:`, error)
    return null
  }
}

export const fetchIP = async (): Promise<IPInfo | null> => {
  try {
    const ipInfo = await fetchIPInfo(IP_SOURCES.ipwho)
    return ipInfo
  } catch (error) {
    console.error(`Ошибка при запросе к ${IP_SOURCES.ipwho}:`, error)
    return null
  }
}

export const handleWebRTCCandidate = (
  candidate: RTCIceCandidate,
  ips: IPInfo[],
): IPInfo | null => {
  const addr = /^candidate:.+ (\S+) \d+ typ/.exec(candidate.candidate)
  if (
    !addr?.[1] ||
    addr[1].includes(".local") ||
    ips.some((ip) => ip.ip === addr[1])
  ) {
    return null
  }

  return {
    ip: addr[1],
    ipType: addr[1].includes(":") ? "IPv6" : "IPv4",
    provider: "WebRTC",
    country: "Локальная сеть",
    status: "Возможная утечка",
  }
}

export const getWebRTCIPs = async (): Promise<IPInfo[]> => {
  const ips: IPInfo[] = []

  return new Promise((resolve) => {
    try {
      const pc = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
      })

      pc.createDataChannel("")

      pc.onicecandidate = (event) => {
        if (event.candidate) {
          const newIp = handleWebRTCCandidate(event.candidate, ips)
          if (newIp) {
            ips.push(newIp)
          }
        }
      }

      pc.createOffer()
        .then((offer) => pc.setLocalDescription(offer))
        .catch((error) =>
          console.error("Ошибка при создании WebRTC оффера:", error),
        )

      setTimeout(() => {
        pc.close()
        resolve(ips)
      }, 1000)
    } catch (error) {
      console.error("Ошибка при получении WebRTC IP:", error)
      resolve([])
    }
  })
}
