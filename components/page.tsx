import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Providers } from "@/components/providers"
import { Toaster } from "@/components/ui/sonner"
import type { Props } from "@/shared/locales/server"
import type { PropsWithChildren } from "react"

export function Page({ children, locale }: PropsWithChildren<Props["params"]>) {
  return (
    <Providers locale={locale}>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-full">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <Toaster richColors position="top-right" />
    </Providers>
  )
}
