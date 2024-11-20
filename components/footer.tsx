"use client"
import { useCurrentLocale, useScopedI18n } from "@/shared/locales/client"
import Link from "next/link"

export function Footer() {
  const t = useScopedI18n("footer")
  const locale = useCurrentLocale()

  return (
    <footer className="max-w-6xl w-full mx-auto px-4 py-8">
      <div className="flex flex-col justify-center md:grid md:grid-cols-4 gap-6 w-full">
        <div className="flex flex-col md:items-center gap-6">
          <p className="font-mono font-bold text-l text-center">FRKN LLP</p>
          <Link href="/status">{t("status")}</Link>
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
          <Link href="/web3">{t("tokenization")}</Link>
        </div>

        <div className="flex flex-col md:items-center gap-6">
          <p className="font-mono font-bold text-l text-center">{t("help")}</p>
          <Link href="/faq">FAQ</Link>
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

        <div className="flex flex-col md:items-center gap-6">
          <p className="font-mono font-bold text-l text-center">{t("setup")}</p>
          <Link href="/setup/ios">iOS (IPhone)</Link>
          <Link href="/setup/macos">macOS</Link>
          <Link href="/setup/android">Android</Link>
          <Link href="/setup/windows">Windows</Link>
        </div>

        <div className="flex flex-col md:items-center gap-6">
          <p className="font-mono font-bold text-l text-center">
            {t("protocols")}
          </p>
          <Link href="/xray">XRay</Link>
          <Link href="/shadowsocks">Shadowsocks</Link>
          <Link href="/vless">VLESS</Link>
          <Link href="/wireguard">WireGuard</Link>
        </div>
      </div>
    </footer>
  )
}
