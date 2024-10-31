export function formatPrice(n: number, locale = "en") {
  return locale === "ru"
    ? new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "RUB",
      }).format(n)
    : new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "USD",
      }).format(n)
}
