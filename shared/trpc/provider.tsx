"use client"

import { Button } from "@/components/ui/button"
import type { Props } from "@/shared/locales/server"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import {
  TRPCClientError,
  getFetch,
  httpBatchLink,
  loggerLink,
} from "@trpc/client"
import { createTRPCReact } from "@trpc/react-query"
import type { PropsWithChildren } from "react"
import { useState } from "react"
import superjson from "superjson"

import { Copy } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import type { AppRouter } from "./root"

export const trpc = createTRPCReact<AppRouter>({
  abortOnUnmount: true,
  overrides: {
    useMutation: {
      async onSuccess(opts) {
        await opts.originalFn()
        await opts.queryClient.invalidateQueries()
      },
    },
  },
})

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

export function TRPCProvider({
  children,
  locale,
}: PropsWithChildren<Props["params"]>) {
  const router = useRouter()

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5000,
            retry: 1,
          },
          mutations: {
            onError(error) {
              if (error instanceof TRPCClientError) {
                const err = error as TRPCClientError<AppRouter>

                if (err.data?.code === "UNAUTHORIZED") {
                  router.push("/registration")

                  return
                }
              }

              toast.error(
                <div className="GlobalErrorToast">
                  <p className="Description">{errorMessageMap[locale].main}</p>
                  <p className="InfoTitle">{errorMessageMap[locale].info}</p>
                  <div className="InfoBlock">
                    <p className="InfoMessage">{error.message}</p>
                    <Button
                      type="button"
                      aria-label="copy error message to clipboard"
                      onClick={async () => {
                        await navigator.clipboard.writeText(error.message)
                      }}
                    >
                      <Copy className="CopyIcon" size={16} />{" "}
                      {errorMessageMap[locale].copy}
                    </Button>
                  </div>
                </div>,
                {
                  duration: 5000,
                },
              )
            },
          },
        },
      }),
  )

  const url = "/api/trpc/"

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink(),
        httpBatchLink({
          fetch: async (input, init?) => {
            const fetch = getFetch()

            return fetch(input, {
              ...init,
              credentials: "include",
            })
          },
          url,
          transformer: superjson,
        }),
      ],
    }),
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
