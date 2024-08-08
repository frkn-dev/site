"use client"

import { type PropsWithChildren, useState } from "react"

import { I18nProviderClient } from "@/shared/locales/client"
import type { Props } from "@/shared/locales/server"
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { Copy } from "lucide-react"
import { toast } from "sonner"

const errorMessageMap = {
  ru: {
    main: "Извините за неудобства. Мы устраняем неполадки на сервере. Пожалуйста, свяжитесь со службой поддержки, если вам нужна дополнительная помощь.",
    info: "Информация об ошибке:",
    copy: "Скопировать сообщение об ошибке",
  },
  en: {
    main: "Sorry for the inconvenience. We're fixing a server issue. Please contact support if you need further assistance.",
    info: "Error info:",
    copy: "Copy error message",
  },
} as const

export function Providers({
  children,
  locale,
}: PropsWithChildren<Props["params"]>) {
  const [queryClient] = useState(() => {
    return new QueryClient({
      mutationCache: new MutationCache({
        onSuccess: () => {
          queryClient.invalidateQueries()
        },
      }),
      defaultOptions: {
        mutations: {
          onError(error) {
            toast.error(
              <div>
                <p className="mb-4">{errorMessageMap[locale].main}</p>
                <p className="mb-1.5 font-semibold">
                  {errorMessageMap[locale].info}
                </p>
                <div className="rounded-md border border-red-200 p-2">
                  <p className="mb-2 line-clamp-2 font-mono">{error.message}</p>
                  <button
                    className="flex items-center text-black dark:text-white"
                    type="button"
                    aria-label="copy error message to clipboard"
                    onClick={async () => {
                      await navigator.clipboard.writeText(error.message)
                    }}
                  >
                    <Copy className="mr-2 size-4" />{" "}
                    {errorMessageMap[locale].copy}
                  </button>
                </div>
              </div>,
              {
                duration: 5000,
              },
            )
          },
        },
      },
    })
  })

  return (
    <I18nProviderClient locale={locale}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </I18nProviderClient>
  )
}
