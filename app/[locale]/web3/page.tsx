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
        <h1 className="text-4xl font-bold mb-6">Токенизация</h1>
        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/1.png" alt="Tor" className="w-10" />
          <h2 className="text-2xl font-semibold">Tor через VPN</h2>
        </div>
        <p className="mb-4">
          Удобный доступ к анонимной сети Tor всего одним нажатием поможет
          обойти цензуру и сохранить вашу конфиденциальность.
          <br />С помощью FRKN вам не нужен браузер Tor для доступа к скрытым
          onion-сервисам. Вы можете использовать свой привычный браузер для
          подключения к сети Tor.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/2.png" alt="Домены" className="w-10" />
          <h2 className="text-2xl font-semibold">
            Децентрализированные домены
          </h2>
        </div>
        <p className="mb-4">
          Поддержка децентрализованных доменов ENS и Unstoppable Domains в нашем
          VPN позволит пользователям использовать домены, зарегистрированные на
          блокчейне, что устраняет зависимость от традиционных DNS-систем. Это
          повышает уровень конфиденциальности, делает доступ к сервису более
          устойчивым к цензуре и упрощает процесс подключения.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/3.png" alt="Файловые хранилища" className="w-10" />
          <h2 className="text-2xl font-semibold">
            Децентрализованные файловые хранилища
          </h2>
        </div>
        <p className="mb-4">
          Интеграция децентрализованных файловых хранилищ, таких как IPFS, в наш
          VPN предоставит пользователям возможность получать доступ к контенту,
          который хранится в распределённой сети, без необходимости полагаться
          на центральные серверы. Это увеличивает устойчивость к цензуре,
          улучшает защиту данных и гарантирует доступность файлов, даже если
          некоторые узлы сети становятся недоступными.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/4.png" alt="VPN" className="w-10" />
          <h2 className="text-2xl font-semibold">Децентрализованный VPN</h2>
        </div>
        <p className="mb-4">
          Создание децентрализованной сети VPN-узлов повышает уровень
          безопасности, так как прослушивание и отслеживание активности
          пользователей становится сложнее. Децентрализованный VPN также более
          устойчив к атакам и блокировкам благодаря отсутствию единой точки
          отказа.
          <br />
          Сеть устройств FRKN предложит полностью децентрализованный VPN-сервис
          с несколькими маршрутами и интеллектуальной маршрутизацией,
          обеспечивая неограниченный доступ к контенту без потери скорости. dVPN
          предоставляет все преимущества VPN без централизованного контроля.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/5.png" alt="Пользовательские узлы" className="w-10" />
          <h2 className="text-2xl font-semibold">Пользовательские узлы</h2>
        </div>
        <p className="mb-4">
          Распределенная модель сервиса предложит пользователям множество
          VPN-серверов по всему миру. Каждый желающий сможет запустить ноду и
          стать провайдером VPN, а пользователям остается лишь выбрать ближайшую
          точку доступа. Это значительно увеличивает скорость соединения,
          обеспечит безопасное и приватное подключение к интернету через
          децентрализованные узлы вместо традиционных серверов.
          <br />
          Пользователи смонут получать пассивный доход в токенах за совместное
          использование интернет-инфраструктуры, управляя узлом или покупая
          маршрутизатор и продавая неиспользуемую пропускную способность сети
          FRKN.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/6.png" alt="Портативный интернет" className="w-10" />
          <h2 className="text-2xl font-semibold">Портативный интернет</h2>
        </div>
        <p className="mb-4">
          Разработка портативного устройства для децентрализованного VPN
          обеспечит безопасное и приватное подключение к интернету без
          необходимости использования традиционных серверов. Устройство будет
          предлагать пожизненную подписку без дополнительных платежей. Оно будет
          легко настраиваться по принципу «plug-and-play» и будет подходить как
          для домашнего использования, так и для путешествий.
          <br />
          <br />
        </p>

        <p>
          FRKN будет использовать децентрализованные технологии для фрагментации
          и шифрования данных пользователей, что исключит возможность их
          перехвата третьими лицами.
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Tokenization</h1>
      <div className="flex gap-3 items-center lg:items-end mb-4">
        <img src="/web3/1.png" alt="Tor" className="w-10" />
        <h2 className="text-2xl font-semibold">Tor through VPN</h2>
      </div>
      <p className="mb-4">
        Convenient access to the anonymous Tor network with just one click helps
        bypass censorship and maintain your privacy.
        <br />
        With FRKN, you don't need the Tor browser to access hidden
        onion-services. You can use your regular browser to connect to the Tor
        network.
      </p>
      <div className="flex gap-3 items-center lg:items-end mb-4">
        <img src="/web3/2.png" alt="Domains" className="w-10" />
        <h2 className="text-2xl font-semibold">Decentralized Domains</h2>
      </div>
      <p className="mb-4">
        Support for decentralized domains ENS and Unstoppable Domains in our VPN
        allows users to use domains registered on the blockchain, eliminating
        reliance on traditional DNS systems. This enhances privacy, makes access
        to the service more resistant to censorship, and simplifies the
        connection process.
      </p>
      <div className="flex gap-3 items-center lg:items-end mb-4">
        <img src="/web3/3.png" alt="File Storage" className="w-10" />
        <h2 className="text-2xl font-semibold">Decentralized File Storage</h2>
      </div>
      <p className="mb-4">
        Integration of decentralized file storages, such as IPFS, into our VPN
        will provide users with the ability to access content stored in a
        distributed network without relying on central servers. This increases
        resistance to censorship, enhances data protection, and ensures file
        availability even if some network nodes become unavailable.
      </p>
      <div className="flex gap-3 items-center lg:items-end mb-4">
        <img src="/web3/4.png" alt="VPN" className="w-10" />
        <h2 className="text-2xl font-semibold">Decentralized VPN</h2>
      </div>
      <p className="mb-4">
        Creating a decentralized network of VPN nodes enhances security, as
        eavesdropping and tracking user activity become more complex. A
        decentralized VPN is also more resistant to attacks and blockages due to
        the absence of a single point of failure.
        <br />
        The FRKN device network will offer a fully decentralized VPN service
        with multiple routes and intelligent routing, providing unlimited
        content access without speed loss. dVPN offers all the advantages of a
        VPN without centralized control.
      </p>
      <div className="flex gap-3 items-center lg:items-end mb-4">
        <img src="/web3/5.png" alt="User Nodes" className="w-10" />
        <h2 className="text-2xl font-semibold">User Nodes</h2>
      </div>
      <p className="mb-4">
        A distributed service model will offer users numerous VPN servers
        worldwide. Anyone can run a node and become a VPN provider, and users
        simply need to choose the nearest access point. This significantly
        increases connection speed, ensures secure and private internet
        connection through decentralized nodes instead of traditional servers.
        <br />
        Users can earn passive income in tokens by sharing internet
        infrastructure, managing a node, purchasing a router, and selling unused
        bandwidth in the FRKN network.
      </p>
      <div className="flex gap-3 items-center lg:items-end mb-4">
        <img src="/web3/6.png" alt="Portable Internet" className="w-10" />
        <h2 className="text-2xl font-semibold">Portable Internet</h2>
      </div>
      <p className="mb-4">
        Developing a portable device for decentralized VPN will ensure secure
        and private internet connection without the need for traditional
        servers. The device will offer a lifetime subscription with no
        additional payments. It will be easy to set up using a "plug-and-play"
        principle and will be suitable for both home use and travel.
        <br />
        <br />
      </p>
      <p>
        FRKN will use decentralized technologies to fragment and encrypt user
        data, eliminating the possibility of interception by third parties.
      </p>
    </div>
  )
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: {
      title: "Токенизация: Безопасность вашей информации",
      description:
        "Токенизация – процесс фрагментации и преобразования данных или активов в цифровые единицы (токены).",
    },
    en: {
      title: "Tokenization: Protecting Your Information",
      description:
        "Tokenization is the process of fragmenting and converting data or assets into digital units (tokens).",
    },
  }[locale]
}
