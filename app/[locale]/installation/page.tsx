import { ExternalLink } from "@/components/external-link"
import { PageSection } from "@/components/page-section"

import { Instructions } from "./components/Instructions"

import { QRCodeAndConfig } from "./components/QRCodeAndConfig"

import { isLoggedIn } from "@/shared/guards"
import { getScopedI18n, getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
import { caller } from "@/shared/trpc/caller"
import { setStaticParamsLocale } from "next-international/server"

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)
  await isLoggedIn()
  const locations = await caller.peer.locations()
  const t = await getScopedI18n("app.installation")

  return (
    <div>
      <div className="grid grid-rows-1 lg:grid-cols-[1fr_auto] max-w-6xl w-full mx-auto px-4 gap-6">
        <Instructions locations={locations || []} />
        <div className="hidden lg:block">
          <QRCodeAndConfig locations={locations || []} place="aside" />
        </div>
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
