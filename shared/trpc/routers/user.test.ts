import argon2 from "argon2"
import { hashPassword } from "./user"

jest.mock("@/env", () => ({
  env: {
    PASSWORD_PEPPER: "test-pepper",
  },
}))

describe("hashPassword", () => {
  it("should return a hashed password", async () => {
    const password = "mySecretPassword"
    const hashedPassword = await hashPassword(password)
    expect(hashedPassword).not.toBe(password)

    const isMatch = await argon2.verify(hashedPassword, password, {
      salt: Buffer.from("test-pepper"),
    })
    expect(isMatch).toBe(true)
  })

  it("should return different hashes for different passwords", async () => {
    const password1 = "password1"
    const password2 = "password2"
    const hashedPassword1 = await hashPassword(password1)
    const hashedPassword2 = await hashPassword(password2)
    expect(hashedPassword1).not.toBe(hashedPassword2)
  })
})
