import ExtensibleSection from "@/components/product/extensible-section"
import FeaturesSection from "@/components/product/features-section"
import GetSection from "@/components/product/get-section"
import HeroSection from "@/components/product/hero-section"
import SpecsSection from "@/components/product/specs-section"
import TrustSection from "@/components/product/trust-section"
import { getI18n } from "@/shared/locales/server"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n()
  return {
    title: t("product.meta.title"),
    description: t("product.meta.description"),
  }
}

export default async function ProductPage() {
  const t = await getI18n()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <TrustSection />
      <ExtensibleSection />
      <FeaturesSection />
      <SpecsSection />
      <GetSection />
    </main>
  )
}
