import { createI18nServer } from "next-international/server"

export type Props = {
  params: {
    locale: "ru" | "en"
  }
}

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    ru: () => import("./ru"),
    en: () => import("./en"),
    es: () => import("./es"),
  })
