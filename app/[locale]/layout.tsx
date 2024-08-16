import type { PropsWithChildren } from "react"
import "@/shared/globals.css"
import TRPC from "@/app/_trpc/Provider"
import { Page } from "@/components/page"
import { cn } from "@/shared/clsx"
import { HOSTNAME } from "@/shared/config"
import { getI18n, getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import Plausible from "next-plausible"

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

export default function RootLayout({
  children,
  params: { locale },
}: PropsWithChildren<Props>) {
  return (
    <html
      lang={locale}
      className={cn(GeistSans.variable, GeistMono.variable, "h-full")}
    >
      <head>
        <Plausible domain={HOSTNAME} />
      </head>

      <TRPC>
        <body className="h-full bg-black text-white">
          <Page locale={locale}>{children}</Page>
        </body>
      </TRPC>
    </html>
  )
}
