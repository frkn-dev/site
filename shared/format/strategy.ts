import type { Props } from "@/shared/locales/server"

export function formatStrategy(
  strategy: "no_reset" | "day" | "week" | "month" | "year",
  locale: Props["params"]["locale"],
) {
  if (strategy === "no_reset") return null

  const translations = {
    en: {
      day: "per day",
      week: "per week",
      month: "per month",
      year: "per year",
    },
    ru: {
      day: "в день",
      week: "в неделю",
      month: "в месяц",
      year: "в год",
    },
    es: {
      day: "por día",
      week: "por semana",
      month: "por mes",
      year: "por año",
    },
    pt: {
      day: "por dia",
      week: "por semana",
      month: "por mês",
      year: "por ano",
    },
    fr: {
      day: "par jour",
      week: "par semaine",
      month: "par mois",
      year: "par an",
    },
    de: {
      day: "pro Tag",
      week: "pro Woche",
      month: "pro Monat",
      year: "pro Jahr",
    },
    tr: {
      day: "günlük",
      week: "haftalık",
      month: "aylık",
      year: "yıllık",
    },
  } as const

  return translations[locale]?.[strategy] ?? "/ " + strategy
}

export function formatExpire(
  expire: number | null | undefined,
  locale: string,
) {
  if (!expire) return null

  return "(" + new Date(expire * 1000).toLocaleDateString(locale) + ")"
}
