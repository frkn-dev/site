import { trpc } from "@/shared/trpc"
import type { Prisma } from "@prisma/client"

export function useMe(initial?: Prisma.UsersGetPayload<true>) {
  const utils = trpc.useUtils()

  return trpc.user.me.useQuery(undefined, {
    initialData: initial || utils.user.me.getData,
  })
}
