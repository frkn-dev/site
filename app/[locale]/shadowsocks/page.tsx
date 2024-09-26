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
        <h1 className="text-4xl font-bold mb-6">Shadowsocks</h1>
        <p className="mb-4">
          Shadowsocks — это инструмент для обхода интернет-цензуры, который
          использует прокси-сервер для перенаправления интернет-трафика. Он был
          разработан для обеспечения конфиденциальности и безопасности
          пользователей в странах с жесткой интернет-цензурой. Shadowsocks
          использует шифрование для защиты данных, что делает его трудным для
          обнаружения и блокировки.
        </p>
        <p className="mb-4">
          Одним из главных преимуществ Shadowsocks является его высокая скорость
          и эффективность, что делает его идеальным для потоковой передачи видео
          и других задач, требующих большого объема данных. Кроме того,
          Shadowsocks легко настраивается и поддерживает множество конфигураций,
          что позволяет пользователям адаптировать его под свои нужды. Он также
          обладает высокой устойчивостью к обнаружению и блокировке, что делает
          его надежным инструментом для обхода интернет-цензуры в различных
          условиях.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Подключение</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Зайдите на страницу{" "}
            <Link href="/connect" className="text-blue-500">
              /connect
            </Link>
          </li>
          <li>
            Выберите страну (1) и скопируйте адрес конфигурации (2)
            <a href="/help/ss/1.png" target="_blank">
              <img src="/help/ss/1.png" alt="Step 1" className="w-full" />
            </a>
          </li>
          <li>
            Скачайте и установите Outline:
            <Download />
          </li>
          <li>
            Нажмите на плюсик (3)
            <img
              src="/help/ss/3.png"
              alt="Step 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Вставьте адрес конфигурации (4) и нажмите "add server" (5)
            <img
              src="/help/ss/4.png"
              alt="Step 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Подключитесь, нажав на "connect" (6):
            <img
              src="/help/ss/6.png"
              alt="Step 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>При необходимости разрешите добавление VPN в систему.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">QR-код</h2>
        Если вы пользуетесь смартфоном или планшетом, то можете открыть
        приложение "Камера" и навести на QR-код на нашем сайте. Система
        предложит открыть приложение Outline и автоматически добавит
        конфигурационную ссылку.
        <img
          src="/help/ss/8.jpeg"
          alt="Step 8"
          className="w-full max-w-[350px]"
        />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Shadowsocks</h1>
      <p className="mb-4">
        Shadowsocks is a tool for bypassing internet censorship that uses a
        proxy server to redirect internet traffic. It was developed to ensure
        the privacy and security of users in countries with strict internet
        censorship. Shadowsocks uses encryption to protect data, making it
        difficult to detect and block.
      </p>
      <p className="mb-4">
        One of the main advantages of Shadowsocks is its high speed and
        efficiency, making it ideal for streaming video and other data-intensive
        tasks. Additionally, Shadowsocks is easy to configure and supports many
        configurations, allowing users to adapt it to their needs. It also has
        high resistance to detection and blocking, making it a reliable tool for
        bypassing internet censorship in various conditions.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Connection</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Go to the page{" "}
          <Link href="/connect" className="text-blue-500">
            /connect
          </Link>
        </li>
        <li>
          Select a country (1) and copy the configuration address (2)
          <a href="/help/ss/1.png" target="_blank">
            <img src="/help/ss/1.png" alt="Step 1" className="w-full" />
          </a>
        </li>
        <li>
          Download and install Outline:
          <Download />
        </li>
        <li>
          Click on the plus sign (3)
          <img
            src="/help/ss/3.png"
            alt="Step 3"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          Paste the configuration address (4) and click "add server" (5)
          <img
            src="/help/ss/4.png"
            alt="Step 4"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          Connect by clicking "connect" (6):
          <img
            src="/help/ss/6.png"
            alt="Step 6"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>Allow VPN addition to the system if necessary.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">QR Code</h2>
      If you are using a smartphone or tablet, you can open the "Camera" app and
      point it at the QR code on our website. The system will suggest opening
      the Outline app and automatically add the configuration link.
      <img
        src="/help/ss/8.jpeg"
        alt="Step 8"
        className="w-full max-w-[350px]"
      />
    </div>
  )
}

function Download() {
  return (
    <ul className="list-none list-inside ml-4 mb-4">
      {[
        [
          "Android",
          "https://play.google.com/store/apps/details?id=org.outline.android.client",
        ],
        [
          "iOS (iPhone)",
          "https://itunes.apple.com/us/app/outline-app/id1356177741",
        ],
        [
          "Windows",
          "https://s3.amazonaws.com/outline-releases/client/windows/stable/Outline-Client.exe",
        ],
        ["MacOS", "https://itunes.apple.com/us/app/outline-app/id1356178125"],
        [
          "Linux",
          "https://s3.amazonaws.com/outline-releases/client/linux/stable/Outline-Client.AppImage",
        ],
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
