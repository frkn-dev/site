import { API_BASE_URL } from "@/shared/config"
import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const peer = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ location: z.string().length(2) }))
    .query(async ({ input }) => {
      try {
        const data = await fetch(
          `${API_BASE_URL}/peer?location=${input.location}`,
        )
        return data.json() as Promise<Peer>
      } catch (error) {
        console.error("TRPC peer.create", error)
        return null
      }
    }),
  locations: protectedProcedure.query(async () => {
    try {
      const data = await fetch(API_BASE_URL + "/locations")
      return data.json() as Promise<Location[]>
    } catch (error) {
      console.error("TRPC peer.locations", error)
      return null
    }
  }),
})

// #region types
export type Location = {
  /** @example uk */
  code: string
  /** @example 🇬🇧 uk */
  name: string
}

export type Peer = {
  iface: {
    /** @example 10.0.0.1/24 */
    address: string
    /** @example example-key-123456 */
    key: string
    /** @example 8.8.8.8, 8.8.4.4 */
    dns: string
  }
  peer: {
    /** @example example-pubkey-abcdef */
    pubkey: string
    /** @example example-psk-123456 */
    psk: string
    /** @example 0.0.0.0/0 */
    allowed_ips: string
    /** @example 192.0.2.1:51820 */
    endpoint: string
  }
}
// #endregion
