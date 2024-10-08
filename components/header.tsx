"use client"

import { LanguageMenu } from "@/components/language-menu"
import { MobileMenu } from "@/components/mobile-menu"
import ThemeSwitcher from "@/components/theme-switcher"
import { useScopedI18n } from "@/shared/locales/client"
import Image from "next/image"
import Link from "next/link"
import { User } from "./user"

export function Header() {
  const t = useScopedI18n("header")

  return (
    <header className="flex justify-between lg:grid lg:grid-cols-3 max-w-6xl w-full mx-auto px-4 py-8 place-items-center">
      <div className="justify-self-start">
        <a href="/">
          <Image width={137} height={40} src="/logo.svg" alt="FRKN" />
        </a>
      </div>
      <div className="w-full justify-between hidden lg:flex px-6 py-4 rounded-full">
        <Link href="/#pricing">{t("pricing")}</Link>
        <Link href="/connect">{t("connect")}</Link>
        <LanguageMenu />
        <ThemeSwitcher />
      </div>
      <div className="flex items-center gap-2 justify-self-end">
        <User
          withUserClassName="hidden lg:flex"
          withoutUserClassName="hidden lg:flex items-center gap-2"
        />
        <MobileMenu />
      </div>
    </header>
  )
}
