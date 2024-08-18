import type { User } from "@/shared/entities/User"
import { trpc } from "@/shared/trpc"

export function useMe(initial?: User) {
  const utils = trpc.useUtils()

  return trpc.user.me.useQuery(undefined, {
    initialData: initial || utils.user.me.getData,
  })
}
