import { formatStrategy } from "./strategy"

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
    expect(formatStrategy("week", "fr")).toBe("/ week")
  })
})
