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
        <h1 className="text-4xl font-bold mb-6">Подключение в macOS</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Зайдите на страницу:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Подключения
            </Link>
          </li>
          <li>
            Выберите страну (1) и скопируйте адрес конфигурации (2)
            <a href="/help/setup/macos/1.png" target="_blank" rel="noreferrer">
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

  if (locale === "es") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Conexión en macOS</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Acceda a la página:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Conexiones
            </Link>
          </li>
          <li>
            Elija el país (1) y copie la dirección de configuración (2)
            <a href="/help/setup/macos/1.png" target="_blank" rel="noreferrer">
              <img
                src="/help/setup/macos/1.png"
                alt="Paso 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Descargue e instale FoXray:{" "}
            <a
              href="https://apps.apple.com/app/foxray/id6448898396"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              FoXray en AppStore
            </a>
          </li>
          <li>
            Haga clic en (3) para pegar el enlace del portapapeles
            <img
              src="/help/setup/macos/3.png"
              alt="Paso 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Configuración añadida
            <img
              src="/help/setup/macos/success.png"
              alt="Paso éxito"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Para conectarse, elija el país y haga clic en (4)
            <img
              src="/help/setup/macos/4.png"
              alt="Paso 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Para verificar la velocidad de conexión, puede hacer clic en (5)
            <img
              src="/help/setup/macos/5.png"
              alt="Paso 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Para eliminar la configuración, vaya al menú Subscriptions (6) y
            haga clic en (7)
            <img
              src="/help/setup/macos/6.png"
              alt="Paso 6"
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
        <h1 className="text-4xl font-bold mb-6">Conexão no macOS</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Acesse a página:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Conexões
            </Link>
          </li>
          <li>
            Selecione o país (1) e copie o endereço de configuração (2)
            <a href="/help/setup/macos/1.png" target="_blank" rel="noreferrer">
              <img
                src="/help/setup/macos/1.png"
                alt="Passo 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Baixe e instale o FoXray:{" "}
            <a
              href="https://apps.apple.com/app/foxray/id6448898396"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              FoXray na AppStore
            </a>
          </li>
          <li>
            Clique em (3) para colar o link da área de transferência
            <img
              src="/help/setup/macos/3.png"
              alt="Passo 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Configuração adicionada
            <img
              src="/help/setup/macos/success.png"
              alt="Passo de sucesso"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Para se conectar, selecione o país e clique em (4)
            <img
              src="/help/setup/macos/4.png"
              alt="Passo 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Para verificar a velocidade da conexão, você pode clicar em (5)
            <img
              src="/help/setup/macos/5.png"
              alt="Passo 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Para excluir a configuração, vá até o menu Subscriptions (6) e
            clique em (7)
            <img
              src="/help/setup/macos/6.png"
              alt="Passo 6"
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
        <h1 className="text-4xl font-bold mb-6">Connexion sur macOS</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Accédez à la page :{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Connexions
            </Link>
          </li>
          <li>
            Choisissez le pays (1) et copiez l'adresse de configuration (2)
            <a href="/help/setup/macos/1.png" target="_blank" rel="noreferrer">
              <img
                src="/help/setup/macos/1.png"
                alt="Étape 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Téléchargez et installez FoXray :{" "}
            <a
              href="https://apps.apple.com/app/foxray/id6448898396"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              FoXray sur l'AppStore
            </a>
          </li>
          <li>
            Cliquez sur (3) pour coller le lien depuis le presse-papiers
            <img
              src="/help/setup/macos/3.png"
              alt="Étape 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Configuration ajoutée
            <img
              src="/help/setup/macos/success.png"
              alt="Étape réussite"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Pour vous connecter, choisissez le pays et cliquez sur (4)
            <img
              src="/help/setup/macos/4.png"
              alt="Étape 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Pour connaître la vitesse de connexion, vous pouvez cliquer sur (5)
            <img
              src="/help/setup/macos/5.png"
              alt="Étape 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Pour supprimer la configuration, allez dans le menu Subscriptions
            (6) et cliquez sur (7)
            <img
              src="/help/setup/macos/6.png"
              alt="Étape 6"
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
        <h1 className="text-4xl font-bold mb-6">Verbindung unter macOS</h1>

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
            <a href="/help/setup/macos/1.png" target="_blank" rel="noreferrer">
              <img
                src="/help/setup/macos/1.png"
                alt="Schritt 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            Laden Sie FoXray herunter und installieren Sie es:{" "}
            <a
              href="https://apps.apple.com/app/foxray/id6448898396"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              FoXray im AppStore
            </a>
          </li>
          <li>
            Klicken Sie auf (3), um den Link aus der Zwischenablage einzufügen
            <img
              src="/help/setup/macos/3.png"
              alt="Schritt 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Konfiguration hinzugefügt
            <img
              src="/help/setup/macos/success.png"
              alt="Schritt Erfolg"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Wählen Sie das Land aus und klicken Sie auf (4), um sich zu
            verbinden
            <img
              src="/help/setup/macos/4.png"
              alt="Schritt 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Um die Verbindungsgeschwindigkeit zu überprüfen, klicken Sie auf (5)
            <img
              src="/help/setup/macos/5.png"
              alt="Schritt 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Um die Konfiguration zu löschen, gehen Sie zum Menü Abonnements (6)
            und klicken Sie auf (7)
            <img
              src="/help/setup/macos/6.png"
              alt="Schritt 6"
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
        <h1 className="text-4xl font-bold mb-6">macOS Bağlantısı</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Şu sayfayı ziyaret edin:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Bağlantılar
            </Link>
          </li>
          <li>
            Ülkeyi (1) seçin ve yapılandırma adresini (2) kopyalayın
            <a href="/help/setup/macos/1.png" target="_blank" rel="noreferrer">
              <img
                src="/help/setup/macos/1.png"
                alt="Adım 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            FoXray'ı indirin ve kurun:{" "}
            <a
              href="https://apps.apple.com/app/foxray/id6448898396"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              FoXray AppStore'da
            </a>
          </li>
          <li>
            Linki panodan yapıştırmak için (3)'e tıklayın
            <img
              src="/help/setup/macos/3.png"
              alt="Adım 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Yapılandırma eklendi
            <img
              src="/help/setup/macos/success.png"
              alt="Başarı adımı"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Bağlanmak için ülkeyi seçin ve (4)'e tıklayın
            <img
              src="/help/setup/macos/4.png"
              alt="Adım 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Bağlantı hızını öğrenmek için (5)'e tıklayabilirsiniz
            <img
              src="/help/setup/macos/5.png"
              alt="Adım 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Yapılandırmayı silmek için Abonelikler (6) menüsüne gidin ve (7)'ye
            tıklayın
            <img
              src="/help/setup/macos/6.png"
              alt="Adım 6"
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
          <Link href="/dashboard/connections" className="text-blue-500">
            Connections
          </Link>
        </li>
        <li>
          Select a country (1) and copy the configuration address (2)
          <a href="/help/setup/macos/1.png" target="_blank" rel="noreferrer">
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

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: { title: "Как подключиться к VPN – FRKN VPN для MacOS" },
    en: { title: "How to Connect to VPN – FRKN VPN for MacOS" },
    es: { title: "Cómo Conectarse a VPN – FRKN VPN para MacOS" },
    pt: { title: "Como Conectar ao VPN – FRKN VPN para MacOS" },
    fr: { title: "Comment Se Connecter au VPN – FRKN VPN pour MacOS" },
    de: { title: "Wie man sich mit VPN verbindet – FRKN VPN für MacOS" },
    tr: { title: "VPN'e Nasıl Bağlanılır – FRKN VPN için iOS" },
  }[locale]
}
