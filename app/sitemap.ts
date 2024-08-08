import { HOSTNAME } from "@/shared/config"
import type { MetadataRoute } from "next"

const url = "https://" + HOSTNAME

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url,
      alternates: {
        languages: {
          en: url,
          ru: url + "/ru",
        },
      },
    },
    {
      url: url + "/installation",
      alternates: {
        languages: {
          en: url + "/installation",
          ru: url + "/ru/installation",
        },
      },
    },
    {
      url: url + "/privacy-policy",
      alternates: {
        languages: {
          en: url + "/privacy-policy",
          ru: url + "/ru/privacy-policy",
        },
      },
    },
    {
      url: url + "/terms-of-use",
      alternates: {
        languages: {
          en: url + "/terms-of-use",
          ru: url + "/ru/terms-of-use",
        },
      },
    },
  ]
}
