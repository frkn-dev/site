import { createContext } from "./context"
import { appRouter } from "./root"
import { createCallerFactory } from "./trpc"

const createCaller = createCallerFactory(appRouter)

export const caller = createCaller(createContext)
