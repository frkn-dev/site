import { getStaticParams } from "@/locales/server"
import { setStaticParamsLocale } from "next-international/server"
import { Instruction } from "./Instruction"

export function generateStaticParams() {
  return getStaticParams()
}

type Props = {
  params: {
    locale: "ru" | "en"
  }
}

export default async function Installation({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)
  return <Instruction />
}
