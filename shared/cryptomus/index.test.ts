import { getSign } from "./index"

describe("getSign", () => {
  const key = "secret"

  it("should return correct MD5 hash", () => {
    const body = JSON.stringify({ test: "data" })
    const result = getSign(body, key)

    expect(result).toBe("6f1e11adddd6f484bbb7e45a51656951")
  })

  it("should return MD5 hash of correct length for random body", () => {
    const body = JSON.stringify({ random: Math.random() })
    const result = getSign(body, key)

    expect(result).toHaveLength(32)
  })
})
