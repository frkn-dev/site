"use client"

import type { PropsWithChildren } from "react"

import { I18nProviderClient } from "@/locales/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export function Providers({
  children,
  locale,
}: PropsWithChildren<{ locale: string }>) {
  return (
    <I18nProviderClient locale={locale}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </I18nProviderClient>
  )
}
