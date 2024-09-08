import { formatBytes } from "@/shared/format-bytes"
import { useMemo } from "react"
import { trpc } from "../trpc"

export type Config = {
  type: "WireGuard" | "Shadowsocks" | "XRay"
  limit: string
  resetLimitStrategy: string
  usedTraffic: string
  links: string[]
  country: string
  configJSON: string
  configId: string
  subscriptionUrl: string
}

export function useConfigs() {
  const { data: wg, isLoading: isWgLoading } = trpc.wg.get.useQuery()
  const { data: xray, isLoading: isXrayLoading } = trpc.xray.get.useQuery()

  const isLoading = isWgLoading || isXrayLoading

  const data = useMemo(() => {
    const result: Config[] = []

    if (wg) {
      wg.forEach(({ config, country, id }) => {
        result.push({
          type: "WireGuard",
          limit: "",
          resetLimitStrategy: "",
          usedTraffic: "",
          links: [],
          country,
          configJSON: config,
          configId: id,
          subscriptionUrl: "",
        })
      })
    }

    if (xray) {
      result.push({
        type: "XRay",
        limit: formatBytes(xray.limit),
        usedTraffic: formatBytes(xray.used_traffic),
        links: xray.links.filter((link) => !link.startsWith("ss://")),
        resetLimitStrategy: xray.limit_reset_strategy,
        country: "",
        configJSON: "",
        subscriptionUrl: xray.subscription_url,
        configId: "",
      })

      result.push({
        type: "Shadowsocks",
        limit: formatBytes(xray.limit),
        usedTraffic: formatBytes(xray.used_traffic),
        links: xray.links.filter((link) => link.startsWith("ss://")),
        resetLimitStrategy: xray.limit_reset_strategy,
        country: "",
        configJSON: "",
        subscriptionUrl: xray.subscription_url,
        configId: "",
      })
    }

    return result
  }, [wg, xray])

  return {
    isLoading,
    data,
  }
}
