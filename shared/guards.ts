import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"
import { redirect } from "next/navigation"

export async function isLoggedIn(currentUrl: string, cookie?: RequestCookie) {
  const data = await fetch(currentUrl + "/api/user/me", {
    headers: {
      Cookie: cookie?.name + "=" + cookie?.value,
    },
  })
  const auth = await data.json()

  if (!auth || auth.status === "error") {
    return redirect("/registration")
  }

  return auth
}
