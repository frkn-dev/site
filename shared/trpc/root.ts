import { emailNewsletter, peer, stripe, user } from "./routers"
import { createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
  emailNewsletter,
  stripe,
  user,
  peer,
})

export type AppRouter = typeof appRouter
