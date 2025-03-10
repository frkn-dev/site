import { PageSection } from "@/components/page-section"
import { isLoggedIn } from "@/shared/guards"
import type { Props } from "@/shared/locales/server"
import type { Metadata } from "next"
import type { PropsWithChildren } from "react"

export default async function Layout({ children }: PropsWithChildren) {
  await isLoggedIn()

  return <PageSection className="md:py-1">{children}</PageSection>
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: { title: "Подключение – FRKN VPN" },
    en: { title: "Connection – FRKN VPN" },
    es: { title: "Conexión – FRKN VPN" },
    pt: { title: "Conexão – FRKN VPN" },
    fr: { title: "Connexion – FRKN VPN" },
    de: { title: "Verbindung – FRKN VPN" },
    tr: { title: "Bağlantı – FRKN VPN" },
  }[locale]
}
