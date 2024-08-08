import { initTRPC } from "@trpc/server"

const t = initTRPC.create()

export const appRouter = t.router({})

export type AppRouter = typeof appRouter

// export const serverClient = t.createCallerFactory(appRouter)
