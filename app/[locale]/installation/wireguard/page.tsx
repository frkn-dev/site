import { ExternalLink } from "@/components/external-link"
import { PageSection } from "@/components/page-section"

import { Instructions } from "../components/Instructions"

import { getScopedI18n, getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
import { setStaticParamsLocale } from "next-international/server"

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)
  const t = await getScopedI18n("app.installation")

  return (
    <div>
      <div className="grid grid-rows-1 lg:grid-cols-[1fr_auto] max-w-6xl w-full mx-auto px-4 gap-6">
        <Instructions />
      </div>
      <PageSection className="py-4 md:py-4">
        <p>
          {t("support")}{" "}
          <ExternalLink href="https://t.me/frkn_support">
            @frkn_support
          </ExternalLink>
        </p>
      </PageSection>
    </div>
  )
}
