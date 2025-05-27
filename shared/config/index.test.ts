import { getHostname } from "@/shared/config"
import { env } from "@/env"


describe("getHostname", () => {
  it("should return the base domain when no subdomain is provided", () => {
    const result = getHostname()
    expect(result).toBe(env.DOMAIN)
  })

  it("should return the correct URL with a subdomain", () => {
    const result = getHostname("api")
    expect(result).toBe(`https://api.${env.DOMAIN}`)
  })

  it("should handle subdomains with special characters", () => {
    const result = getHostname("test-subdomain")
    expect(result).toBe(`https://test-subdomain.${env.DOMAIN}`)
  })

  it("should return a valid URL when subdomain is an empty string", () => {
    const result = getHostname("")
    expect(result).toBe(env.DOMAIN)
  })
})
