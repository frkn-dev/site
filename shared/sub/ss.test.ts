import { getFlag, getShadowsocksLink } from "./ss"

describe("getShadowsocksLink", () => {
  it("should correctly generate the link with default port", () => {
    const config = {
      address: "example.com",
      password: "mypassword",
      method: "aes-256-gcm",
    }

    const result = getShadowsocksLink(config)

    const expectedBase64 = Buffer.from("aes-256-gcm:mypassword", "utf-8")
      .toString("base64")
      .replaceAll("=", "")

    expect(result).toBe(
      `ss://${expectedBase64}@example.com:1080#%F0%9F%8F%B4%E2%80%8D%E2%98%A0%EF%B8%8F%20UN%20%5BFRKN%5D`,
    )
  })

  it("should correctly generate the link with specified port and country", () => {
    const config = {
      address: "example.com",
      port: 8388,
      password: "mypassword",
      method: "chacha20-ietf-poly1305",
      country: "US",
    }

    const result = getShadowsocksLink(config)

    const expectedBase64 = Buffer.from(
      "chacha20-ietf-poly1305:mypassword",
      "utf-8",
    )
      .toString("base64")
      .replaceAll("=", "")

    expect(result).toBe(
      `ss://${expectedBase64}@example.com:8388#%F0%9F%87%BA%F0%9F%87%B8%20US%20%5BFRKN%5D`,
    )
  })

  it("should correctly generate the link with null country", () => {
    const config = {
      address: "example.com",
      password: "mypassword",
      method: "aes-256-gcm",
      country: null,
    }

    const result = getShadowsocksLink(config)

    const expectedBase64 = Buffer.from("aes-256-gcm:mypassword", "utf-8")
      .toString("base64")
      .replaceAll("=", "")

    expect(result).toBe(
      `ss://${expectedBase64}@example.com:1080#%F0%9F%8F%B4%E2%80%8D%E2%98%A0%EF%B8%8F%20UN%20%5BFRKN%5D`,
    )
  })
})

describe("getFlag", () => {
  it("should return the correct flag for known countries", () => {
    expect(getFlag("US")).toBe("🇺🇸 US")
    expect(getFlag("JP")).toBe("🇯🇵 JP")
  })

  it("should return the pirate flag for unknown countries", () => {
    expect(getFlag("XX")).toBe("🏴‍☠️ XX")
  })

  it("should return the pirate flag for null or undefined country", () => {
    expect(getFlag(null)).toBe("🏴‍☠️ UN")
    expect(getFlag(undefined)).toBe("🏴‍☠️ UN")
    expect(getFlag()).toBe("🏴‍☠️ UN")
  })
})
