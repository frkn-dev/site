export function formatStrategy(
  strategy: "no_reset" | "day" | "week" | "month" | "year",
  locale: string,
) {
  if (strategy === "no_reset") return null

  if (locale === "en") return "per " + strategy

  if (locale === "ru") {
    return {
      day: "в день",
      week: "в неделю",
      month: "в месяц",
      year: "в год",
    }[strategy]
  }

  return "/ " + strategy
}

export function formatExpire(
  expire: number | null | undefined,
  locale: string,
) {
  if (!expire) return null

  return "(" + new Date(expire * 1000).toLocaleDateString(locale) + ")"
}
