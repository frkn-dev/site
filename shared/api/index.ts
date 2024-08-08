import { initTRPC } from "@trpc/server"
import { z } from "zod"

const t = initTRPC.create()
const publicProcedure = t.procedure

export const appRouter = t.router({
  subscribers: {
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

        const res = await fetch("https://api.sender.net/v2/subscribers", {
          method: "POST",
          body: JSON.stringify({
            email: input.email,
            groups: ["b21loM"].concat(groupToIdMap[input.lang as Lang]),
          }),
          headers: {
            Authorization: "Bearer " + process.env.MAIL_SENDER_API_KEY,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })

        const result = await res.json()
        return {
          error: result?.errors?.email?.[0],
        }
      }),
  },
})

export type AppRouter = typeof appRouter
