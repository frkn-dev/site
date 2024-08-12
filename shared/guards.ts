import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"

export async function isLoggedIn() {
  try {
    const cookie = cookies().get("frkn_auth")
    const host = headers().get("host")
    const protocol = headers().get("x-forwarded-proto") || "http"
    const currentUrl = `${protocol}://${host}`
    console.log("host", host, protocol, currentUrl)
    console.log("cookie", cookie)

    if (!cookie) {
      redirect("/registration")
      return
    }

    const data = await fetch(currentUrl + "/api/user/me", {
      headers: {
        Cookie: cookie.name + "=" + cookie.value,
      },
    })
    const auth = await data.json()

    if (!auth || auth.status === "error") {
      redirect("/registration")
      return
    }

    return auth
  } catch (error) {
    console.error("isLoggedIn", error)
  }
}
