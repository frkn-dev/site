"use client"

import { useScopedI18n } from "@/shared/locales/client"
import Image from "next/image"

export default function FeaturesSection() {
  const t = useScopedI18n("product.features")

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-[#E7E7E7]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 lg:space-y-12 text-right">
            <div>
              <p className="text-[2em] md:text-[2.5em] lg:text-[3em] font-bold text-[#00DC82] leading-none">
                {t("cpu")}
              </p>
              <p className="text-base md:text-lg text-gray-600 mt-2">
                {t("cpu_description")}
              </p>
            </div>

            <div>
              <p className="text-[2em] md:text-[2.5em] lg:text-[3em] font-bold text-[#00DC82] leading-none">
                {t("ram")}
              </p>
              <p className="text-base md:text-lg text-gray-600 mt-2">
                {t("ram_description")}
              </p>
            </div>

            <div>
              <p className="text-[2em] md:text-[2.5em] lg:text-[3em] font-bold text-[#00DC82] leading-none">
                {t("ethernet")}
              </p>
              <p className="text-base md:text-lg text-gray-600 mt-2">
                {t("ethernet_description")}
              </p>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="relative aspect-square h-full rounded-lg overflow-hidden">
              <Image
                src="/product/4.webp"
                alt="FRKN Box Extensible Features"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={false}
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30 rounded-lg" />
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 lg:space-y-12 max-w-[260px] md:max-w-[300px] text-sm md:text-base">
            <div>
              <h3 className="font-bold text-base md:text-lg mb-1">
                {t("wifi_support")}
              </h3>
              <p className="text-gray-600">{t("wifi_frequency")}</p>
            </div>

            <div>
              <h3 className="font-bold text-base md:text-lg mb-1">
                {t("aluminum_heatsink")}
              </h3>
              <p className="text-gray-600">{t("heatsink_description")}</p>
            </div>

            <div>
              <h3 className="font-bold text-base md:text-lg mb-1">
                {t("optimized_software")}
              </h3>
              <p className="text-gray-600">{t("software_description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
