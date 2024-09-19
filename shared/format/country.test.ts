import { extractCountry } from "./country"

describe("extractCountry", () => {
  it("should extract the country code from the URI", () => {
    const uri =
      "ss://dGVzdDp0ZXN0QHRlc3QuY29t==@1.1.1.1:1080#%F0%9F%87%B3%F0%9F%87%B1%20NL-1%20%5BFRKN%5D%20Shadowsocks"
    const result = extractCountry(uri)
    expect(result).toBe("🇳🇱 NL-1")
  })

  it('should return "UN" if no country code is present', () => {
    const uriWithoutCountry = "ss://dGVzdDp0ZXN0QHRlc3QuY29t==@1.1.1.1:1080"
    const result = extractCountry(uriWithoutCountry)
    expect(result).toBe("UN")
  })
})
