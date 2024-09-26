import { getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
import { setStaticParamsLocale } from "next-international/server"

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)

  if (locale === "ru") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">XRay</h1>

        <p className="mb-4">
          XRay — это передовой VPN-протокол, который получил широкое
          распространение для обхода интернет-цензуры в России, Иране и Китае.
          Протокол базируется на V2Ray, но отличается улучшенной
          производительностью, новыми функциями и более высоким уровнем
          безопасности. Эти качества позволяют использовать его в условиях
          жестких ограничений доступа к интернету.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Преимущества</h2>
        <p className="mb-4">
          Улучшенное шифрование и высокая производительность. Одним из ключевых
          преимуществ XRay является использование протокола XTLS. Этот протокол
          оптимизирован для более эффективной передачи данных, что позволяет
          ускорить соединение и снизить задержки. В отличие от стандартного TLS,
          XTLS экономит вычислительные ресурсы и улучшает скорость работы,
          особенно в медленных или нестабильных сетях.
        </p>

        <p className="mb-4">
          Гибкость и расширяемость. XRay поддерживает несколько протоколов:
          VMess, VLESS, Shadowsocks и другие. Это делает его универсальным
          инструментом для обхода цензуры. Возможности по маскировке трафика и
          гибкости маршрутизации позволяют настроить VPN под конкретные нужды,
          обеспечивая стабильное соединение даже в условиях активного
          мониторинга и блокировки VPN-трафика.
        </p>

        <p className="mb-4">
          Скрытие трафика и обход DPI. В условиях, когда правительства
          используют технологии глубокого анализа пакетов (DPI) для блокировки
          VPN-трафика, XRay предоставляет инструменты для обхода таких
          ограничений. Например, XRay может замаскировать трафик под обычные
          HTTPS-запросы, что затрудняет его обнаружение и блокировку. Это
          особенно важно в Китае, где Великий китайский файрвол (GFW) активно
          обновляет методы фильтрации и блокировки трафика.
        </p>

        <h2 className="text-2xl font-semibold mb-4">FRKN</h2>
        <p className="mb-4">
          Для использования FRKN VPN с XRay на различных устройствах, скачайте
          одно из следующих приложений:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Для iPhone, iPad и Mac рекомендуем установить{" "}
            <a
              href="https://apps.apple.com/ru/app/foxray/id6448898396"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              FoXray
            </a>
          </li>
          <li>
            Для Windows и Android установите приложение Hiddify из{" "}
            <a
              href="https://apps.microsoft.com/detail/9pdfnl3qv2s5"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              Microsoft Store
            </a>{" "}
            или{" "}
            <a
              href="https://play.google.com/store/apps/details?id=app.hiddify.com"
              className="text-blue-500"
            >
              Google Play
            </a>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">XRay</h1>

      <p className="mb-4">
        XRay is an advanced VPN protocol that has gained widespread use for
        bypassing internet censorship in Russia, Iran, and China. The protocol
        is based on V2Ray but features improved performance, new functions, and
        a higher level of security. These qualities allow it to be used under
        strict internet access restrictions.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
      <p className="mb-4">
        Enhanced encryption and high performance. One of the key advantages of
        XRay is the use of the XTLS protocol. This protocol is optimized for
        more efficient data transmission, which speeds up the connection and
        reduces latency. Unlike standard TLS, XTLS saves computational resources
        and improves speed, especially in slow or unstable networks.
      </p>

      <p className="mb-4">
        Flexibility and expandability. XRay supports multiple protocols: VMess,
        VLESS, Shadowsocks, and others. This makes it a versatile tool for
        bypassing censorship. Traffic obfuscation and routing flexibility
        capabilities allow you to configure the VPN for specific needs, ensuring
        a stable connection even under active monitoring and VPN traffic
        blocking.
      </p>

      <p className="mb-4">
        Traffic obfuscation and DPI bypass. In conditions where governments use
        deep packet inspection (DPI) technologies to block VPN traffic, XRay
        provides tools to bypass such restrictions. For example, XRay can
        disguise traffic as regular HTTPS requests, making it difficult to
        detect and block. This is especially important in China, where the Great
        Firewall (GFW) actively updates its traffic filtering and blocking
        methods.
      </p>

      <h2 className="text-2xl font-semibold mb-4">FRKN</h2>
      <p className="mb-4">
        To use FRKN VPN with XRay on various devices, download one of the
        following applications:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          For iPhone, iPad, and Mac, we recommend installing{" "}
          <a
            href="https://apps.apple.com/ru/app/foxray/id6448898396"
            className="text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            FoXray
          </a>
        </li>
        <li>
          For Windows and Android, install the Hiddify app:{" "}
          <a
            href="https://apps.microsoft.com/detail/9pdfnl3qv2s5"
            className="text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            Microsoft Store
          </a>
          ,{" "}
          <a
            href="https://play.google.com/store/apps/details?id=app.hiddify.com"
            className="text-blue-500"
          >
            Google Play
          </a>
        </li>
      </ul>
    </div>
  )
}
