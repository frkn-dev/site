import { emailNewsletter, stripe, user, wg } from "./routers"
import { createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
  emailNewsletter,
  stripe,
  user,
  wg,
})

export type AppRouter = typeof appRouter
