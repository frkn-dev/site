import { Advantage } from "@/components/landing/advantage"
import { Hero } from "@/components/landing/hero"
import { LocationsSection } from "@/components/landing/locations-section"
import { NewsletterForm } from "@/components/landing/newsletter-form"
import { PricingFeature } from "@/components/landing/pricing-feature"
import { ReviewsSection } from "@/components/landing/reviews-section"
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
import { AiFillYoutube } from "react-icons/ai"
import { SiUtorrent } from "react-icons/si"

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="p-8 rounded-sm bg-light text-dark shadow-lg">
            <h3 className="mb-2 text-3xl font-bold tracking-tight">Free</h3>
            <div className="mb-4 flex items-center gap-2 text-xl font-semibold">
              {formatPrice(0, locale)}
            </div>
            <div className="mb-6 space-y-2">
              <PricingFeature>{pricingT("free.feature_1")}</PricingFeature>
              <PricingFeature>{pricingT("free.feature_2")}</PricingFeature>
              <PricingFeature>{pricingT("free.feature_3")}</PricingFeature>
            </div>
            <Button variant="secondary" className="w-full" asChild>
              <Link href="/dashboard/connections">
                {pricingT("free.button")}
              </Link>
            </Button>
          </div>
          <div className="p-8 rounded-sm shadow-lg bg-zinc-950 text-light flex flex-col justify-between h-full">
            <div>
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
                <PricingFeature>
                  {pricingT("pro.feature_3")}{" "}
                  <AiFillYoutube
                    style={{ width: "24px", height: "24px", color: "#FF0000" }}
                  />
                </PricingFeature>
                <PricingFeature>
                  {pricingT("pro.feature_4")}{" "}
                  <SiUtorrent
                    style={{ width: "24px", height: "24px", color: "#76b83f" }}
                  />
                </PricingFeature>
              </div>
            </div>
            <PurchaseButton plan="1m" />
          </div>
          <div className="p-8 rounded-sm shadow-lg bg-blue-600 text-light flex flex-col justify-between h-full">
            <div>
              <h3 className="mb-2 text-3xl font-bold tracking-tight">
                Pro Plus
              </h3>
              <div className="mb-4 flex items-baseline gap-2 text-xl font-semibold">
                {pricingT("pro_plus.price")}{" "}
                <span className="text-sm font-semibold tracking-tight text-muted-light">
                  {pricingT("pro_plus.in_year")}
                </span>
              </div>
              <div className="mb-6 space-y-2">
                <PricingFeature>
                  {pricingT("pro_plus.feature_1")}
                </PricingFeature>
                <PricingFeature>
                  {pricingT("pro_plus.feature_2")}
                </PricingFeature>
              </div>
            </div>
            <PurchaseButton plan="1y" />
          </div>
        </div>
      </PageSection>
      <LocationsSection />
      <ReviewsSection />
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
    es: {
      title: "FRKN — VPN rápido y gratuito con soporte para el protocolo XRay",
      description:
        "Apoyamos la libertad de expresión y nos oponemos a cualquier forma de censura. Desarrollamos una VPN descentralizada que no recopila ni almacena datos de los usuarios.",
    },
    pt: {
      title: "FRKN — VPN rápido e gratuito com suporte ao protocolo XRay",
      description:
        "Apoiamos a liberdade de expressão e nos opomos a qualquer forma de censura. Desenvolvemos uma VPN descentralizada que não coleta ou armazena dados dos usuários.",
    },
    fr: {
      title: "FRKN — VPN rapide et gratuit avec support du protocole XRay",
      description:
        "Nous soutenons la liberté d'expression et nous opposons à toute forme de censure. Nous développons un VPN décentralisé qui ne collecte ni ne stocke les données des utilisateurs.",
    },
    de: {
      title:
        "FRKN — schneller, kostenloser VPN mit XRay-Protokollunterstützung",
      description:
        "Wir unterstützen die Meinungsfreiheit und lehnen jede Form von Zensur ab. Wir entwickeln ein dezentrales VPN, das keine Benutzerdaten sammelt oder speichert.",
    },
    tr: {
      title: "FRKN — XRay protokol desteği ile hızlı, ücretsiz VPN",
      description:
        "İfade özgürlüğünü destekliyoruz ve her türlü sansüre karşıyız. Kullanıcı verilerini toplamayan veya saklamayan merkeziyetsiz bir VPN geliştiriyoruz.",
    },
  }[locale]
}
