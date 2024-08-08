"use client"

import { LanguageMenu } from "@/components/language-menu"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { useScopedI18n } from "@/shared/locales/client"
import { Menu } from "lucide-react"
import Link from "next/link"

export function MobileMenu() {
  const t = useScopedI18n("header")

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          aria-label="Menu"
          className="lg:hidden"
        >
          <Menu size={24} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-4">
          <nav className="flex flex-col gap-4 mb-6">
            <Link href="/#pricing">{t("pricing")}</Link>
            <Link href="/installation">{t("connect")}</Link>
            <LanguageMenu />
          </nav>
          <Button className="w-full">{t("login")}</Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
