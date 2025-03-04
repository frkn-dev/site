import { generateWireGuardKeys } from "./index"

describe("generateWireGuardKeys", () => {
  test("should generate valid base64-encoded keys", () => {
    const { privateKey, publicKey } = generateWireGuardKeys()

    expect(privateKey).toMatch(/^[A-Za-z0-9+/=]+$/)
    expect(publicKey).toMatch(/^[A-Za-z0-9+/=]+$/)

    expect(Buffer.from(privateKey, "base64")).toHaveLength(32)
    expect(Buffer.from(publicKey, "base64")).toHaveLength(32)
  })

  test("should generate different private and public keys", () => {
    const { privateKey, publicKey } = generateWireGuardKeys()
    expect(privateKey).not.toBe(publicKey)
  })

  test("should generate unique key pairs", () => {
    const keyPair1 = generateWireGuardKeys()
    const keyPair2 = generateWireGuardKeys()

    expect(keyPair1.privateKey).not.toBe(keyPair2.privateKey)
    expect(keyPair1.publicKey).not.toBe(keyPair2.publicKey)
  })
})
