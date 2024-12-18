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
        <h1 className="text-4xl font-bold mb-6">Подключение в iOS</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Зайдите на страницу:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Подключения
            </Link>
          </li>
          <li>
            Выберите страну (1) и скопируйте адрес конфигурации (2a) или
            разверните QR- код (2b)
            <a href="/help/setup/ios/1.png" target="_blank">
              <img
                src="/help/setup/ios/1.png"
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
            Нажмите (3a), чтобы вставить ссылку из буфера, или (3b), чтобы
            отсканировать QR-код
            <img
              src="/help/setup/ios/3.png"
              alt="Step 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Согласитесь на добавление VPN (4)
            <img
              src="/help/setup/ios/4.png"
              alt="Step 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Конфигурация добавлена
            <img
              src="/help/setup/ios/5.png"
              alt="Step 5"
              className="w-full max-w-[350px]"
            />
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Connection in iOS</h1>
      <ul className="list-disc list-inside mb-4 space-y-4">
        <li>
          Go to the page:{" "}
          <Link href="/dashboard/connections" className="text-blue-500">
            Connections
          </Link>
        </li>
        <li>
          Select a country (1) and copy the configuration address (2a) or expand
          the QR code (2b)
          <a href="/help/setup/ios/1.png" target="_blank">
            <img src="/help/setup/ios/1.png" alt="Step 1" className="w-full" />
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
          Click (3a) to paste the link from the clipboard, or (3b) to scan the
          QR code
          <img
            src="/help/setup/ios/3.png"
            alt="Step 3"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          Agree to add VPN (4)
          <img
            src="/help/setup/ios/4.png"
            alt="Step 4"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          Configuration added
          <img
            src="/help/setup/ios/5.png"
            alt="Step 5"
            className="w-full max-w-[350px]"
          />
        </li>
      </ul>
    </div>
  )
}
