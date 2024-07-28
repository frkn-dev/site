import { ExternalLink } from "@/components/external-link"
import { PageSection } from "@/components/page-section"

import { getLocations } from "@/shared/api"
import { Instructions } from "./components/Instructions"

import { QRCodeAndConfig } from "./components/QRCodeAndConfig"

import { getStaticParams } from "@/locales/server"
import { setStaticParamsLocale } from "next-international/server"

export function generateStaticParams() {
  return getStaticParams()
}

type Props = {
  params: {
    locale: "ru" | "en"
  }
}

export default async function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)

  const locations = await getLocations()

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
          Если у вас возникли какие-либо проблемы с установкой, то напишите нам
          в телеграм-бот{" "}
          <ExternalLink href="https://t.me/frkn_support">
            @frkn_support
          </ExternalLink>
        </p>
      </PageSection>
    </div>
  )
}
