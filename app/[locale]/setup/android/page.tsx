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
        <h1 className="text-4xl font-bold mb-6">Подключение в Android</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Зайдите на страницу:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
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

  if (locale === "es") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Conexión en Android</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Vaya a la página:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Conexiones
            </Link>
          </li>
          <li>
            Seleccione un país (1) y copie la dirección de configuración (2)
            <a href="/help/setup/android/1.png" target="_blank">
              <img
                src="/help/setup/android/1.png"
                alt="Paso 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Descargue e instale Hiddify:{" "}
            <a
              href="https://play.google.com/store/apps/details?id=app.hiddify.com&hl=en_US"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              Hiddify en Google Play
            </a>
          </li>
          <li>
            Haga clic en el signo más (3)
            <img
              src="/help/setup/android/3.png"
              alt="Paso 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Pegue la dirección de configuración desde el portapapeles (4)
            <img
              src="/help/setup/android/4.png"
              alt="Paso 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Configuración añadida. Haga clic en el botón en el centro para
            conectarse (5).
            <br />
            Puede ignorar el mensaje de Timeout.
            <img
              src="/help/setup/android/5.png"
              alt="Paso 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Para cambiar de país, haga clic en el botón Proxies (6)
            <img
              src="/help/setup/android/6.png"
              alt="Paso 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Aquí puede cambiar el país (7) a través del cual pasará el túnel.
            <img
              src="/help/setup/android/7.png"
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
        <h1 className="text-4xl font-bold mb-6">Conexão no Android</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Acesse a página:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Conexões
            </Link>
          </li>
          <li>
            Selecione um país (1) e copie o endereço de configuração (2)
            <a href="/help/setup/android/1.png" target="_blank">
              <img
                src="/help/setup/android/1.png"
                alt="Passo 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Baixe e instale o Hiddify:{" "}
            <a
              href="https://play.google.com/store/apps/details?id=app.hiddify.com&hl=en_US"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              Hiddify no Google Play
            </a>
          </li>
          <li>
            Clique no ícone de mais (3)
            <img
              src="/help/setup/android/3.png"
              alt="Passo 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Cole o endereço de configuração da área de transferência (4)
            <img
              src="/help/setup/android/4.png"
              alt="Passo 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Configuração adicionada. Clique no botão no centro para conectar
            (5).
            <br />
            Você pode ignorar a mensagem de Timeout.
            <img
              src="/help/setup/android/5.png"
              alt="Passo 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Para mudar de país, clique no botão Proxies (6)
            <img
              src="/help/setup/android/6.png"
              alt="Passo 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Aqui você pode mudar o país (7) pelo qual o túnel passará.
            <img
              src="/help/setup/android/7.png"
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
        <h1 className="text-4xl font-bold mb-6">Connexion sur Android</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Allez sur la page :{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Connexions
            </Link>
          </li>
          <li>
            Sélectionnez un pays (1) et copiez l'adresse de configuration (2)
            <a href="/help/setup/android/1.png" target="_blank">
              <img
                src="/help/setup/android/1.png"
                alt="Étape 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Téléchargez et installez Hiddify :{" "}
            <a
              href="https://play.google.com/store/apps/details?id=app.hiddify.com&hl=en_US"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              Hiddify sur Google Play
            </a>
          </li>
          <li>
            Appuyez sur le plus (3)
            <img
              src="/help/setup/android/3.png"
              alt="Étape 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Collez l'adresse de configuration depuis le presse-papier (4)
            <img
              src="/help/setup/android/4.png"
              alt="Étape 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Configuration ajoutée. Cliquez sur le bouton au centre pour vous
            connecter (5).
            <br />
            Vous pouvez ignorer le message Timeout.
            <img
              src="/help/setup/android/5.png"
              alt="Étape 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Pour changer de pays, appuyez sur le bouton Proxies (6)
            <img
              src="/help/setup/android/6.png"
              alt="Étape 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Ici, vous pouvez changer le pays (7) par lequel le tunnel passera.
            <img
              src="/help/setup/android/7.png"
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
        <h1 className="text-4xl font-bold mb-6">Verbindung auf Android</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Gehen Sie auf die Seite:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Verbindungen
            </Link>
          </li>
          <li>
            Wählen Sie ein Land (1) und kopieren Sie die Konfigurationsadresse
            (2)
            <a href="/help/setup/android/1.png" target="_blank">
              <img
                src="/help/setup/android/1.png"
                alt="Schritt 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Laden Sie Hiddify herunter und installieren Sie es:{" "}
            <a
              href="https://play.google.com/store/apps/details?id=app.hiddify.com&hl=en_US"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              Hiddify im Google Play Store
            </a>
          </li>
          <li>
            Klicken Sie auf das Pluszeichen (3)
            <img
              src="/help/setup/android/3.png"
              alt="Schritt 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Fügen Sie die Konfigurationsadresse aus der Zwischenablage ein (4)
            <img
              src="/help/setup/android/4.png"
              alt="Schritt 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Konfiguration hinzugefügt. Klicken Sie auf den Button in der Mitte,
            um sich zu verbinden (5).
            <br />
            Sie können die Timeout-Meldung ignorieren.
            <img
              src="/help/setup/android/5.png"
              alt="Schritt 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Um das Land zu wechseln, klicken Sie auf die Schaltfläche Proxies
            (6)
            <img
              src="/help/setup/android/6.png"
              alt="Schritt 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Hier können Sie das Land (7) ändern, durch das der Tunnel geht.
            <img
              src="/help/setup/android/7.png"
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
        <h1 className="text-4xl font-bold mb-6">Android'de Bağlantı</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Sayfaya gidin:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Bağlantılar
            </Link>
          </li>
          <li>
            Bir ülke seçin (1) ve yapılandırma adresini kopyalayın (2)
            <a href="/help/setup/android/1.png" target="_blank">
              <img
                src="/help/setup/android/1.png"
                alt="Adım 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Hiddify'i indirin ve kurun:{" "}
            <a
              href="https://play.google.com/store/apps/details?id=app.hiddify.com&hl=en_US"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              Hiddify Google Play'de
            </a>
          </li>
          <li>
            Artı işaretine tıklayın (3)
            <img
              src="/help/setup/android/3.png"
              alt="Adım 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Yapılandırma adresini panodan yapıştırın (4)
            <img
              src="/help/setup/android/4.png"
              alt="Adım 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Yapılandırma eklendi. Bağlanmak için ortadaki butona tıklayın (5).
            <br />
            Timeout mesajını göz ardı edebilirsiniz.
            <img
              src="/help/setup/android/5.png"
              alt="Adım 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Ülkeyi değiştirmek için Proxies butonuna tıklayın (6)
            <img
              src="/help/setup/android/6.png"
              alt="Adım 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Buradan tünelin geçeceği ülkeyi (7) değiştirebilirsiniz.
            <img
              src="/help/setup/android/7.png"
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
      <h1 className="text-4xl font-bold mb-6">Connection in Android</h1>
      <ul className="list-disc list-inside mb-4 space-y-4">
        <li>
          Go to the page:{" "}
          <Link href="/dashboard/connections" className="text-blue-500">
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

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: { title: "Как подключиться к VPN – FRKN VPN для Android" },
    en: { title: "How to Connect to VPN – FRKN VPN for Android" },
    es: { title: "Cómo Conectarse a VPN – FRKN VPN para Android" },
    pt: { title: "Como Conectar ao VPN – FRKN VPN para Android" },
    fr: { title: "Comment Se Connecter au VPN – FRKN VPN pour Android" },
    de: { title: "Wie man sich mit VPN verbindet – FRKN VPN für Android" },
    tr: { title: "VPN'e Nasıl Bağlanılır – FRKN VPN için Android" },
  }[locale]
}
