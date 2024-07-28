import { ConnectButton } from "@/components/connect-button"
import { PageSection } from "@/components/page-section"
import { getScopedI18n } from "@/locales/server"
import hero from "@/public/hero.svg"
import Image from "next/image"

export async function Hero() {
  const t = await getScopedI18n("hero")

  return (
    <PageSection className="lg:flex relative">
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-4xl lg:text-6xl font-bold font-mono">{t("h1")}</h1>
        <p className="text-pretty text-base md:text-xl">{t("text")}</p>
        <ConnectButton />
      </div>
      <div className="absolute -z-10 top-0 right-0 opacity-20">
        <Image
          src={hero}
          alt=""
          sizes="100vw"
          className="w-full h-auto lg:max-w-3xl"
        />
      </div>
    </PageSection>
  )
}
