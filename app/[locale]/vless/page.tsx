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

  if (locale === "es") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Vless</h1>

        <p className="mb-4">
          VLESS es un protocolo moderno diseñado para mejorar el rendimiento y
          la seguridad de las conexiones a Internet. Se caracteriza por su alta
          velocidad y baja latencia, lo que lo hace ideal para situaciones que
          requieren una transmisión de datos rápida.
        </p>

        <p className="mb-4">
          Una de las principales ventajas de VLESS es su flexibilidad y
          escalabilidad. Admite diversos métodos de cifrado y autenticación, lo
          que garantiza un alto nivel de seguridad. Además, VLESS tiene bajos
          requisitos del sistema, lo que permite usarlo en dispositivos con
          recursos limitados. Gracias a estas características, VLESS está
          ganando popularidad entre los usuarios que buscan una solución
          confiable y eficiente para proteger sus datos y eludir la censura en
          Internet.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Conexión</h2>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Visite la página{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              /dashboard/connections
            </Link>
          </li>
          <li>
            Seleccione un país (1) y copie la dirección de configuración (2a) o
            abra el código QR (2b).
            <a href="/help/vless/1.png" target="_blank" rel="noreferrer">
              <img src="/help/vless/1.png" alt="Paso 1" className="w-full" />
            </a>
          </li>
          <li>
            Descargue e instale v2RayTun:
            <Download />
          </li>
          <li>
            Haga clic en el signo más (3).
            <img
              src="/help/vless/3.png"
              alt="Paso 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Pegue la dirección de configuración desde el portapapeles (4a) o
            seleccione la opción del código QR (4b). Al seleccionar el ícono del
            escáner, podrá escanear el código.
            <img
              src="/help/vless/4.png"
              alt="Paso 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            La configuración ha sido agregada. Tendrá acceso a varios países,
            puede elegir el que desee (5).
            <img
              src="/help/vless/5.png"
              alt="Paso 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Haga clic en el botón de conexión (6) y acepte agregar la VPN.
            <img
              src="/help/vless/6.png"
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
        <h1 className="text-4xl font-bold mb-6">Vless</h1>

        <p className="mb-4">
          O VLESS é um protocolo moderno desenvolvido para melhorar o desempenho
          e a segurança das conexões à Internet. Ele se destaca por sua alta
          velocidade e baixa latência, tornando-o ideal para situações que
          exigem transferência rápida de dados.
        </p>

        <p className="mb-4">
          Uma das principais vantagens do VLESS é sua flexibilidade e
          escalabilidade. Ele suporta vários métodos de criptografia e
          autenticação, garantindo um alto nível de segurança. Além disso, o
          VLESS possui requisitos de sistema baixos, permitindo seu uso em
          dispositivos com recursos limitados. Graças a essas características, o
          VLESS está se tornando cada vez mais popular entre os usuários que
          buscam uma solução confiável e eficiente para proteger seus dados e
          contornar a censura na Internet.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Conexão</h2>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Acesse a página{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              /dashboard/connections
            </Link>
          </li>
          <li>
            Escolha um país (1) e copie o endereço de configuração (2a) ou abra
            o código QR (2b).
            <a href="/help/vless/1.png" target="_blank" rel="noreferrer">
              <img src="/help/vless/1.png" alt="Etapa 1" className="w-full" />
            </a>
          </li>
          <li>
            Baixe e instale o v2RayTun:
            <Download />
          </li>
          <li>
            Clique no botão de mais (+) (3).
            <img
              src="/help/vless/3.png"
              alt="Etapa 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Cole o endereço de configuração da área de transferência (4a) ou
            selecione a opção de código QR (4b). Ao selecionar o ícone do
            scanner, será possível escanear o código.
            <img
              src="/help/vless/4.png"
              alt="Etapa 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            A configuração foi adicionada. Você terá acesso a vários países,
            podendo escolher o desejado (5).
            <img
              src="/help/vless/5.png"
              alt="Etapa 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Clique no botão de conexão (6) e aceite adicionar a VPN.
            <img
              src="/help/vless/6.png"
              alt="Etapa 6"
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
        <h1 className="text-4xl font-bold mb-6">Vless</h1>

        <p className="mb-4">
          VLESS est un protocole moderne conçu pour améliorer les performances
          et la sécurité des connexions Internet. Il se distingue par sa grande
          vitesse et sa faible latence, ce qui le rend idéal pour les situations
          nécessitant une transmission rapide de données.
        </p>

        <p className="mb-4">
          L'un des principaux avantages de VLESS est sa flexibilité et son
          évolutivité. Il prend en charge diverses méthodes de chiffrement et
          d'authentification, garantissant un niveau élevé de sécurité. De plus,
          VLESS a des exigences système faibles, ce qui permet de l'utiliser sur
          des appareils avec des ressources limitées. Grâce à ces
          caractéristiques, VLESS devient de plus en plus populaire auprès des
          utilisateurs à la recherche d'une solution fiable et efficace pour
          protéger leurs données et contourner la censure Internet.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Connexion</h2>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Rendez-vous sur la page{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              /dashboard/connections
            </Link>
          </li>
          <li>
            Sélectionnez un pays (1) et copiez l'adresse de configuration (2a)
            ou ouvrez le code QR (2b).
            <a href="/help/vless/1.png" target="_blank" rel="noreferrer">
              <img src="/help/vless/1.png" alt="Étape 1" className="w-full" />
            </a>
          </li>
          <li>
            Téléchargez et installez v2RayTun :
            <Download />
          </li>
          <li>
            Cliquez sur le signe plus (3).
            <img
              src="/help/vless/3.png"
              alt="Étape 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Collez l'adresse de configuration depuis le presse-papiers (4a) ou
            sélectionnez l'option QR code (4b). En sélectionnant l'icône du
            scanner, vous pourrez scanner le code.
            <img
              src="/help/vless/4.png"
              alt="Étape 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            La configuration a été ajoutée. Vous aurez accès à plusieurs pays et
            pourrez choisir celui que vous souhaitez (5).
            <img
              src="/help/vless/5.png"
              alt="Étape 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Cliquez sur le bouton de connexion (6) et acceptez d'ajouter le VPN.
            <img
              src="/help/vless/6.png"
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
        <h1 className="text-4xl font-bold mb-6">Vless</h1>

        <p className="mb-4">
          VLESS ist ein modernes Protokoll, das entwickelt wurde, um die
          Leistung und Sicherheit von Internetverbindungen zu verbessern. Es
          zeichnet sich durch hohe Geschwindigkeit und geringe Latenz aus, was
          es ideal für Anwendungen macht, die schnelle Datenübertragung
          erfordern.
        </p>

        <p className="mb-4">
          Einer der Hauptvorteile von VLESS ist seine Flexibilität und
          Skalierbarkeit. Es unterstützt verschiedene Verschlüsselungs- und
          Authentifizierungsmethoden, was ein hohes Maß an Sicherheit bietet.
          Darüber hinaus hat VLESS geringe Systemanforderungen, sodass es auf
          Geräten mit begrenzten Ressourcen verwendet werden kann. Dank dieser
          Eigenschaften wird VLESS bei Nutzern immer beliebter, die nach einer
          zuverlässigen und effizienten Lösung für den Schutz ihrer Daten und
          die Umgehung von Internetzensur suchen.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Verbindung</h2>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Besuchen Sie die Seite{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              /dashboard/connections
            </Link>
          </li>
          <li>
            Wählen Sie ein Land (1) und kopieren Sie die Konfigurationsadresse
            (2a) oder öffnen Sie den QR-Code (2b).
            <a href="/help/vless/1.png" target="_blank" rel="noreferrer">
              <img src="/help/vless/1.png" alt="Schritt 1" className="w-full" />
            </a>
          </li>
          <li>
            Laden Sie v2RayTun herunter und installieren Sie es:
            <Download />
          </li>
          <li>
            Klicken Sie auf das Pluszeichen (3).
            <img
              src="/help/vless/3.png"
              alt="Schritt 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Fügen Sie die Konfigurationsadresse aus der Zwischenablage ein (4a)
            oder wählen Sie die QR-Code-Option (4b). Mit der Scanner-Option
            können Sie den Code scannen.
            <img
              src="/help/vless/4.png"
              alt="Schritt 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Die Konfiguration wurde hinzugefügt. Es stehen Ihnen mehrere Länder
            zur Verfügung, aus denen Sie eines auswählen können (5).
            <img
              src="/help/vless/5.png"
              alt="Schritt 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Klicken Sie auf die Verbindungsschaltfläche (6) und stimmen Sie zu,
            das VPN hinzuzufügen.
            <img
              src="/help/vless/6.png"
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
        <h1 className="text-4xl font-bold mb-6">Vless</h1>

        <p className="mb-4">
          VLESS, internet bağlantılarının performansını ve güvenliğini artırmak
          için geliştirilmiş modern bir protokoldür. Yüksek hız ve düşük gecikme
          süresi ile dikkat çeker, bu da onu hızlı veri aktarımı gerektiren
          durumlar için ideal hale getirir.
        </p>

        <p className="mb-4">
          VLESS'in en büyük avantajlarından biri esnekliği ve
          ölçeklenebilirliğidir. Çeşitli şifreleme ve kimlik doğrulama
          yöntemlerini destekler ve bu da yüksek düzeyde güvenlik sağlar. Ayrıca
          VLESS, düşük sistem gereksinimlerine sahiptir, bu nedenle sınırlı
          kaynaklara sahip cihazlarda kullanılabilir. Bu özellikleri sayesinde
          VLESS, verilerini korumak ve internet sansürünü aşmak için güvenilir
          ve verimli bir çözüm arayan kullanıcılar arasında giderek daha popüler
          hale gelmektedir.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Bağlantı</h2>

        <ul className="list-disc list-inside mb-4 space-y-4">
          <li>
            Şu sayfayı ziyaret edin:{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              /dashboard/connections
            </Link>
          </li>
          <li>
            Bir ülke seçin (1) ve yapılandırma adresini kopyalayın (2a) veya QR
            kodunu açın (2b).
            <a href="/help/vless/1.png" target="_blank" rel="noreferrer">
              <img src="/help/vless/1.png" alt="Adım 1" className="w-full" />
            </a>
          </li>
          <li>
            v2RayTun uygulamasını indirin ve yükleyin:
            <Download />
          </li>
          <li>
            Artı işaretine tıklayın (3).
            <img
              src="/help/vless/3.png"
              alt="Adım 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Yapılandırma adresini panodan yapıştırın (4a) veya QR kodu
            seçeneğini seçin (4b). Tarayıcı simgesini seçerek kodu
            tarayabilirsiniz.
            <img
              src="/help/vless/4.png"
              alt="Adım 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Yapılandırma eklendi. Kullanabileceğiniz birkaç ülke mevcut olacak,
            istediğinizi seçebilirsiniz (5).
            <img
              src="/help/vless/5.png"
              alt="Adım 5"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Bağlan düğmesine tıklayın (6) ve VPN eklemeyi kabul edin.
            <img
              src="/help/vless/6.png"
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
    es: {
      title: "Vless: Protocolo Moderno para un Rendimiento Mejorado",
      description:
        "Aprenda sobre Vless, sus ventajas, configuración y conexión para mejorar la seguridad y eludir la censura en internet.",
    },
    pt: {
      title: "Vless: Protocolo Moderno para Desempenho Aprimorado",
      description:
        "Saiba mais sobre o Vless, suas vantagens, configuração e conexão para melhorar a segurança e contornar a censura na internet.",
    },
    fr: {
      title: "Vless: Protocole Moderne pour une Performance Améliorée",
      description:
        "Découvrez Vless, ses avantages, sa configuration et sa connexion pour améliorer la sécurité et contourner la censure sur internet.",
    },
    de: {
      title: "Vless: Modernes Protokoll für Verbesserte Leistung",
      description:
        "Erfahren Sie mehr über Vless, seine Vorteile, Einrichtung und Verbindung zur Verbesserung der Sicherheit und Umgehung der Internetzensur.",
    },
    tr: {
      title: "Vless: Gelişmiş Performans için Modern Protokol",
      description:
        "Vless hakkında, avantajları, kurulumu ve internet sansürünü aşmak için bağlantısı hakkında bilgi edinin.",
    },
  }[locale]
}
