import { decrypt, encrypt } from "./index"

jest.mock("@/env", () => ({
  env: {
    HMAC_SECRET: "test-secret",
  },
}))

describe("Encryption module", () => {
  const sampleText = "Hello, World!"

  test("encrypt should return a string", () => {
    const encryptedText = encrypt(sampleText)
    expect(typeof encryptedText).toBe("string")
  })

  test("decrypt should return the original text", () => {
    const encryptedText = encrypt(sampleText)
    const decryptedText = decrypt(encryptedText)
    expect(decryptedText).toBe(sampleText)
  })

  test("encrypt should produce different outputs for different inputs", () => {
    const anotherText = String(Math.random())
    const encryptedText1 = encrypt(sampleText)
    const encryptedText2 = encrypt(anotherText)
    expect(encryptedText1).not.toBe(encryptedText2)
  })
})
