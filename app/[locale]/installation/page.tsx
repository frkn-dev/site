import { isLoggedIn } from "@/shared/guards"
import { getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
import { setStaticParamsLocale } from "next-international/server"

export function generateStaticParams() {
  return getStaticParams()
}

const message = {
  ru: "Сервис VPN на протоколе WireGuard временно недоступен. Мы прилагаем все усилия, чтобы восстановить его работу в ближайшее время. Пока вы можете воспользоваться другими протоколами для подключения.",
  en: "The VPN service on the WireGuard protocol is temporarily unavailable. We are working hard to restore it as soon as possible. In the meantime, please use other protocols.",
  es: "El servicio VPN en el protocolo WireGuard está temporalmente fuera de servicio. Estamos trabajando arduamente para restablecerlo lo antes posible. Mientras tanto, por favor, utilice otros protocolos.",
  pt: "O serviço VPN no protocolo WireGuard está temporariamente indisponível. Estamos trabalhando para restaurá-lo o mais rápido possível. Enquanto isso, por favor, use outros protocolos.",
  fr: "Le service VPN utilisant le protocole WireGuard est temporairement indisponible. Nous faisons tout notre possible pour le rétablir dans les plus brefs délais. En attendant, veuillez utiliser d'autres protocoles.",
  de: "Der VPN-Dienst über das WireGuard-Protokoll ist vorübergehend nicht verfügbar. Wir arbeiten daran, ihn so schnell wie möglich wiederherzustellen. Bitte nutzen Sie in der Zwischenzeit andere Protokolle.",
  tr: "WireGuard protokolü üzerindeki VPN hizmeti geçici olarak kullanılamıyor. En kısa sürede hizmeti tekrar aktif hale getirmek için çalışıyoruz. Bu arada, lütfen diğer protokolleri kullanın.",
} as const

export default async function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)
  await isLoggedIn()

  return (
    <div>
      <div className="grid grid-rows-1 lg:grid-cols-[1fr_auto] max-w-6xl w-full mx-auto px-4 gap-6">
        {message[locale]}
      </div>
    </div>
  )
}
