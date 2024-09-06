"use client"

import { LanguageMenu } from "@/components/language-menu"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useScopedI18n } from "@/shared/locales/client"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { User } from "./user"

export function MobileMenu() {
  const t = useScopedI18n("header")
  const pathname = usePathname()
  const router = useRouter()

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
            <DrawerClose
              className="text-left"
              onClick={() => {
                if (pathname !== "/") {
                  router.push("/", {
                    scroll: false,
                  })
                }

                setTimeout(() => {
                  document.querySelector("#pricing")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }, 300)
              }}
            >
              {t("pricing")}
            </DrawerClose>
            <DrawerClose asChild>
              <Link href="/connect">{t("connect")}</Link>
            </DrawerClose>
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
