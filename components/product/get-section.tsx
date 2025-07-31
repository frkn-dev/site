"use client"
import { useScopedI18n } from "@/shared/locales/client"

export default function GetSection() {
  const t = useScopedI18n("product.get")

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="space-y-2 md:space-y-4 mb-6 md:mb-8">
          <h2 className="text-[2em] md:text-[2.75em] lg:text-[3.5em] font-bold leading-tight uppercase">
            {t("headerTop")}
            <br />
            {t("headerBottom")}
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          {t("description")}
        </p>

        <a
          href="/installation"
          className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-black text-white rounded-full text-base md:text-lg font-medium hover:bg-black/90 transition-colors group"
        >
          Get started
          <span className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  )
}
