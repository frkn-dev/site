import { hashEmail } from "./index"

jest.mock("@/env", () => ({
  env: {
    HMAC_SECRET: "test-secret",
  },
}))

describe("hashEmail", () => {
  it("should return the correct HMAC hash for a given email", () => {
    const email = "test@example.com"
    const expectedHash =
      "04d4c4a9449d383577a0488be9bc871181165c41b8ecb4c2a188c89d20341bd4"

    expect(hashEmail(email)).toBe(expectedHash)
  })

  it("should return different hashes for different emails", () => {
    const email1 = "test1@example.com"
    const email2 = "test2@example.com"

    const hash1 = hashEmail(email1)
    const hash2 = hashEmail(email2)

    expect(hash1).not.toBe(hash2)
  })

  it("should return the same hash for the same email", () => {
    const email = "same@example.com"

    const hash1 = hashEmail(email)
    const hash2 = hashEmail(email)

    expect(hash1).toBe(hash2)
  })
})
