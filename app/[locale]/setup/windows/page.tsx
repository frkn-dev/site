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
        <h1 className="text-4xl font-bold mb-6">Подключение в Windows</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Зайдите на страницу:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Подключения
            </Link>
          </li>
          <li>
            Выберите страну (1) и скопируйте адрес конфигурации (2)
            <a
              href="/help/setup/windows/1.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/help/setup/windows/1.png"
                alt="Step 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Скачайте и установите Hiddify:{" "}
            <a
              href="https://hiddify.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              https://hiddify.com/
            </a>
          </li>
          <li>
            Нажмите на плюсик (3)
            <img
              src="/help/setup/windows/3.png"
              alt="Step 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Вставьте адрес конфигурации из буфера (4)
            <img
              src="/help/setup/windows/4.png"
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
              src="/help/setup/windows/5.png"
              alt="Step 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Чтобы поменять страну нажмите на кнопку Proxies (6)
            <img
              src="/help/setup/windows/6.png"
              alt="Step 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Тут вы можете изменить страну (7), через которую будет идти туннель.
            <img
              src="/help/setup/windows/7.png"
              alt="Step 7"
              className="w-full max-w-[350px]"
            />
          </li>
        </ul>
      </div>
    )
  }

  if (locale === "es") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Conexión en Windows</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Visite la página:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Conexiones
            </Link>
          </li>
          <li>
            Elija el país (1) y copie la dirección de configuración (2)
            <a
              href="/help/setup/windows/1.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/help/setup/windows/1.png"
                alt="Paso 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Descargue e instale Hiddify:{" "}
            <a
              href="https://hiddify.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              https://hiddify.com/
            </a>
          </li>
          <li>
            Haga clic en el signo más (3)
            <img
              src="/help/setup/windows/3.png"
              alt="Paso 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Pegue la dirección de configuración del portapapeles (4)
            <img
              src="/help/setup/windows/4.png"
              alt="Paso 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Configuración añadida. Haga clic en el botón del centro para
            conectarse (5).
            <br />
            Puede ignorar el mensaje de Timeout.
            <img
              src="/help/setup/windows/5.png"
              alt="Paso 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Para cambiar el país, haga clic en el botón Proxies (6)
            <img
              src="/help/setup/windows/6.png"
              alt="Paso 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Aquí puede cambiar el país (7) a través del cual pasará el túnel.
            <img
              src="/help/setup/windows/7.png"
              alt="Paso 7"
              className="w-full max-w-[350px]"
            />
          </li>
        </ul>
      </div>
    )
  }

  if (locale === "pt") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Conexão no Windows</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Acesse a página:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Conexões
            </Link>
          </li>
          <li>
            Escolha o país (1) e copie o endereço de configuração (2)
            <a
              href="/help/setup/windows/1.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/help/setup/windows/1.png"
                alt="Passo 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Baixe e instale o Hiddify:{" "}
            <a
              href="https://hiddify.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              https://hiddify.com/
            </a>
          </li>
          <li>
            Clique no sinal de mais (3)
            <img
              src="/help/setup/windows/3.png"
              alt="Passo 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Cole o endereço de configuração da área de transferência (4)
            <img
              src="/help/setup/windows/4.png"
              alt="Passo 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Configuração adicionada. Clique no botão central para conectar (5).
            <br />
            Você pode ignorar a mensagem Timeout.
            <img
              src="/help/setup/windows/5.png"
              alt="Passo 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Para mudar o país, clique no botão Proxies (6)
            <img
              src="/help/setup/windows/6.png"
              alt="Passo 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Aqui você pode mudar o país (7) pelo qual o túnel será feito.
            <img
              src="/help/setup/windows/7.png"
              alt="Passo 7"
              className="w-full max-w-[350px]"
            />
          </li>
        </ul>
      </div>
    )
  }

  if (locale === "fr") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Connexion sur Windows</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Allez sur la page :{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Connexions
            </Link>
          </li>
          <li>
            Choisissez le pays (1) et copiez l'adresse de configuration (2)
            <a
              href="/help/setup/windows/1.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/help/setup/windows/1.png"
                alt="Étape 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Téléchargez et installez Hiddify :{" "}
            <a
              href="https://hiddify.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              https://hiddify.com/
            </a>
          </li>
          <li>
            Cliquez sur le signe plus (3)
            <img
              src="/help/setup/windows/3.png"
              alt="Étape 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Collez l'adresse de configuration du presse-papier (4)
            <img
              src="/help/setup/windows/4.png"
              alt="Étape 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Configuration ajoutée. Cliquez sur le bouton central pour vous
            connecter (5).
            <br />
            Vous pouvez ignorer le message Timeout.
            <img
              src="/help/setup/windows/5.png"
              alt="Étape 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Pour changer le pays, cliquez sur le bouton Proxies (6)
            <img
              src="/help/setup/windows/6.png"
              alt="Étape 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Ici, vous pouvez changer le pays (7) par lequel le tunnel passera.
            <img
              src="/help/setup/windows/7.png"
              alt="Étape 7"
              className="w-full max-w-[350px]"
            />
          </li>
        </ul>
      </div>
    )
  }

  if (locale === "de") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Verbindung unter Windows</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Gehen Sie zur Seite:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Verbindungen
            </Link>
          </li>
          <li>
            Wählen Sie das Land (1) und kopieren Sie die Konfigurationsadresse
            (2)
            <a
              href="/help/setup/windows/1.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/help/setup/windows/1.png"
                alt="Schritt 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Laden Sie Hiddify herunter und installieren Sie es:{" "}
            <a
              href="https://hiddify.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              https://hiddify.com/
            </a>
          </li>
          <li>
            Klicken Sie auf das Pluszeichen (3)
            <img
              src="/help/setup/windows/3.png"
              alt="Schritt 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Fügen Sie die Konfigurationsadresse aus der Zwischenablage ein (4)
            <img
              src="/help/setup/windows/4.png"
              alt="Schritt 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Konfiguration hinzugefügt. Klicken Sie auf den zentralen Button, um
            sich zu verbinden (5).
            <br />
            Sie können die Timeout-Meldung ignorieren.
            <img
              src="/help/setup/windows/5.png"
              alt="Schritt 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Um das Land zu ändern, klicken Sie auf die Schaltfläche Proxies (6)
            <img
              src="/help/setup/windows/6.png"
              alt="Schritt 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Hier können Sie das Land (7) ändern, durch das der Tunnel geht.
            <img
              src="/help/setup/windows/7.png"
              alt="Schritt 7"
              className="w-full max-w-[350px]"
            />
          </li>
        </ul>
      </div>
    )
  }

  if (locale === "tr") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Windows'ta Bağlantı</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Sayfaya gidin:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Bağlantılar
            </Link>
          </li>
          <li>
            Ülkeyi seçin (1) ve yapılandırma adresini (2) kopyalayın
            <a
              href="/help/setup/windows/1.png"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/help/setup/windows/1.png"
                alt="Adım 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Hiddify'yi indirin ve yükleyin:{" "}
            <a
              href="https://hiddify.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              https://hiddify.com/
            </a>
          </li>
          <li>
            Artı işaretine tıklayın (3)
            <img
              src="/help/setup/windows/3.png"
              alt="Adım 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Yapılandırma adresini panodan yapıştırın (4)
            <img
              src="/help/setup/windows/4.png"
              alt="Adım 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Yapılandırma eklendi. Bağlanmak için ortadaki düğmeye tıklayın (5).
            <br />
            Timeout mesajını görmezden gelebilirsiniz.
            <img
              src="/help/setup/windows/5.png"
              alt="Adım 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Ülkeyi değiştirmek için Proxies butonuna tıklayın (6)
            <img
              src="/help/setup/windows/6.png"
              alt="Adım 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Buradan tünelin geçeceği ülkeyi (7) değiştirebilirsiniz.
            <img
              src="/help/setup/windows/7.png"
              alt="Adım 7"
              className="w-full max-w-[350px]"
            />
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Connection in Windows</h1>
      <ul className="list-disc list-inside mb-4 space-y-4">
        <li>
          Go to the page:{" "}
          <Link href="/dashboard/connections" className="text-blue-500">
            Connections
          </Link>
        </li>
        <li>
          Select a country (1) and copy the configuration address (2)
          <a href="/help/setup/windows/1.png" target="_blank" rel="noreferrer">
            <img
              src="/help/setup/windows/1.png"
              alt="Step 1"
              className="w-full"
            />
          </a>
        </li>
        <li>
          Download and install Hiddify:{" "}
          <a
            href="https://hiddify.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            https://hiddify.com/
          </a>
        </li>
        <li>
          Click the plus button (3)
          <img
            src="/help/setup/windows/3.png"
            alt="Step 3"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          Paste the configuration address from the clipboard (4)
          <img
            src="/help/setup/windows/4.png"
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
            src="/help/setup/windows/5.png"
            alt="Step 5"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          To change the country, click the Proxies button (6)
          <img
            src="/help/setup/windows/6.png"
            alt="Step 6"
            className="w-full max-w-[350px]"
          />
        </li>
        <li>
          Here you can change the country (7) through which the tunnel will go.
          <img
            src="/help/setup/windows/7.png"
            alt="Step 7"
            className="w-full max-w-[350px]"
          />
        </li>
      </ul>
    </div>
  )
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: { title: "Как подключиться к VPN – FRKN VPN для Windows" },
    en: { title: "How to Connect to VPN – FRKN VPN for Windows" },
    es: { title: "Cómo Conectarse a VPN – FRKN VPN para Windows" },
    pt: { title: "Como Conectar ao VPN – FRKN VPN para Windows" },
    fr: { title: "Comment Se Connecter au VPN – FRKN VPN pour Windows" },
    de: { title: "Wie man sich mit VPN verbindet – FRKN VPN für Windows" },
    tr: { title: "VPN'e Nasıl Bağlanılır – FRKN VPN için Windows" },
  }[locale]
}
