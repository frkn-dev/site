import { env } from "@/env"
import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const emailNewsletter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        lang: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const groupToIdMap = {
        ru: "e3KmpA",
        en: "b4Ynq7",
      } as const
      type Lang = keyof typeof groupToIdMap

      try {
        const res = await fetch("https://api.sender.net/v2/subscribers", {
          method: "POST",
          body: JSON.stringify({
            email: input.email,
            groups: ["b21loM"].concat(groupToIdMap[input.lang as Lang]),
          }),
          headers: {
            Authorization: `Bearer ${env.MAIL_SENDER_API_KEY}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })

        const result = await res.json()

        return {
          error: result?.errors?.email?.[0],
        }
      } catch (error) {
        console.error("trpc.subscribers.create", error)
      }
    }),
})
