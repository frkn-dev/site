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
        <h1 className="text-4xl font-bold mb-6">Vless</h1>

        <p className="mb-4">
          VLESS — это современный протокол, разработанный для повышения
          производительности и безопасности интернет-соединений. Он отличается
          высокой скоростью и низкой задержкой, что делает его идеальным для
          использования в условиях, требующих быстрой передачи данных.
        </p>

        <p className="mb-4">
          Одним из главных преимуществ Vless является его гибкость и
          масштабируемость. Он поддерживает различные методы шифрования и
          аутентификации, что обеспечивает высокий уровень безопасности. Кроме
          того, Vless имеет низкие системные требования, что позволяет
          использовать его на устройствах с ограниченными ресурсами. Благодаря
          этим характеристикам, Vless становится все более популярным среди
          пользователей, ищущих надежное и эффективное решение для защиты своих
          данных и обхода интернет-цензуры.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Подключение</h2>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Зайдите на страницу{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              /dashboard/connections
            </Link>
          </li>
          <li>
            Выберите страну (1) и скопируйте адрес конфигурации (2a) или
            разверните QR-код (2b)
            <a href="/help/vless/1.png" target="_blank" rel="noreferrer">
              <img src="/help/vless/1.png" alt="Step 1" className="w-full" />
            </a>
          </li>
          <li>
            Скачайте и установите v2RayTun:
            <Download />
          </li>
          <li>
            Нажмите на плюсик (3)
            <img
              src="/help/vless/3.png"
              alt="Step 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Вставьте адрес конфигурации из буфера (4a) или выберите опцию
            QR-кода (4b). Выбрав иконку сканера, вы сможете отсканировать код.
            <img
              src="/help/vless/4.png"
              alt="Step 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Конфигурация добавлена. Вам будет доступно несколько стран, вы
            можете выбрать нужную (5)
            <img
              src="/help/vless/5.png"
              alt="Step 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Нажмите кнопку подключения (6) и согласитесь на добавление VPN.
            <img
              src="/help/vless/6.png"
              alt="Step 6"
              className="w-full max-w-[350px]"
            />
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Vless</h1>

      <p className="mb-4">
        VLESS is a modern protocol designed to enhance the performance and
        security of internet connections. It features high speed and low
        latency, making it ideal for use in situations requiring fast data
        transmission.
      </p>

      <p className="mb-4">
        One of the main advantages of Vless is its flexibility and scalability.
        It supports various encryption and authentication methods, ensuring a
        high level of security. Additionally, Vless has low system requirements,
        allowing it to be used on devices with limited resources. These
        characteristics make Vless increasingly popular among users seeking a
        reliable and efficient solution for protecting their data and bypassing
        internet censorship.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Connection</h2>

      <ul className="list-disc list-inside mb-4 space-y-4">
        <li>
          Go to the page{" "}
          <Link href="/dashboard/connections" className="text-blue-500">
            /connect
          </Link>
        </li>
        <li>
          Select a country (1) and copy the configuration address (2a) or expand
          the QR code (2b)
          <a href="/help/vless/1.png" target="_blank" rel="noreferrer">
            <img src="/help/vless/1.png" alt="Step 1" className="w-full" />
          </a>
        </li>
        <li>
          Download and install v2RayTun:
          <Download />
        </li>
        <li>
          Click on the plus sign (3)
          <img
            src="/help/vless/3.png"
            alt="Step 3"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          Paste the configuration address from the clipboard (4a) or select the
          QR code option (4b). By selecting the scanner icon, you can scan the
          code.
          <img
            src="/help/vless/4.png"
            alt="Step 4"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          The configuration is added. You will have access to several countries,
          you can choose the one you need (5)
          <img
            src="/help/vless/5.png"
            alt="Step 5"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          Click the connect button (6) and agree to add the VPN.
          <img
            src="/help/vless/6.png"
            alt="Step 6"
            className="w-full max-w-[350px]"
          />
        </li>
      </ul>
    </div>
  )
}

function Download() {
  return (
    <ul className="list-none ml-4 mb-4">
      {[
        [
          "Android",
          "https://play.google.com/store/apps/details?id=com.v2raytun.android",
        ],
        ["iOS (iPhone)", "https://apps.apple.com/ru/app/v2raytun/id6476628951"],
      ].map(([name, url]) => (
        <li key={name}>
          –{" "}
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: {
      title: "Vless: Современный протокол для повышения производительности",
      description:
        "Узнайте о Vless, его преимуществах, настройке и подключении для повышения безопасности и обхода интернет-цензуры.",
    },
    en: {
      title: "Vless: Modern Protocol for Enhanced Performance",
      description:
        "Learn about Vless, its advantages, setup, and connection for improved security and bypassing internet censorship.",
    },
  }[locale]
}
