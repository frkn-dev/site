"use client"
import { createI18nClient } from "next-international/client"

export const {
  useI18n,
  useScopedI18n,
  useChangeLocale,
  useCurrentLocale,
  I18nProviderClient,
} = createI18nClient({
  en: () => import("./en"),
  ru: () => import("./ru"),
  es: () => import("./es"),
  pt: () => import("./pt"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  tr: () => import("./tr"),
})
