import {
  type IPInfo,
  IP_SOURCES,
  checkDNSLeak,
  fetchIP,
  fetchIPInfo,
  getIPType,
  getWebRTCIPs,
  handleWebRTCCandidate,
} from "./network-utils"

describe("checkDNSLeak", () => {
  it("should return true for unexpected DNS", () => {
    expect(checkDNSLeak("1.1.1.1")).toBe(true)
  })

  it("should return false for expected DNS", () => {
    expect(checkDNSLeak("8.8.8.8")).toBe(false)
  })
})

describe("getIPType", () => {
  it("should return IPv4 for IPv4 addresses", () => {
    expect(getIPType("192.168.1.1")).toBe("IPv4")
  })

  it("should return IPv6 for IPv6 addresses", () => {
    expect(getIPType("2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toBe("IPv6")
  })
})

describe("fetchIPInfo", () => {
  it("should fetch IP information successfully", async () => {
    const mockResponse = {
      ip: "8.8.8.8",
      success: true,
      connection: { org: "Google LLC" },
      country: "United States",
      city: "Mountain View",
      flag: { img: "https://flagcdn.com/us.svg" },
    }

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      }),
    ) as jest.Mock

    const ipInfo = await fetchIPInfo(IP_SOURCES.ipwho)
    expect(ipInfo).toEqual({
      ip: "8.8.8.8",
      ipType: "IPv4",
      provider: "Google LLC",
      country: "United States",
      city: "Mountain View",
      flag: "https://flagcdn.com/us.svg",
    })
  })

  it("should return null on fetch error", async () => {
    global.fetch = jest.fn(() => Promise.reject("API is down")) as jest.Mock

    const ipInfo = await fetchIPInfo(IP_SOURCES.ipwho)
    expect(ipInfo).toBeNull()
  })
})

describe("fetchIP", () => {
  it("should fetch IP information using fetchIPInfo", async () => {
    const mockIPInfo = {
      ip: "8.8.8.8",
      ipType: "IPv4",
      provider: "Google LLC",
      country: "United States",
      city: "Mountain View",
      flag: "https://flagcdn.com/us.svg",
    }

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            ip: "8.8.8.8",
            success: true,
            connection: { org: "Google LLC" },
            country: "United States",
            city: "Mountain View",
            flag: { img: "https://flagcdn.com/us.svg" },
          }),
        headers: new Headers(),
        ok: true,
        redirected: false,
        status: 200,
        statusText: "OK",
        type: "basic",
        url: "",
      } as Response),
    )

    const ipInfo = await fetchIP()
    expect(ipInfo).toEqual(mockIPInfo)
  })
})

describe("handleWebRTCCandidate", () => {
  it("should return null for local or duplicate IPs", () => {
    const candidate = {
      candidate: "candidate:0 1 UDP 2122252543 192.168.1.1 12345 typ host",
    } as RTCIceCandidate
    const ips = [
      {
        ip: "192.168.1.1",
        ipType: "IPv4",
        provider: "Local",
        country: "Local",
      },
    ]

    expect(handleWebRTCCandidate(candidate, ips)).toBeNull()
  })

  it("should return IPInfo for new IPs", () => {
    const candidate = {
      candidate: "candidate:0 1 UDP 2122252543 203.0.113.1 12345 typ host",
    } as RTCIceCandidate
    const ips: IPInfo[] = []

    const result = handleWebRTCCandidate(candidate, ips)
    expect(result).toEqual({
      ip: "203.0.113.1",
      ipType: "IPv4",
      provider: "WebRTC",
      country: "Локальная сеть",
      status: "Возможная утечка",
    })
  })
})

describe("getWebRTCIPs", () => {
  it("should resolve with an array of IPInfo", async () => {
    const mockCandidate = {
      candidate: "candidate:0 1 UDP 2122252543 203.0.113.1 12345 typ host",
    } as RTCIceCandidate

    jest
      .spyOn(RTCPeerConnection.prototype, "createOffer")
      .mockImplementation(() => Promise.resolve())
    jest
      .spyOn(RTCPeerConnection.prototype, "setLocalDescription")
      .mockImplementation(() => Promise.resolve())
    jest
      .spyOn(RTCPeerConnection.prototype, "close")
      .mockImplementation(() => undefined)

    const mockOnIceCandidate = jest.fn()
    Object.defineProperty(RTCPeerConnection.prototype, "onicecandidate", {
      set: mockOnIceCandidate,
    })

    const promise = getWebRTCIPs()

    mockOnIceCandidate.mock.calls[0][0]({ candidate: mockCandidate })

    const ips = await promise
    expect(ips).toEqual([
      {
        ip: "203.0.113.1",
        ipType: "IPv4",
        provider: "WebRTC",
        country: "Локальная сеть",
        status: "Возможная утечка",
      },
    ])
  })
})
