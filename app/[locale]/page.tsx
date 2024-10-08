import { Advantage } from "@/components/landing/advantage"
import { Hero } from "@/components/landing/hero"
import { NewsletterForm } from "@/components/landing/newsletter-form"
import { PricingFeature } from "@/components/landing/pricing-feature"
import { PageSection } from "@/components/page-section"
import { PurchaseButton } from "@/components/purchase-button"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/shared/format/price"
import { getScopedI18n, getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
import { GitPullRequestDraft, Logs, Rocket, Shield } from "lucide-react"
import type { Metadata } from "next"
import { setStaticParamsLocale } from "next-international/server"
import Link from "next/link"

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Home({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)

  const advantagesT = await getScopedI18n("advantages")
  const pricingT = await getScopedI18n("pricing")

  return (
    <>
      <Hero />
      <PageSection className="md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Advantage
            icon={<Logs className="text-slate-500" />}
            title={advantagesT("no_logs.title")}
            text={advantagesT("no_logs.text")}
            textColor="text-slate-500"
          />
          <Advantage
            icon={<GitPullRequestDraft className="text-green-600" />}
            title={advantagesT("open_source.title")}
            text={advantagesT("open_source.text")}
            textColor="text-green-600"
          />
          <Advantage
            icon={<Rocket className="text-rose-700" />}
            title={advantagesT("speed.title")}
            text={advantagesT("speed.text")}
            textColor="text-rose-600"
          />
          <Advantage
            icon={<Shield className="text-blue-600" />}
            title={advantagesT("reliability.title")}
            text={advantagesT("reliability.text")}
            textColor="text-blue-600"
          />
        </div>
      </PageSection>
      <PageSection className="md:py-8" id="pricing">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 rounded-sm shadow-lg">
            <h3 className="mb-2 text-3xl font-bold tracking-tight">Free</h3>
            <div className="mb-4 flex items-center gap-2 text-xl font-semibold">
              {formatPrice(0, locale)}
            </div>
            <div className="mb-6 space-y-2">
              <PricingFeature>{pricingT("free.feature_1")}</PricingFeature>
              <PricingFeature>{pricingT("free.feature_2")}</PricingFeature>
              <PricingFeature>{pricingT("free.feature_3")}</PricingFeature>
              <PricingFeature>{pricingT("free.feature_4")}</PricingFeature>
            </div>
            <Button variant="secondary" className="w-full" asChild>
              <Link href="/connect">{pricingT("free.button")}</Link>
            </Button>
          </div>
          <div className="p-8 rounded-sm shadow-lg bg-zinc-950 text-lightTitle">
            <h3 className="mb-2 text-3xl font-bold tracking-tight">Pro</h3>
            <div className="mb-4 flex items-baseline gap-2 text-xl font-semibold">
              {pricingT("pro.price")}{" "}
              <span className="text-sm font-semibold tracking-tight text-muted-foreground">
                {pricingT("pro.in_month")}
              </span>
            </div>
            <div className="mb-6 space-y-2">
              <PricingFeature>{pricingT("pro.feature_1")}</PricingFeature>
              <PricingFeature>{pricingT("pro.feature_2")}</PricingFeature>
              <PricingFeature isEmpty>Empty</PricingFeature>
              <PricingFeature isEmpty>Empty</PricingFeature>
            </div>
            <PurchaseButton />
          </div>
        </div>
      </PageSection>
      <NewsletterForm />
    </>
  )
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: {
      title: "FRKN — быстрый, бесплатный VPN с поддержкой протокола XRay",
      description:
        "Мы поддерживаем свободу слова и выступаем против любых форм цензуры. Разрабатываем децентрализованный VPN, который не собирает и не хранит пользовательские данные.",
    },
    en: {
      title: "FRKN — fast, free VPN with XRay protocol support",
      description:
        "We support freedom of speech and oppose any form of censorship. We develop a decentralized VPN that does not collect or store user data.",
    },
  }[locale]
}
