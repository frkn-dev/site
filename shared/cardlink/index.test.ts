import { generateHash } from "./index"

describe("generateHash", () => {
  it("should generate the correct uppercase MD5 hash for given values", () => {
    const OutSum = 193.85
    const InvId = "18364"
    const apiToken = "your_api_token"
    const result = generateHash(OutSum, InvId, apiToken)

    expect(result).toBe("226B5587FAB425DBEB1BAAC67EB32243")
  })

  it("should generate a hash with correct MD5 length using random data", () => {
    const OutSum = Math.random() * 1000
    const InvId = Math.floor(Math.random() * 100000).toString()
    const apiToken = Math.random().toString(36).substring(2, 15)

    const result = generateHash(OutSum, InvId, apiToken)

    expect(result.length).toBe(32)
    expect(result).toMatch(/^[A-F0-9]{32}$/)
  })
})
