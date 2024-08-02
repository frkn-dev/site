"use client"

import { Separator } from "@/components/ui/separator"
import { useCurrentLocale, useScopedI18n } from "@/shared/locales/client"
import Link from "next/link"

export function Footer() {
  const t = useScopedI18n("footer")
  const locale = useCurrentLocale()

  return (
    <footer className="max-w-6xl w-full mx-auto px-4 py-8 space-y-4">
      <div className="flex justify-between lg:grid lg:grid-cols-2 w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <Link
            href="https://github.com/frkn-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          {locale === "ru" && (
            <Link
              href="https://t.me/FRKN_org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </Link>
          )}
          <Link
            href={
              locale === "ru"
                ? "https://x.com/frkn_org"
                : "https://x.com/frkn_vpn"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
        </div>
        <div className="flex flex-col text-end md:flex-row md:text-start gap-6 justify-self-end">
          <Link
            href="https://t.me/frkn_support"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("support")}
          </Link>
          <Link href="/privacy-policy">{t("privacy")}</Link>
          <Link href="/terms-of-use">{t("terms")}</Link>
        </div>
      </div>
      <Separator className="w-full" />
      <p className="font-mono text-center">FRKN LLP</p>
    </footer>
  )
}
