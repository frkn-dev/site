import { env } from "@/env"
import jwt from "jsonwebtoken"
import { createAdminToken } from "./admin"

jest.mock("@/env", () => ({
  env: {
    XRAY_USERNAME: "test-username",
  },
}))

describe("createAdminToken", () => {
  const mockSecret = "test-secret"

  it("should return a valid JWT for an admin user", () => {
    const token = createAdminToken(mockSecret, false)
    expect(token).not.toBeNull()

    const decoded = jwt.verify(token as string, mockSecret) as jwt.JwtPayload

    expect(decoded.sub).toBe(env.XRAY_USERNAME)
    expect(decoded.access).toBe("admin")
    expect(decoded.iat).toBeLessThanOrEqual(Math.floor(Date.now() / 1000))
    // @ts-expect-error
    expect(decoded.exp).toBe(decoded.iat + 1440 * 60)
  })

  it("should return a valid JWT for a sudo user", () => {
    const token = createAdminToken(mockSecret)
    expect(token).not.toBeNull()

    const decoded = jwt.verify(token as string, mockSecret) as jwt.JwtPayload

    expect(decoded.sub).toBe(env.XRAY_USERNAME)
    expect(decoded.access).toBe("sudo")
  })

  it("should return null if an error occurs during token creation", () => {
    const invalidSecret = null as unknown as string
    const token = createAdminToken(invalidSecret, false)

    expect(token).toBeNull()
  })

  it("should throw an error if token is tampered with", () => {
    const token = createAdminToken(mockSecret, false)
    const tamperedToken = token?.replace(/\w/, "x")

    expect(() => jwt.verify(tamperedToken as string, mockSecret)).toThrow()
  })

  it("should set algorithm to HS256", () => {
    const token = createAdminToken(mockSecret, false)
    const decoded = jwt.decode(token as string, { complete: true }) as jwt.Jwt

    expect(decoded.header.alg).toBe("HS256")
  })
})
