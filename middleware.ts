import { createI18nMiddleware } from "next-international/middleware"
import type { NextRequest } from "next/server"

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "ru", "es", "pt", "fr", "de", "tr"],
  defaultLocale: "en",
  urlMappingStrategy: "rewriteDefault",
})

const cookiesOptions = {
  maxAge: 30 * 24 * 60 * 60, // 30 days
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  path: "/",
} as const

export function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const refCode = url.searchParams.get("ref")
  const admitadUid = url.searchParams.get("admitad_uid")

  const response = I18nMiddleware(request)

  if (refCode) {
    response.cookies.set("frkn_ref_source", "affiliate", cookiesOptions)
    response.cookies.set("frkn_ref", refCode, cookiesOptions)
  } else if (admitadUid) {
    response.cookies.set("frkn_ref_source", "admitad", cookiesOptions)
    response.cookies.set("frkn_ref", admitadUid, cookiesOptions)
  }

  return response
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
}
