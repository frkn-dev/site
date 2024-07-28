import type { PropsWithChildren } from "react"
import "./globals.css"
import { Page } from "@/components/page"
import { cn } from "@/shared/clsx"
import { getI18n, getStaticParams } from "@/shared/locales/server"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

type Props = PropsWithChildren<{
  params: {
    locale: "ru" | "en"
  }
}>

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n()

  return {
    title: "FRKN VPN",
    description: t("meta.description"),
  }
}

export function generateStaticParams() {
  return getStaticParams()
}

export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html
      lang={locale}
      className={cn(GeistSans.variable, GeistMono.variable, "h-full")}
    >
      <body className="h-full bg-black text-white">
        <Page locale={locale}>{children}</Page>
      </body>
    </html>
  )
}
