import { I18nProviderClient } from "@/shared/locales/client"
import type { ReactElement } from "react"

export default function SubLayout({
  params: { locale },
  children,
}: { params: { locale: string }; children: ReactElement }) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
}
