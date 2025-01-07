import { formatExpire, formatStrategy } from "./strategy"

describe("formatStrategy", () => {
  it('should return null for "no_reset" strategy', () => {
    expect(formatStrategy("no_reset", "en")).toBeNull()
  })

  it('should return correct format for "day" strategy in English locale', () => {
    expect(formatStrategy("day", "en")).toBe("per day")
  })

  it('should return correct format for "month" strategy in Russian locale', () => {
    expect(formatStrategy("month", "ru")).toBe("в месяц")
  })

  it('should return correct format for "week" strategy in unsupported locale', () => {
    // @ts-expect-error
    expect(formatStrategy("week", "uk")).toBe("/ week")
  })
})

describe("formatExpire", () => {
  it("should return formatted date for a valid timestamp", () => {
    const expire = 1695158400
    const locale = "en-US"
    const result = formatExpire(expire, locale)
    expect(result).toBe("(9/20/2023)")
  })

  it("should format the date according to the locale", () => {
    const expire = 1695158400
    const locale = "ru-RU"
    const result = formatExpire(expire, locale)
    expect(result).toBe("(20.09.2023)")
  })
})
