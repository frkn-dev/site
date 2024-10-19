import { getMe } from "@/shared/services/auth/get-me"
import { redirect } from "next/navigation"

export async function isLoggedIn() {
  const me = await getMe()

  if (!me) {
    redirect("/registration")
  }

  return me
}
