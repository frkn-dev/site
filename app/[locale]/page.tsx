import { Advantage } from "@/components/landing/advantage"
import { Hero } from "@/components/landing/hero"
import { PricingFeature } from "@/components/landing/pricing-feature"
import { PageSection } from "@/components/page-section"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/shared/format-price"
import { getScopedI18n, getStaticParams } from "@/shared/locales/server"
import { GitPullRequestDraft, Logs, Rocket, Shield } from "lucide-react"
import { setStaticParamsLocale } from "next-international/server"
import Link from "next/link"

export function generateStaticParams() {
  return getStaticParams()
}

type Props = {
  params: {
    locale: "ru" | "en"
  }
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
          />
          <Advantage
            icon={<GitPullRequestDraft className="text-green-600" />}
            title={advantagesT("open_source.title")}
            text={advantagesT("open_source.text")}
          />
          <Advantage
            icon={<Rocket className="text-rose-700" />}
            title={advantagesT("speed.title")}
            text={advantagesT("speed.text")}
          />
          <Advantage
            icon={<Shield className="text-blue-600" />}
            title={advantagesT("reliability.title")}
            text={advantagesT("reliability.text")}
          />
        </div>
      </PageSection>
      <PageSection className="md:py-8" id="pricing">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 rounded-sm shadow-lg">
            <h3 className="mb-2 text-3xl font-bold tracking-tight">Free</h3>
            <div className="mb-4 flex items-center gap-2 text-xl font-semibold">
              {formatPrice(0)}
            </div>
            <div className="mb-6 space-y-2">
              <PricingFeature>{pricingT("free.feature_1")}</PricingFeature>
              <PricingFeature>{pricingT("free.feature_2")}</PricingFeature>
              <PricingFeature>{pricingT("free.feature_3")}</PricingFeature>
              <PricingFeature>{pricingT("free.feature_4")}</PricingFeature>
            </div>
            <Button variant="secondary" className="w-full" asChild>
              <Link href="/installation">{pricingT("free.button")}</Link>
            </Button>
          </div>
          <div className="p-8 rounded-sm shadow-lg bg-zinc-950">
            <h3 className="mb-2 text-3xl font-bold tracking-tight">Pro</h3>
            <div className="mb-4 flex items-end gap-2 text-xl font-semibold">
              {formatPrice(4.99)}{" "}
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
            <Button variant="default" className="w-full" asChild>
              <Link href="https://t.me/frkn_support" target="_blank">
                {pricingT("pro.button")}
              </Link>
            </Button>
          </div>
        </div>
      </PageSection>
      {/* <NewsletterForm /> */}
    </>
  )
}
