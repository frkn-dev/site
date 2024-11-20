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
        <h1 className="text-4xl font-bold mb-6">Подключение в Android</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Зайдите на страницу:{" "}
            <Link href="/connect" className="text-blue-500">
              Подключения
            </Link>
          </li>
          <li>
            Выберите страну (1) и скопируйте адрес конфигурации (2)
            <a href="/help/setup/android/1.png" target="_blank">
              <img
                src="/help/setup/android/1.png"
                alt="Step 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Скачайте и установите Hiddify:{" "}
            <a
              href="https://play.google.com/store/apps/details?id=app.hiddify.com&hl=en_US
"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              Hiddify в Google Play
            </a>
          </li>
          <li>
            Нажмите на плюсик (3)
            <img
              src="/help/setup/android/3.png"
              alt="Step 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Вставьте адрес конфигурации из буфера (4)
            <img
              src="/help/setup/android/4.png"
              alt="Step 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Конфигурация добавлена. Нажмите на кнопку в центре для подключения
            (5).
            <br />
            Надпись Timeout можете игнорировать.
            <img
              src="/help/setup/android/5.png"
              alt="Step 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Чтобы поменять страну нажмите на кнопку Proxies (6)
            <img
              src="/help/setup/android/6.png"
              alt="Step 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Тут вы можете изменить страну (7), через которую будет идти туннель.
            <img
              src="/help/setup/android/7.png"
              alt="Step 7"
              className="w-full max-w-[350px]"
            />
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Connection in Android</h1>
      <ul className="list-disc list-inside mb-4 space-y-4">
        <li>
          Go to the page:{" "}
          <Link href="/connect" className="text-blue-500">
            Connections
          </Link>
        </li>
        <li>
          Select a country (1) and copy the configuration address (2)
          <a href="/help/setup/android/1.png" target="_blank">
            <img
              src="/help/setup/android/1.png"
              alt="Step 1"
              className="w-full"
            />
          </a>
        </li>
        <li>
          Download and install Hiddify:{" "}
          <a
            href="https://play.google.com/store/apps/details?id=app.hiddify.com&hl=en_US
"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            Hiddify in Google Play
          </a>
        </li>
        <li>
          Click the plus button (3)
          <img
            src="/help/setup/android/3.png"
            alt="Step 3"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          Paste the configuration address from the clipboard (4)
          <img
            src="/help/setup/android/4.png"
            alt="Step 4"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          The configuration is added. Click the button in the center to connect
          (5).
          <br />
          You may ignore the Timeout message.
          <img
            src="/help/setup/android/5.png"
            alt="Step 5"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          To change the country, click the Proxies button (6)
          <img
            src="/help/setup/android/6.png"
            alt="Step 6"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          Here you can change the country (7) through which the tunnel will go.
          <img
            src="/help/setup/android/7.png"
            alt="Step 7"
            className="w-full max-w-[350px]"
          />
        </li>
      </ul>
    </div>
  )
}
