import { getAuth } from "@/shared/auth/server"
import { redirect } from "next/navigation"

export async function isLoggedIn() {
  const auth = await getAuth()

  if (!auth || auth.status === "error") {
    redirect("/registration")
  }

  return auth
}
