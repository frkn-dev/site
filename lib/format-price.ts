export function formatPrice(n: number, locale = "en", currency = "USD") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(n)
}
