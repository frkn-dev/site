import { createI18nMiddleware } from "next-international/middleware"
import type { NextRequest } from "next/server"

const I18nMiddleware = createI18nMiddleware({
  locales: ["ru", "en"],
  defaultLocale: "en",
  urlMappingStrategy: "rewriteDefault",
})

export function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const refCode = url.searchParams.get("ref")

  if (refCode) {
    const response = I18nMiddleware(request)
    response.cookies.set("frkn_ref", refCode, {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    })
    return response
  }

  return I18nMiddleware(request)
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
}
