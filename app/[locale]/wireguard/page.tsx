import { getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
import type { Metadata } from "next"
import { setStaticParamsLocale } from "next-international/server"
import Link from "next/link"

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)

  if (locale === "ru") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">WireGuard</h1>

        <p className="mb-4">
          WireGuard – VPN-протокол, разработанный специально для безопасной
          передачи информации через сеть Интернет. В сравнении с другими
          протоколами, WireGuard отличается простотой (примерно 4000 строк кода)
          и при этом максимальной конфигурационной гибкостью и
          производительностью, которая обеспечивается меньшими вычислительными
          мощностями, а за счет современных криптографических протоколов у
          WireGuard гораздо меньше потенциальных точек уязвимости.
        </p>

        <p className="mb-4">
          WireGuard отличает высокая скорость передачи данных независимо от
          того, на каких устройствах используется протокол. Он одинаково хорошо
          справляется и с нагруженной сетью маршрутизаторов, и с обменом данными
          с небольшими одиночными устройствами на разных платформах и с разными
          ОС.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Недостатки</h2>
        <p className="mb-4">
          DPI легко может обнаруживать трафик WireGuard на основе фиксированных
          размеров сообщений инициирования, ответа и файлов cookie, а также
          наличия 4-байтового тега во всех сообщениях. Поэтому VPN-сервисы на
          основе WireGuard сегодня повсеместно банятся в России, Китае и других
          странах.
        </p>

        <p className="mb-4">
          Однако есть способ решить эту проблему. Используя wgFRKN (форк
          протокола), можно обходить блокировки за счет изменения параметров
          протокола, которые отслеживаются системами DPI. Например, в wgFRKN
          изменены заголовки пакетов, изменены их размеры с помощью дописанных
          рандомных байтов.
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">WireGuard</h1>

      <p className="mb-4">
        WireGuard is a VPN protocol designed specifically for secure information
        transmission over the Internet. Compared to other protocols, WireGuard
        is characterized by simplicity (about 4000 lines of code) and at the
        same time maximum configuration flexibility and performance, which is
        ensured by lower computational power, and due to modern cryptographic
        protocols, WireGuard has much fewer potential points of vulnerability.
      </p>

      <p className="mb-4">
        WireGuard is distinguished by high data transfer speed regardless of the
        devices on which the protocol is used. It handles both heavily loaded
        router networks and data exchange with small single devices on different
        platforms and with different OS equally well.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Disadvantages</h2>
      <p className="mb-4">
        DPI can easily detect WireGuard traffic based on fixed sizes of
        initiation, response, and cookie messages, as well as the presence of a
        4-byte tag in all messages. Therefore, WireGuard-based VPN services are
        widely banned in Russia, China, and other countries today.
      </p>

      <p className="mb-4">
        However, there is a way to solve this problem. By using wgFRKN (a fork
        of the protocol), you can bypass blocks by changing the protocol
        parameters that are tracked by DPI systems. For example, in wgFRKN,
        packet headers are changed, and their sizes are modified with appended
        random bytes.
      </p>
    </div>
  )
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: {
      title: "WireGuard: Безопасный и быстрый VPN-протокол",
      description:
        "Узнайте о преимуществах и недостатках WireGuard, а также о способах обхода блокировок и подключении.",
    },
    en: {
      title: "WireGuard: Secure and Fast VPN Protocol",
      description:
        "Learn about the advantages and disadvantages of WireGuard, ways to bypass blocks, and how to connect.",
    },
    es: {
      title: "WireGuard: Protocolo VPN Seguro y Rápido",
      description:
        "Conozca las ventajas y desventajas de WireGuard, las formas de evitar bloqueos y cómo conectarse.",
    },
    pt: {
      title: "WireGuard: Protocolo VPN Seguro e Rápido",
      description:
        "Saiba mais sobre as vantagens e desvantagens do WireGuard, maneiras de contornar bloqueios e como se conectar.",
    },
    fr: {
      title: "WireGuard: Protocole VPN Sécurisé et Rapide",
      description:
        "Découvrez les avantages et les inconvénients de WireGuard, les moyens de contourner les blocages et comment se connecter.",
    },
    de: {
      title: "WireGuard: Sicheres und Schnelles VPN-Protokoll",
      description:
        "Erfahren Sie mehr über die Vorteile und Nachteile von WireGuard, Möglichkeiten zur Umgehung von Sperren und wie Sie sich verbinden.",
    },
    tr: {
      title: "WireGuard: Güvenli ve Hızlı VPN Protokolü",
      description:
        "WireGuard'ın avantajları ve dezavantajları, engelleri aşma yolları ve nasıl bağlanılacağı hakkında bilgi edinin.",
    },
  }[locale]
}
