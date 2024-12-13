import { getHostname } from "@/shared/config"

describe("getHostname", () => {
  it("should return the base domain when no subdomain is provided", () => {
    const result = getHostname()
    expect(result).toBe("https://frkn.org")
  })

  it("should return the correct URL with a subdomain", () => {
    const result = getHostname("api")
    expect(result).toBe("https://api.frkn.org")
  })

  it("should handle subdomains with special characters", () => {
    const result = getHostname("test-subdomain")
    expect(result).toBe("https://test-subdomain.frkn.org")
  })

  it("should return a valid URL when subdomain is an empty string", () => {
    const result = getHostname("")
    expect(result).toBe("https://frkn.org")
  })
})
