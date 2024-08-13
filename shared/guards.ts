import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"

export async function isLoggedIn() {
  let isLogged = false

  try {
    const cookie = cookies().get("frkn_auth")
    const host = headers().get("host")
    const protocol = headers().get("x-forwarded-proto") || "http"
    const currentUrl = `${protocol}://${host}`

    if (cookie) {
      const data = await fetch(currentUrl + "/api/user/me", {
        headers: {
          Cookie: cookie.name + "=" + cookie.value,
        },
      })
      const auth = await data.json()

      if (auth.status === "success") {
        isLogged = true
      }
    }
  } catch (error) {
    console.error("isLoggedIn", error)
  } finally {
    if (!isLogged) redirect("/registration")
  }
}
