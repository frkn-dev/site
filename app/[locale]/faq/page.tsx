import { getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
import type { Metadata } from "next"
import { setStaticParamsLocale } from "next-international/server"

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)

  if (locale === "ru") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">FAQ</h1>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Q: Какие технологии вы используете?
          </h2>
          <p>
            A: Платная версия работает на протоколе XRay (Vmess, VLESS,
            Shadowsocks), а также бесплатная на протоколе Wireguard.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Q: Чем XRay лучше Wireguard?
          </h2>
          <p>
            A: XRay создан специально для обхода блокировок, протокол маскирует
            трафик под легальный контент и таким образом обманывает системы
            обнаружения. XRay работает в России, Китае и Иране.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Q: На какие платформы можно установить ваш VPN?
          </h2>
          <p>
            A: Клиенты существуют для всех популярных платформ - iOS, Android,
            Windows, MacOS, Linux.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Q: Есть ли ограничения?</h2>
          <p>
            A: На платной версии нет ограничений ни по трафику, ни по количеству
            устройств, можно делиться с родственниками и друзьями.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Q: Можно ли оплатить российской картой?
          </h2>
          <p>A: Да, можно оплатить российской картой или по СБП.</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Q: Возможно ли установить XRay на роутер?
          </h2>
          <p>
            A: К сожалению, XRay работает на ограниченном количестве устройств.
            Если роутер поддерживает прошивку dd-wrt, то это возможно.{" "}
            <a
              href="https://wiki.dd-wrt.com/wiki/index.php/Supported_Devices"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Список роутеров
            </a>
            .
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Q: Плохо работает WhatsApp</h2>
          <p>
            A: В настройках клиента нужно отключить IPv6 и оставить только IPv4.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Q: Как оплатить?</h2>
          <p>A: Перейти по ссылке "Цена" и нажать "Оплатить".</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">FAQ</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">
          Q: What technologies do you use?
        </h2>
        <p>
          A: The paid version works on the XRay protocol (Vmess, VLESS,
          Shadowsocks), and the free version on the Wireguard protocol.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">
          Q: How is XRay better than Wireguard?
        </h2>
        <p>
          A: XRay is specifically designed to bypass blocks, the protocol
          disguises traffic as legitimate content and thus deceives detection
          systems. XRay works in Russia, China, and Iran.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">
          Q: On which platforms can your VPN be installed?
        </h2>
        <p>
          A: Clients are available for all popular platforms - iOS, Android,
          Windows, MacOS, Linux.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Q: Are there any limitations?</h2>
        <p>
          A: The paid version has no limitations on traffic or the number of
          devices, you can share it with family and friends.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Q: Can I pay with crypto?</h2>
        <p>A: Yes, you can.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">
          Q: Is it possible to install XRay on a router?
        </h2>
        <p>
          A: Unfortunately, XRay works on a limited number of devices. If the
          router supports dd-wrt firmware, then it is possible.{" "}
          <a
            href="https://wiki.dd-wrt.com/wiki/index.php/Supported_Devices"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            List of routers
          </a>
          .
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Q: WhatsApp works poorly</h2>
        <p>
          A: In the client settings, you need to disable IPv6 and leave only
          IPv4.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Q: How to pay?</h2>
        <p>A: Go to the "Price" link and click "Pay".</p>
      </div>
    </div>
  )
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: {
      title: "Часто задаваемые вопросы – FRKN VPN",
    },
    en: {
      title: "Frequently Asked Questions – FRKN VPN",
    },
  }[locale]
}
