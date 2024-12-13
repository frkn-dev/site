import { formatPrice } from "./price"

describe("formatPrice", () => {
  it("should format price in USD for default locale (en)", () => {
    const price = 1234.56
    const result = formatPrice(price)
    expect(result).toBe("$1,234.56")

    const explicitly = formatPrice(price, "en")
    expect(explicitly).toBe("$1,234.56")
  })

  it("should format price in RUB for 'ru' locale", () => {
    const price = 1234.56
    const result = formatPrice(price, "ru")

    expect(result.replaceAll("\u00A0", " ")).toBe("1 234,56 ₽")
  })

  it("should handle very large numbers", () => {
    const price = 123456789.99
    const resultEn = formatPrice(price, "en")
    const resultRu = formatPrice(price, "ru")

    expect(resultEn).toBe("$123,456,789.99")
    expect(resultRu.replaceAll("\u00A0", " ")).toBe("123 456 789,99 ₽")
  })

  it("should handle zero correctly", () => {
    const price = 0
    const resultEn = formatPrice(price, "en")
    const resultRu = formatPrice(price, "ru")

    expect(resultEn).toBe("$0.00")
    expect(resultRu.replaceAll("\u00A0", " ")).toBe("0,00 ₽")
  })
})
