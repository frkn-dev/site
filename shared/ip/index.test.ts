import { getUserAddress } from "./index"

describe("getUserAddress", () => {
  test("should return correct CIDR notation for given offset", () => {
    expect(getUserAddress(0)).toBe("10.0.0.1/32")
    expect(getUserAddress(1)).toBe("10.0.0.2/32")
    expect(getUserAddress(255)).toBe("10.0.1.0/32")
    expect(getUserAddress(256)).toBe("10.0.1.1/32")
  })

  test("should work with large offsets", () => {
    expect(getUserAddress(65535)).toBe("10.1.0.0/32")
    expect(getUserAddress(65536)).toBe("10.1.0.1/32")
  })
})
