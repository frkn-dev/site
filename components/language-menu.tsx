"use client"
import { useChangeLocale, useCurrentLocale } from "@/shared/locales/client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const locales = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "ru", label: "Русский" },
  { code: "pt", label: "Português" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "tr", label: "Türkçe" },
] as const

export function LanguageMenu() {
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-fit capitalize">
        {locale}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map(({ code, label }) => (
          <DropdownMenuItem
            key={code}
            className="cursor-pointer"
            onClick={() => changeLocale(code)}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
