import { caller } from "@/shared/trpc/caller"

export async function getMe() {
  const user = await caller.user.me()

  return user
}
