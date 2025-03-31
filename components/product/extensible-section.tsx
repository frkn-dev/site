"use client"
import { useScopedI18n } from "@/shared/locales/client"
import Image from "next/image"
import { HiArrowRight } from "react-icons/hi2"

export default function ExtensibleSection() {
  const t = useScopedI18n("product.extensible")

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-24 px-4">
      <div className="bg-[#E8EEF2] rounded-2xl md:rounded-[2rem] overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative order-2 md:order-1 h-full bg-gray-50 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/product/3.webp"
                alt="FRKN Box Extensible Features"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={false}
                quality={85}
              />
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-1 md:order-2">
            <h2 className="text-[2em] md:text-[2.75em] lg:text-[3.5em] leading-[1.1] font-bold mb-4 md:mb-6">
              {t("title")}
            </h2>

            <p className="text-base md:text-lg lg:text-[1.25em] leading-[1.4] text-black/60 mb-2">
              {t("description")}
            </p>

            <p className="text-base md:text-lg lg:text-[1.25em] leading-[1.4] text-black/60 mb-8 md:mb-12">
              {t("settings")}
            </p>

            <a
              href="/connect"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-black text-white rounded-full text-base md:text-lg font-medium hover:bg-black/90 transition-colors self-start group"
            >
              {t("cta")}
              <HiArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
