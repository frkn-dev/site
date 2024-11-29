import { getHostname } from "@/shared/config"
import type { MetadataRoute } from "next"

const url = getHostname()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "", // home
    "/faq",
    "/xray",
    "/shadowsocks",
    "/vless",
    "/wireguard",
    "/web3",
    "/setup/windows",
    "/setup/macos",
    "/setup/android",
    "/setup/ios",
    "/status",
    "/privacy-policy",
    "/terms-of-use",
  ].map((page) => ({
    url: url + page,
    alternates: {
      languages: {
        en: url + page,
        ru: url + "/ru" + page,
      },
    },
  }))
}
