import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"
import { redirect } from "next/navigation"

export async function isLoggedIn(currentUrl: string, cookie?: RequestCookie) {
  try {
    console.log("start isLoggedIn", currentUrl, cookie)
    const data = await fetch(currentUrl + "/api/user/me", {
      headers: {
        Cookie: cookie?.name + "=" + cookie?.value,
      },
    })
    console.log("isLoggedIn data", data)
    const auth = await data.json()
    console.log("isLoggedIn auth", auth)

    if (!auth || auth.status === "error") {
      return redirect("/registration")
    }

    return auth
  } catch (error) {
    console.error("isLoggedIn", error)
  }
}
