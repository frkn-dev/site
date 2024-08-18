import { TRPCError, initTRPC } from "@trpc/server"
import superjson from "superjson"
import type { createContext } from "./context"

const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape
  },
})

const isAuthed = t.middleware(async (opts) => {
  if (!opts.ctx.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You have to be logged in to do this",
    })
  }

  return opts.next({
    ctx: {
      user: opts.ctx.user,
    },
  })
})

export const createTRPCRouter = t.router

export const publicProcedure = t.procedure
export const protectedProcedure = t.procedure.use(isAuthed)

export const createCallerFactory = t.createCallerFactory
