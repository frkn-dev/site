import { useMemo } from "react"
import { trpc } from "../trpc"

export type Config =
  | {
      type: "WireGuard"
      data: {
        config: string
        country: string
      }
    }
  | {
      type: "Shadowsocks"
      data: {
        limit: number
        usedTraffic: number
        links: string[]
        strategy: string
      }
    }
  | {
      type: "XRay"
      data: {
        limit: number
        usedTraffic: number
        links: string[]
        strategy: string
      }
    }

export function useConfigs() {
  const { data: wg, isLoading: isWgLoading } = trpc.wg.get.useQuery()
  const { data: xray, isLoading: isXrayLoading } = trpc.xray.get.useQuery()

  const isLoading = isWgLoading || isXrayLoading

  const data = useMemo(() => {
    const result: Config[] = []

    if (wg) {
      wg.forEach(({ config, country }) => {
        result.push({
          type: "WireGuard",
          data: {
            config,
            country,
          },
        })
      })
    }

    if (xray) {
      result.push({
        type: "XRay",
        data: {
          limit: xray.limit || 0,
          usedTraffic: xray.used_traffic || 0,
          links: xray.links.filter((link) => !link.startsWith("ss://")),
          strategy: xray.limit_reset_strategy,
        },
      })

      result.push({
        type: "Shadowsocks",
        data: {
          limit: xray.limit || 0,
          usedTraffic: xray.used_traffic || 0,
          links: xray.links.filter((link) => link.startsWith("ss://")),
          strategy: xray.limit_reset_strategy,
        },
      })
    }

    return result
  }, [wg, xray])

  return {
    isLoading,
    data,
  }
}
