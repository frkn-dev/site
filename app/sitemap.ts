import { HOSTNAME } from "@/shared/config"
import type { MetadataRoute } from "next"

const url = "https://" + HOSTNAME

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "", // home
    "/faq",
    "/xray",
    "/shadowsocks",
    "/vless",
    "/wireguard",
    "/privacy-policy",
    "/terms-of-use",
    "/web3",
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
