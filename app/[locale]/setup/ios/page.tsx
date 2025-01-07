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

  if (locale === "es") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Conexión en iOS</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Visite la página:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Conexiones
            </Link>
          </li>
          <li>
            Elija el país (1) y copie la dirección de configuración (2a) o
            despliegue el código QR (2b)
            <a href="/help/setup/ios/1.png" target="_blank">
              <img
                src="/help/setup/ios/1.png"
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
            Haga clic en (3a) para pegar el enlace desde el portapapeles o (3b)
            para escanear el código QR
            <img
              src="/help/setup/ios/3.png"
              alt="Paso 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Acepte agregar la VPN (4)
            <img
              src="/help/setup/ios/4.png"
              alt="Paso 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Configuración añadida
            <img
              src="/help/setup/ios/5.png"
              alt="Paso 5"
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
        <h1 className="text-4xl font-bold mb-6">Conexão no iOS</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Acesse a página:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Conexões
            </Link>
          </li>
          <li>
            Escolha o país (1) e copie o endereço de configuração (2a) ou abra o
            código QR (2b)
            <a href="/help/setup/ios/1.png" target="_blank">
              <img
                src="/help/setup/ios/1.png"
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
            Clique em (3a) para colar o link da área de transferência ou (3b)
            para escanear o código QR
            <img
              src="/help/setup/ios/3.png"
              alt="Passo 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Aceite adicionar a VPN (4)
            <img
              src="/help/setup/ios/4.png"
              alt="Passo 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Configuração adicionada
            <img
              src="/help/setup/ios/5.png"
              alt="Passo 5"
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
        <h1 className="text-4xl font-bold mb-6">Connexion sur iOS</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Allez sur la page :{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Connexions
            </Link>
          </li>
          <li>
            Choisissez le pays (1) et copiez l'adresse de configuration (2a) ou
            dépliez le code QR (2b)
            <a href="/help/setup/ios/1.png" target="_blank">
              <img
                src="/help/setup/ios/1.png"
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
              FoXray sur AppStore
            </a>
          </li>
          <li>
            Cliquez sur (3a) pour coller le lien depuis le presse-papier ou (3b)
            pour scanner le code QR
            <img
              src="/help/setup/ios/3.png"
              alt="Étape 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Acceptez d'ajouter le VPN (4)
            <img
              src="/help/setup/ios/4.png"
              alt="Étape 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Configuration ajoutée
            <img
              src="/help/setup/ios/5.png"
              alt="Étape 5"
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
        <h1 className="text-4xl font-bold mb-6">Verbindung auf iOS</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Gehen Sie auf die Seite:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Verbindungen
            </Link>
          </li>
          <li>
            Wählen Sie das Land (1) und kopieren Sie die Konfigurationsadresse
            (2a) oder blenden Sie den QR-Code (2b) ein
            <a href="/help/setup/ios/1.png" target="_blank">
              <img
                src="/help/setup/ios/1.png"
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
            Klicken Sie auf (3a), um den Link aus der Zwischenablage einzufügen
            oder (3b), um den QR-Code zu scannen
            <img
              src="/help/setup/ios/3.png"
              alt="Schritt 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Stimmen Sie dem Hinzufügen des VPNs zu (4)
            <img
              src="/help/setup/ios/4.png"
              alt="Schritt 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Konfiguration hinzugefügt
            <img
              src="/help/setup/ios/5.png"
              alt="Schritt 5"
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
        <h1 className="text-4xl font-bold mb-6">iOS Bağlantısı</h1>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Sayfayı ziyaret edin:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              Bağlantılar
            </Link>
          </li>
          <li>
            Ülkeyi seçin (1) ve yapılandırma adresini kopyalayın (2a) veya QR
            kodunu açın (2b)
            <a href="/help/setup/ios/1.png" target="_blank">
              <img
                src="/help/setup/ios/1.png"
                alt="Adım 1"
                className="w-full"
              />
            </a>
          </li>
          <li>
            FoXray'i indirin ve yükleyin:{" "}
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
            (3a) linki panodan yapıştırmak için, (3b) QR kodunu taramak için
            tıklayın
            <img
              src="/help/setup/ios/3.png"
              alt="Adım 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            VPN eklemeyi kabul edin (4)
            <img
              src="/help/setup/ios/4.png"
              alt="Adım 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Yapılandırma eklendi
            <img
              src="/help/setup/ios/5.png"
              alt="Adım 5"
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

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: { title: "Как подключиться к VPN – FRKN VPN для iOS" },
    en: { title: "How to Connect to VPN – FRKN VPN for iOS" },
    es: { title: "Cómo Conectarse a VPN – FRKN VPN para iOS" },
    pt: { title: "Como Conectar ao VPN – FRKN VPN para iOS" },
    fr: { title: "Comment Se Connecter au VPN – FRKN VPN pour iOS" },
    de: { title: "Wie man sich mit VPN verbindet – FRKN VPN für iOS" },
    tr: { title: "VPN'e Nasıl Bağlanılır – FRKN VPN için iOS" },
  }[locale]
}
