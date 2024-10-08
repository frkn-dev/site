"use client"
import { useChangeLocale, useCurrentLocale } from "@/shared/locales/client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageMenu() {
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-fit capitalize">
        {locale}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            changeLocale("ru")
          }}
        >
          Ru
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            changeLocale("en")
          }}
        >
          En
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
