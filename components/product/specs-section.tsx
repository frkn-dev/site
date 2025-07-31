"use client"
import { useScopedI18n } from "@/shared/locales/client"
import Image from "next/image"

export default function SpecsSection() {
  const t = useScopedI18n("product.specs")

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          <div className="relative order-2 md:order-1 h-full bg-gray-50 flex items-center justify-center">
            <div className="relative w-full aspect-square">
              <Image
                src="/product/5.webp"
                alt="FRKN Box Extensible Features"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={false}
                quality={85}
              />
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold">
              <p>{t("title")}</p>
            </h2>
            <div className="space-y-3 md:space-y-4 text-gray-600 text-base md:text-lg">
              <p>{t("module")}</p>
              <p>{t("description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
