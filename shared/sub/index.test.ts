import { getSubscriptionToken } from "./index"

describe("getSubscriptionToken", () => {
  const mockUsername = "testuser"
  const mockSecret = "supersecretkey"

  it("should generate a token with the correct format", () => {
    const token = getSubscriptionToken(mockUsername, mockSecret)

    const [data, sign] = [token.slice(0, -10), token.slice(-10)]

    expect(data + sign).toMatch(/^[a-zA-Z0-9-_]+$/)
    expect(sign).toHaveLength(10)
    expect(data.startsWith("dGVzdHVzZXIsMTczND")).toBe(true)
  })

  it("should produce consistent results for the same inputs", () => {
    const token1 = getSubscriptionToken(mockUsername, mockSecret)
    const token2 = getSubscriptionToken(mockUsername, mockSecret)

    expect(token1).toBe(token2)
  })

  it("should produce different tokens for different usernames", () => {
    const anotherUsername = "anotheruser"
    const token1 = getSubscriptionToken(mockUsername, mockSecret)
    const token2 = getSubscriptionToken(anotherUsername, mockSecret)

    expect(token1).not.toBe(token2)
  })

  it("should produce different tokens for different secrets", () => {
    const anotherSecret = "anothersecretkey"
    const token1 = getSubscriptionToken(mockUsername, mockSecret)
    const token2 = getSubscriptionToken(mockUsername, anotherSecret)

    expect(token1).not.toBe(token2)
  })
})
