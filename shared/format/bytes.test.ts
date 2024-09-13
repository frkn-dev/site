import { formatBytes } from "./bytes"

describe("formatBytes", () => {
  it("should return ∞ when bytes is undefined", () => {
    expect(formatBytes()).toBe("∞")
  })

  it("should format bytes to MB with unit", () => {
    const result = formatBytes(1048576)
    expect(result).toBe("1 MB")
  })

  it("should format bytes to GiB without unit", () => {
    const result = formatBytes(1073741824, false)
    expect(result).toBe("1")
  })

  it("should correctly round down to the nearest whole number", () => {
    const result = formatBytes(1.5 * 1024 * 1024 * 1024) // 1.5 GiB
    expect(result).toBe("2 GiB")
  })
})
