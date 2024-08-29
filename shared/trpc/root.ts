import { emailNewsletter, stripe, user, wg, xray } from "./routers"
import { createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
  emailNewsletter,
  stripe,
  user,
  wg,
  xray,
})

export type AppRouter = typeof appRouter
