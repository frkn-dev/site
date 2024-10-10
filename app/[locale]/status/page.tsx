import ClusterStatus from "@/components/cluster-status"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { getScopedI18n, getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
import { setStaticParamsLocale } from "next-international/server"

export function generateStaticParams() {
  return getStaticParams()
}

export default async function StatusPage({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)

  const t = await getScopedI18n("app.status")
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="font-mono text-center text-2xl font-bold mb-8">
        {t("services")}
      </h1>
      <div className="p-4 flex justify-between items-center border rounded-lg shadow-md mb-8">
        <h2>{t("databases")}</h2>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="flex items-center space-x-2"
        >
          <a
            href="https://status.frkn.org"
            target="_blank"
            rel="noopener noreferrer"
            title={t("check")}
          >
            <img
              src="https://uptime.betterstack.com/status-badges/v2/monitor/1ikq8.svg"
              alt={t("databases")}
              className="cursor-pointer"
            />
          </a>
        </HoverBorderGradient>
      </div>
      <ClusterStatus />
    </div>
  )
}
