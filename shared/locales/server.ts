import { createI18nServer } from "next-international/server"

export type Props = {
  params: {
    locale: "en" | "ru" | "es" | "pt" | "fr" | "de" | "tr"
  }
}

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    en: () => import("./en"),
    ru: () => import("./ru"),
    es: () => import("./es"),
    pt: () => import("./pt"),
    fr: () => import("./fr"),
    de: () => import("./de"),
    tr: () => import("./tr"),
  })
