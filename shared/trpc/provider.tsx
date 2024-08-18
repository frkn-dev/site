import type { Props } from "@/shared/locales/server"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { getFetch, httpBatchLink, loggerLink } from "@trpc/client"
import { createTRPCReact } from "@trpc/react-query"
import type { PropsWithChildren } from "react"
import { useState } from "react"
import superjson from "superjson"

import { Copy } from "lucide-react"
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
              toast.error(
                <div>
                  <p className="mb-4">{errorMessageMap[locale].main}</p>
                  <p className="mb-1.5 font-semibold">
                    {errorMessageMap[locale].info}
                  </p>
                  <div className="rounded-md border border-red-200 p-2">
                    <p className="mb-2 line-clamp-2 font-mono">
                      {error.message}
                    </p>
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
