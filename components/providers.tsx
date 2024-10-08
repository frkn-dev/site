"use client"

import type { PropsWithChildren } from "react"

import { I18nProviderClient } from "@/shared/locales/client"
import type { Props } from "@/shared/locales/server"
import ThemeProvider from "@/shared/theme/provider"
import { TRPCProvider } from "@/shared/trpc/provider"

export function Providers({
  children,
  locale,
}: PropsWithChildren<Props["params"]>) {
  return (
    <I18nProviderClient locale={locale}>
      <TRPCProvider locale={locale}>
        <ThemeProvider>{children}</ThemeProvider>
      </TRPCProvider>
    </I18nProviderClient>
  )
}
