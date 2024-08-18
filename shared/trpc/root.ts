import { emailNewsletter, stripe, user } from "./routers"
import { createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
  emailNewsletter,
  stripe,
  user,
})

export type AppRouter = typeof appRouter
