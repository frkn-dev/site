import { getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
import { setStaticParamsLocale } from "next-international/server"
import { Form } from "./components/form"

export function generateStaticParams() {
  return getStaticParams()
}

export default function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)

  return <Form />
}
