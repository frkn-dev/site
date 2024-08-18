import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import type { NextRequest } from "next/server"

import { createContext } from "@/shared/trpc/context"
import { appRouter } from "@/shared/trpc/root"

export const dynamic = "force-dynamic"

const handler = async (req: NextRequest) => {
  return fetchRequestHandler({
    createContext: () => {
      return createContext(req)
    },
    endpoint: "/api/trpc",
    req,
    router: appRouter,
  })
}

export { handler as GET, handler as POST }
