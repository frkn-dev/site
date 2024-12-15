import { decodeSubscriptionToken, getSubscriptionToken } from "./index"

describe("Subscription Token", () => {
  const username = "testUser"
  const secret = "superSecretKey"
  const mockDate = new Date("2024-12-14T12:00:00Z")

  beforeAll(() => jest.useFakeTimers().setSystemTime(mockDate.getTime()))
  afterAll(() => jest.useRealTimers())

  describe("getSubscriptionToken", () => {
    it("should generate a valid subscription token", () => {
      const token = getSubscriptionToken(username, secret, mockDate)

      expect(token).toBe("dGVzdFVzZXIsMTczNDE3NzYwMAVeoACh6SiY")
      expect(token.length).toBeGreaterThan(0)
    })

    it("should generate a unique token for different usernames", () => {
      const token1 = getSubscriptionToken("user1", secret, mockDate)
      const token2 = getSubscriptionToken("user2", secret, mockDate)

      expect(token1).not.toBe(token2)
    })

    it("should generate consistent tokens for the same inputs", () => {
      const token1 = getSubscriptionToken(username, secret, mockDate)
      const token2 = getSubscriptionToken(username, secret, mockDate)

      expect(token1).toBe(token2)
    })
  })

  describe("decodeSubscriptionToken", () => {
    it("should decode a valid subscription token", () => {
      const token = getSubscriptionToken(username, secret, mockDate)
      const decodedUsername = decodeSubscriptionToken(token, secret)

      expect(decodedUsername).toBe(username)
    })

    it("should return null for an invalid signature", () => {
      const token = getSubscriptionToken(username, secret, mockDate)
      const tamperedToken = token.slice(0, -1) + "A" // modified last character
      const decodedUsername = decodeSubscriptionToken(tamperedToken, secret)

      expect(decodedUsername).toBeUndefined()
    })

    it("should return null for an invalid token format", () => {
      const invalidToken = "invalid.token.format"
      const decodedUsername = decodeSubscriptionToken(invalidToken, secret)

      expect(decodedUsername).toBeUndefined()
    })

    it("should return null if secret is incorrect", () => {
      const token = getSubscriptionToken(username, secret, mockDate)
      const decodedUsername = decodeSubscriptionToken(token, "wrongSecret")

      expect(decodedUsername).toBeUndefined()
    })
  })
})
