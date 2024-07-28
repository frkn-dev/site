import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Providers } from "@/components/providers"
import { Toaster } from "@/components/ui/sonner"
import type { PropsWithChildren } from "react"

type Props = {
  locale: "ru" | "en"
}

export function Page({ children, locale }: PropsWithChildren<Props>) {
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
