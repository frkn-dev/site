"use client"

import type { PropsWithChildren } from "react"

import { I18nProviderClient } from "@/locales/client"

export function Providers({
  children,
  locale,
}: PropsWithChildren<{ locale: string }>) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
}
