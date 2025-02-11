"use client"
import { useScopedI18n } from "@/shared/locales/client"
import Image from "next/image"

export default function TrustSection() {
  const t = useScopedI18n("product.trust")

  return (
    <section className="relative flex items-center w-full min-h-screen bg-gray-50 py-12 md:py-16 lg:py-24">
      <div className="absolute inset-0">
        <Image
          src="/product/2.webp"
          alt="FRKN Box Package"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="container h-full mx-auto px-4 relative">
        <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
          <h2 className="text-8xl lg:text-[10rem] xl:text-[12rem] leading-[0.95] tracking-tight font-bold">
            FRKN
            <br />
            VPN
            <br />
            NODE.
          </h2>
        </div>

        <div className="mt-16 md:mt-0 md:absolute md:right-0 md:bottom-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl leading-relaxed text-gray-600">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  )
}
