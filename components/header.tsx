"use client"

import { LanguageMenu } from "@/components/language-menu"
import { MobileMenu } from "@/components/mobile-menu"
import { Button } from "@/components/ui/button"
import { useScopedI18n } from "@/locales/client"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const t = useScopedI18n("header")

  return (
    <header className="flex justify-between lg:grid lg:grid-cols-3 max-w-6xl w-full mx-auto px-4 py-8 place-items-center">
      <div className="justify-self-start">
        <a href="/">
          <Image width={137} height={40} src="/logo.svg" alt="FRKN" />
        </a>
      </div>
      <div className="w-full justify-between hidden lg:flex px-6 py-4 rounded-full bg-zinc-950">
        <Link href="#pricing">{t("pricing")}</Link>
        <Link href="#pricing">{t("connect")}</Link>
        <Link href="/">{t("help")}</Link>
        <LanguageMenu />
      </div>
      <div className="justify-self-end">
        <Button className="hidden lg:flex">{t("login")}</Button>
        <MobileMenu />
      </div>
    </header>
  )
}
