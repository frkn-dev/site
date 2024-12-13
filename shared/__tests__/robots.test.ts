import robots from "@/app/robots"
import { headers } from "next/headers"

jest.mock("next/headers", () => ({
  headers: jest.fn(),
}))

describe("robots function", () => {
  it("should return correct rules and sitemap for production", () => {
    ;(headers as jest.Mock).mockReturnValue({
      get: () => "frkn.org",
    })

    const result = robots()

    expect(result.sitemap).toEqual("https://frkn.org/sitemap.xml")

    if (Array.isArray(result.rules)) {
      result.rules.forEach((rule) => expect(rule.disallow).not.toContain("/"))
    } else {
      expect(result.rules.disallow).not.toBe("/")
    }
  })

  it("should return correct rules for non-production", () => {
    ;(headers as jest.Mock).mockReturnValue({
      get: () => "subdomain.frkn.org",
    })

    const result = robots()

    expect(result.rules).toEqual({
      userAgent: "*",
      disallow: "/",
    })
  })
})
