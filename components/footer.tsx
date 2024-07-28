"use client"

import { Separator } from "@/components/ui/separator"
import { useScopedI18n } from "@/locales/client"
import Link from "next/link"

export function Footer() {
  const t = useScopedI18n("footer")

  return (
    <footer className="max-w-6xl w-full mx-auto px-4 py-8 space-y-4">
      <div className="flex justify-between lg:grid lg:grid-cols-2 w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <Link href="/">GitHub</Link>
          <Link href="/">Telegram</Link>
          <Link href="/">Twitter</Link>
        </div>
        <div className="flex flex-col text-end md:flex-row md:text-start gap-6 justify-self-end">
          <Link href="https://t.me/frkn_support">{t("support")}</Link>
          <Link href="/">{t("contact")}</Link>
          <Link href="/">{t("merch")}</Link>
          <Link href="/privacy-policy">{t("privacy")}</Link>
          <Link href="/terms-of-use">{t("terms")}</Link>
        </div>
      </div>
      <Separator className="w-full" />
      <p className="font-mono text-center">© {new Date().getFullYear()} FRKN</p>
    </footer>
  )
}
