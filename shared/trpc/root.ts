import {
  cardlink,
  cryptomus,
  emailNewsletter,
  lava,
  stripe,
  user,
  wg,
  xray,
} from "./routers"
import { createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
  emailNewsletter,
  stripe,
  lava,
  cryptomus,
  cardlink,
  user,
  wg,
  xray,
})

export type AppRouter = typeof appRouter
