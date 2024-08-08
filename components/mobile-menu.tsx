"use client"

import { LanguageMenu } from "@/components/language-menu"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { useScopedI18n } from "@/shared/locales/client"
import { Menu } from "lucide-react"
import Link from "next/link"
import { User } from "./user"

export function MobileMenu() {
  const t = useScopedI18n("header")

  return (
    <Drawer noBodyStyles>
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
          <User
            withUserClassName="flex justify-center"
            withoutUserClassName="grid grid-cols-2 gap-4"
            align="center"
          />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
