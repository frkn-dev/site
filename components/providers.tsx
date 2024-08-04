"use client"

import type { PropsWithChildren } from "react"

import { I18nProviderClient } from "@/shared/locales/client"
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  }),
})

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
