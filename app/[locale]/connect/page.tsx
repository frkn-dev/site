import { isLoggedIn } from "@/shared/guards"
import { getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
import { setStaticParamsLocale } from "next-international/server"
import { Main } from "./main"

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)
  await isLoggedIn()

  return (
    <div>
      <Main />
    </div>
  )
}
