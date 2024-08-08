import { createTRPCReact } from "@trpc/react-query"

import type { AppRouter } from "@/shared/api"

export const trpc = createTRPCReact<AppRouter>({})
