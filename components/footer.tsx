"use client"
import { useCurrentLocale, useScopedI18n } from "@/shared/locales/client"
import Link from "next/link"

export function Footer() {
  const t = useScopedI18n("footer")
  const locale = useCurrentLocale()

  return (
    <footer className="max-w-6xl w-full mx-auto px-4 py-8">
      <div className="flex flex-col justify-center md:grid md:grid-cols-3 gap-6 w-full">
        <div className="flex flex-col md:items-center gap-6">
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

        <div className="flex flex-col md:items-center gap-6">
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
          <Link
            href="https://frkn.org/xray"
            target="_blank"
            rel="noopener noreferrer"
          >
            XRay
          </Link>
          <Link
            href="https://frkn.org/shadowsocks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shadowsocks
          </Link>
          <Link
            href="https://frkn.org/vless"
            target="_blank"
            rel="noopener noreferrer"
          >
            VLESS
          </Link>
          <Link
            href="https://frkn.org/wireguard"
            target="_blank"
            rel="noopener noreferrer"
          >
            WireGuard
          </Link>
        </div>
      </div>
      <p className="font-mono text-center mt-12">FRKN LLP</p>
    </footer>
  )
}
