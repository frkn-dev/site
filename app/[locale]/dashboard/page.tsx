import { PageSection } from "@/components/page-section"
import { isLoggedIn } from "@/shared/guards"
import { getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
import { setStaticParamsLocale } from "next-international/server"
import { Configs } from "./components/configs"

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)
  await isLoggedIn()

  return (
    <PageSection className="md:py-8 h-full">
      <Configs />
    </PageSection>
  )
}
