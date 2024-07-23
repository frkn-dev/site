"use client"

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { useScopedI18n } from "@/locales/client"

export function ConnectButton() {
  const t = useScopedI18n("hero")

  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className="flex items-center space-x-2"
    >
      <span className="min-w-24">{t("connect")}</span>
    </HoverBorderGradient>
  )
}
