import { getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
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
    ru: { title: "Регистрация – FRKN VPN" },
    en: { title: "Registration – FRKN VPN" },
    es: { title: "Registro – FRKN VPN" },
    pt: { title: "Registro – FRKN VPN" },
    fr: { title: "Inscription – FRKN VPN" },
    de: { title: "Registrierung – FRKN VPN" },
    tr: { title: "Kayıt – FRKN VPN" },
  }[locale]
}
