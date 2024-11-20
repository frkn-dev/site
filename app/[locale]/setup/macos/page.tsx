import { getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
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
        <h1 className="text-4xl font-bold mb-6">Подключение в macOS</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Зайдите на страницу:{" "}
            <Link href="/connect" className="text-blue-500">
              Подключения
            </Link>
          </li>
          <li>
            Выберите страну (1) и скопируйте адрес конфигурации (2)
            <a href="/help/setup/macos/1.png" target="_blank">
              <img
                src="/help/setup/macos/1.png"
                alt="Step 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Скачайте и установите FoXray:{" "}
            <a
              href="https://apps.apple.com/app/foxray/id6448898396"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              FoXray в AppStore
            </a>
          </li>
          <li>
            Нажмите (3), чтобы вставить ссылку из буфера
            <img
              src="/help/setup/macos/3.png"
              alt="Step 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Конфигурация добавлена
            <img
              src="/help/setup/macos/success.png"
              alt="Step success"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Для подключения выберите страну и нажмите (4)
            <img
              src="/help/setup/macos/4.png"
              alt="Step 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Чтобы узнать скорость соединения, можете нажать (5)
            <img
              src="/help/setup/macos/5.png"
              alt="Step 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Для удаления конфигурация перейдите в меню Subscriptions (6) и
            нажмите (7)
            <img
              src="/help/setup/macos/6.png"
              alt="Step 4"
              className="w-full max-w-[350px]"
            />
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Connection in macOS</h1>
      <ul className="list-disc list-inside mb-4 space-y-4">
        <li>
          Go to the page:{" "}
          <Link href="/connect" className="text-blue-500">
            Connections
          </Link>
        </li>
        <li>
          Select a country (1) and copy the configuration address (2)
          <a href="/help/setup/macos/1.png" target="_blank">
            <img
              src="/help/setup/macos/1.png"
              alt="Step 1"
              className="w-full"
            />
          </a>
        </li>
        <li>
          Download and install FoXray:{" "}
          <a
            href="https://apps.apple.com/app/foxray/id6448898396"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            FoXray in AppStore
          </a>
        </li>
        <li>
          Click (3) to paste the link from the clipboard
          <img
            src="/help/setup/macos/3.png"
            alt="Step 3"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          Configuration added
          <img
            src="/help/setup/macos/success.png"
            alt="Step success"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          To connect, select a country and click (4)
          <img
            src="/help/setup/macos/4.png"
            alt="Step 4"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          To check the connection speed, you can click (5)
          <img
            src="/help/setup/macos/5.png"
            alt="Step 4"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          To delete the configuration, go to the Subscriptions menu (6) and
          click (7)
          <img
            src="/help/setup/macos/6.png"
            alt="Step 4"
            className="w-full max-w-[350px]"
          />
        </li>
      </ul>
    </div>
  )
}
