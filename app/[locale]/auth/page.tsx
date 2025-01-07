import type { Props } from "@/shared/locales/server"
import { getStaticParams } from "@/shared/locales/server"
import type { Metadata } from "next"
import { setStaticParamsLocale } from "next-international/server"
import { Form } from "./components/form"

export function generateStaticParams() {
  return getStaticParams()
}

export default function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)

  return <Form />
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: { title: "Авторизация – FRKN VPN" },
    en: { title: "Authentication – FRKN VPN" },
    es: { title: "Autenticación – FRKN VPN" },
    pt: { title: "Autenticação – FRKN VPN" },
    fr: { title: "Authentification – FRKN VPN" },
    de: { title: "Authentifizierung – FRKN VPN" },
    tr: { title: "Kimlik Doğrulama – FRKN VPN" },
  }[locale]
}
