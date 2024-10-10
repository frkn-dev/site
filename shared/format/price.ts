export function formatPrice(n: number, locale = "en") {
  return locale === "en"
    ? new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "USD",
      }).format(n)
    : new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "RUB",
      }).format(n)
}
