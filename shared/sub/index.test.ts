import { getSubscriptionToken } from "./index"

describe("getSubscriptionToken", () => {
  const mockUsername = "testuser"
  const mockDate = new Date("2024-12-13T12:00:00Z")
  const mockSecret = "supersecretkey"

  it("should generate a token with the correct format", () => {
    const token = getSubscriptionToken(mockUsername, mockDate, mockSecret)

    const [data, sign] = [token.slice(0, -10), token.slice(-10)]

    expect(data).toMatch(/^[a-zA-Z0-9-_]+$/)
    expect(sign).toHaveLength(10)
    expect(data + sign).toBe("dGVzdHVzZXIsMTczNDA5MTIwMAePQ8ehLTC8")
  })

  it("should produce consistent results for the same inputs", () => {
    const token1 = getSubscriptionToken(mockUsername, mockDate, mockSecret)
    const token2 = getSubscriptionToken(mockUsername, mockDate, mockSecret)

    expect(token1).toBe(token2)
  })

  it("should produce different tokens for different usernames", () => {
    const anotherUsername = "anotheruser"
    const token1 = getSubscriptionToken(mockUsername, mockDate, mockSecret)
    const token2 = getSubscriptionToken(anotherUsername, mockDate, mockSecret)

    expect(token1).not.toBe(token2)
  })

  it("should produce different tokens for different dates", () => {
    const anotherDate = new Date(mockDate.getTime() + 1000) // Add 1 second
    const token1 = getSubscriptionToken(mockUsername, mockDate, mockSecret)
    const token2 = getSubscriptionToken(mockUsername, anotherDate, mockSecret)

    expect(token1).not.toBe(token2)
  })

  it("should produce different tokens for different secrets", () => {
    const anotherSecret = "anothersecretkey"
    const token1 = getSubscriptionToken(mockUsername, mockDate, mockSecret)
    const token2 = getSubscriptionToken(mockUsername, mockDate, anotherSecret)

    expect(token1).not.toBe(token2)
  })
})
