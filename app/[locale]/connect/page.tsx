import { isLoggedIn } from "@/shared/guards"
import { getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
import type { Metadata } from "next"
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

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: {
      title: "Подключение – FRKN VPN",
    },
    en: {
      title: "Connection – FRKN VPN",
    },
  }[locale]
}
