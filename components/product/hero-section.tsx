"use client"
import { useScopedI18n } from "@/shared/locales/client"
import Image from "next/image"

export default function HeroSection() {
  const t = useScopedI18n("product.hero")

  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image
          src="/product/1.webp"
          alt="FRKN Box Hero Background"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-emerald-400/60 via-emerald-400/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-cyan-400/60 via-cyan-400/30 to-transparent" />
      </div>

      <div className="container relative mx-auto h-full px-4">
        <div className="absolute bottom-16 left-4">
          <h1 className="font-bold text-white text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-tight max-w-5xl">
            {t("line1")} <br />
            {t("line2")} <br />
            {t("line3")}
          </h1>
        </div>
      </div>
    </section>
  )
}
