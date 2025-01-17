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
            <Link href="/dashboard/connections" className="text-blue-500">
              /dashboard/connections
            </Link>
          </li>
          <li>
            Выберите страну (1) и скопируйте адрес конфигурации (2)
            <a href="/help/ss/1.png" target="_blank" rel="noreferrer">
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

  if (locale === "es") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Shadowsocks</h1>
        <p className="mb-4">
          Shadowsocks es una herramienta para eludir la censura de Internet que
          utiliza un servidor proxy para redirigir el tráfico de Internet. Fue
          diseñado para garantizar la privacidad y seguridad de los usuarios en
          países con una censura estricta en Internet. Shadowsocks utiliza
          cifrado para proteger los datos, lo que lo hace difícil de detectar y
          bloquear.
        </p>
        <p className="mb-4">
          Una de las principales ventajas de Shadowsocks es su alta velocidad y
          eficiencia, lo que lo hace ideal para la transmisión de video en
          streaming y otras tareas que requieren grandes volúmenes de datos.
          Además, Shadowsocks es fácil de configurar y admite múltiples
          configuraciones, lo que permite a los usuarios adaptarlo a sus
          necesidades. También tiene una alta resistencia a la detección y el
          bloqueo, lo que lo convierte en una herramienta confiable para eludir
          la censura de Internet en diversas condiciones.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Conexión</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Ve a la página{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              /dashboard/connections
            </Link>
          </li>
          <li>
            Selecciona un país (1) y copia la dirección de configuración (2)
            <a href="/help/ss/1.png" target="_blank" rel="noreferrer">
              <img src="/help/ss/1.png" alt="Paso 1" className="w-full" />
            </a>
          </li>
          <li>
            Descarga e instala Outline:
            <Download />
          </li>
          <li>
            Haz clic en el botón de añadir (3)
            <img
              src="/help/ss/3.png"
              alt="Paso 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Introduce la dirección de configuración (4) y haz clic en "add
            server" (5)
            <img
              src="/help/ss/4.png"
              alt="Paso 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Conéctate haciendo clic en "connect" (6):
            <img
              src="/help/ss/6.png"
              alt="Paso 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>Si es necesario, permite agregar el VPN al sistema.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Código QR</h2>
        Si utilizas un smartphone o una tableta, abre la aplicación de la cámara
        y apunta al código QR en nuestro sitio web. El sistema sugerirá abrir la
        aplicación Outline y agregará automáticamente el enlace de
        configuración.
        <img
          src="/help/ss/8.jpeg"
          alt="Paso 8"
          className="w-full max-w-[350px]"
        />
      </div>
    )
  }

  if (locale === "pt") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Shadowsocks</h1>
        <p className="mb-4">
          Shadowsocks é uma ferramenta para contornar a censura na Internet que
          usa um servidor proxy para redirecionar o tráfego da Internet. Foi
          desenvolvido para garantir a privacidade e segurança dos usuários em
          países com forte censura na Internet. Shadowsocks utiliza criptografia
          para proteger os dados, tornando-o difícil de detectar e bloquear.
        </p>
        <p className="mb-4">
          Uma das principais vantagens do Shadowsocks é sua alta velocidade e
          eficiência, tornando-o ideal para streaming de vídeo e outras tarefas
          que exigem grandes volumes de dados. Além disso, Shadowsocks é fácil
          de configurar e suporta várias configurações, permitindo que os
          usuários o adaptem às suas necessidades. Ele também possui alta
          resistência à detecção e bloqueio, sendo uma ferramenta confiável para
          contornar a censura na Internet em diversas condições.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Conexão</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Acesse a página{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              /dashboard/connections
            </Link>
          </li>
          <li>
            Escolha um país (1) e copie o endereço de configuração (2)
            <a href="/help/ss/1.png" target="_blank" rel="noreferrer">
              <img src="/help/ss/1.png" alt="Passo 1" className="w-full" />
            </a>
          </li>
          <li>
            Baixe e instale o Outline:
            <Download />
          </li>
          <li>
            Clique no botão adicionar (3)
            <img
              src="/help/ss/3.png"
              alt="Passo 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Cole o endereço de configuração (4) e clique em "add server" (5)
            <img
              src="/help/ss/4.png"
              alt="Passo 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Conecte-se clicando em "connect" (6):
            <img
              src="/help/ss/6.png"
              alt="Passo 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>Se necessário, permita a adição do VPN ao sistema.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Código QR</h2>
        Se você usa um smartphone ou tablet, abra o aplicativo de câmera e
        aponte para o código QR no nosso site. O sistema sugerirá abrir o
        aplicativo Outline e adicionará automaticamente o link de configuração.
        <img
          src="/help/ss/8.jpeg"
          alt="Passo 8"
          className="w-full max-w-[350px]"
        />
      </div>
    )
  }

  if (locale === "fr") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Shadowsocks</h1>
        <p className="mb-4">
          Shadowsocks est un outil conçu pour contourner la censure d'Internet
          en utilisant un serveur proxy pour rediriger le trafic Internet. Il a
          été développé pour garantir la confidentialité et la sécurité des
          utilisateurs dans les pays avec une censure stricte. Shadowsocks
          utilise le cryptage pour protéger les données, ce qui le rend
          difficile à détecter et à bloquer.
        </p>
        <p className="mb-4">
          L'un des principaux avantages de Shadowsocks est sa grande vitesse et
          son efficacité, ce qui le rend idéal pour le streaming vidéo et autres
          tâches nécessitant de gros volumes de données. En outre, Shadowsocks
          est facile à configurer et prend en charge plusieurs configurations,
          permettant aux utilisateurs de l'adapter à leurs besoins. Il est aussi
          très résistant à la détection et au blocage, en faisant un outil
          fiable pour contourner la censure dans diverses conditions.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Connexion</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Accédez à la page{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              /dashboard/connections
            </Link>
          </li>
          <li>
            Sélectionnez un pays (1) et copiez l'adresse de configuration (2)
            <a href="/help/ss/1.png" target="_blank" rel="noreferrer">
              <img src="/help/ss/1.png" alt="Étape 1" className="w-full" />
            </a>
          </li>
          <li>
            Téléchargez et installez Outline:
            <Download />
          </li>
          <li>
            Cliquez sur le bouton ajouter (3)
            <img
              src="/help/ss/3.png"
              alt="Étape 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Collez l'adresse de configuration (4) et cliquez sur "add server"
            (5)
            <img
              src="/help/ss/4.png"
              alt="Étape 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Connectez-vous en cliquant sur "connect" (6):
            <img
              src="/help/ss/6.png"
              alt="Étape 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>Autorisez l'ajout de VPN au système si nécessaire.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Code QR</h2>
        Si vous utilisez un smartphone ou une tablette, ouvrez l'application
        "Caméra" et pointez sur le code QR de notre site. Le système proposera
        d'ouvrir l'application Outline et ajoutera automatiquement le lien de
        configuration.
        <img
          src="/help/ss/8.jpeg"
          alt="Étape 8"
          className="w-full max-w-[350px]"
        />
      </div>
    )
  }

  if (locale === "de") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Shadowsocks</h1>
        <p className="mb-4">
          Shadowsocks ist ein Werkzeug zum Umgehen der Internetzensur, das einen
          Proxy-Server verwendet, um den Internetverkehr umzuleiten. Es wurde
          entwickelt, um die Privatsphäre und Sicherheit der Nutzer in Ländern
          mit strenger Internetzensur zu gewährleisten. Shadowsocks verwendet
          Verschlüsselung, um die Daten zu schützen, was es schwierig macht, es
          zu entdecken und zu blockieren.
        </p>
        <p className="mb-4">
          Einer der Hauptvorteile von Shadowsocks ist seine hohe Geschwindigkeit
          und Effizienz, was es ideal für das Streaming von Videos und andere
          datenintensive Aufgaben macht. Darüber hinaus ist Shadowsocks einfach
          zu konfigurieren und unterstützt eine Vielzahl von Konfigurationen,
          die es den Nutzern ermöglichen, es an ihre Bedürfnisse anzupassen. Es
          ist auch sehr widerstandsfähig gegenüber Erkennung und Blockierung,
          was es zu einem zuverlässigen Werkzeug macht, um die Internetzensur
          unter verschiedenen Bedingungen zu umgehen.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Verbindung</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Gehen Sie zur Seite{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              /dashboard/connections
            </Link>
          </li>
          <li>
            Wählen Sie ein Land (1) und kopieren Sie die Konfigurationsadresse
            (2)
            <a href="/help/ss/1.png" target="_blank" rel="noreferrer">
              <img src="/help/ss/1.png" alt="Schritt 1" className="w-full" />
            </a>
          </li>
          <li>
            Laden Sie Outline herunter und installieren Sie es:
            <Download />
          </li>
          <li>
            Klicken Sie auf das Pluszeichen (3)
            <img
              src="/help/ss/3.png"
              alt="Schritt 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Fügen Sie die Konfigurationsadresse (4) ein und klicken Sie auf "add
            server" (5)
            <img
              src="/help/ss/4.png"
              alt="Schritt 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Klicken Sie auf "connect" (6):
            <img
              src="/help/ss/6.png"
              alt="Schritt 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Falls erforderlich, erlauben Sie das Hinzufügen des VPN zum System.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">QR-Code</h2>
        Wenn Sie ein Smartphone oder Tablet verwenden, öffnen Sie die Kamera-App
        und richten Sie sie auf den QR-Code auf unserer Website. Das System wird
        Ihnen vorschlagen, die Outline-App zu öffnen und den Konfigurationslink
        automatisch hinzuzufügen.
        <img
          src="/help/ss/8.jpeg"
          alt="Schritt 8"
          className="w-full max-w-[350px]"
        />
      </div>
    )
  }

  if (locale === "tr") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Shadowsocks</h1>
        <p className="mb-4">
          Shadowsocks, internet sansürünü aşmak için kullanılan bir araçtır ve
          internet trafiğini yönlendirmek için bir proxy sunucusu kullanır.
          İnternet sansürünün sıkı olduğu ülkelerde kullanıcıların gizliliğini
          ve güvenliğini sağlamak amacıyla geliştirilmiştir. Shadowsocks,
          verileri korumak için şifreleme kullanır ve bu da onu tespit etmeyi ve
          engellemeyi zorlaştırır.
        </p>
        <p className="mb-4">
          Shadowsocks'un başlıca avantajlarından biri yüksek hızı ve
          verimliliğidir, bu da onu video akışı ve büyük veri gereksinimi duyan
          diğer görevler için ideal hale getirir. Ayrıca, Shadowsocks kolayca
          yapılandırılabilir ve çok sayıda yapılandırmayı destekler, bu da
          kullanıcıların ihtiyaçlarına göre uyarlamalarını sağlar. Ayrıca,
          tespit edilme ve engellenmeye karşı yüksek direnç gösterir, bu da onu
          internet sansürünü aşmak için güvenilir bir araç yapar.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Bağlantı</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Şu sayfayı ziyaret edin{" "}
            <Link href="/dashboard/connections" className="text-blue-500">
              /dashboard/connections
            </Link>
          </li>
          <li>
            Bir ülke seçin (1) ve yapılandırma adresini (2) kopyalayın
            <a href="/help/ss/1.png" target="_blank" rel="noreferrer">
              <img src="/help/ss/1.png" alt="Adım 1" className="w-full" />
            </a>
          </li>
          <li>
            Outline'ı indirin ve yükleyin:
            <Download />
          </li>
          <li>
            Artı simgesine tıklayın (3)
            <img
              src="/help/ss/3.png"
              alt="Adım 3"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            Yapılandırma adresini (4) yapıştırın ve "add server" (5) butonuna
            tıklayın
            <img
              src="/help/ss/4.png"
              alt="Adım 4"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>
            "Connect" (6) butonuna tıklayarak bağlanın:
            <img
              src="/help/ss/6.png"
              alt="Adım 6"
              className="w-full max-w-[350px]"
            />
          </li>
          <li>Gerekirse, VPN'nin sisteme eklenmesine izin verin.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">QR Kodu</h2>
        Akıllı telefon veya tablet kullanıyorsanız, "Kamera" uygulamasını açın
        ve web sitemizdeki QR koduna odaklayın. Sistem, Outline uygulamasını
        açmayı teklif edecek ve yapılandırma bağlantısını otomatik olarak
        ekleyecektir.
        <img
          src="/help/ss/8.jpeg"
          alt="Adım 8"
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
          <Link href="/dashboard/connections" className="text-blue-500">
            /dashboard/connections
          </Link>
        </li>
        <li>
          Select a country (1) and copy the configuration address (2)
          <a href="/help/ss/1.png" target="_blank" rel="noreferrer">
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

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: {
      title: "Shadowsocks: Обход интернет-цензуры",
      description:
        "Узнайте, как использовать Shadowsocks для обхода интернет-цензуры, настройки и подключения.",
    },
    en: {
      title: "Shadowsocks: Bypass Internet Censorship",
      description:
        "Learn how to use Shadowsocks to bypass internet censorship, configure, and connect.",
    },
    es: {
      title: "Shadowsocks: Eludir la censura en Internet",
      description:
        "Aprenda a usar Shadowsocks para eludir la censura en Internet, configurar y conectar.",
    },
    pt: {
      title: "Shadowsocks: Contornar a Censura na Internet",
      description:
        "Saiba como usar o Shadowsocks para contornar a censura na Internet, configurar e conectar.",
    },
    fr: {
      title: "Shadowsocks: Contourner la censure sur Internet",
      description:
        "Apprenez à utiliser Shadowsocks pour contourner la censure sur Internet, configurer et connecter.",
    },
    de: {
      title: "Shadowsocks: Internetzensur umgehen",
      description:
        "Erfahren Sie, wie Sie Shadowsocks verwenden, um die Internetzensur zu umgehen, zu konfigurieren und zu verbinden.",
    },
    tr: {
      title: "Shadowsocks: İnternet Sansürünü Aşma",
      description:
        "İnternet sansürünü aşmak, yapılandırmak ve bağlanmak için Shadowsocks'u nasıl kullanacağınızı öğrenin.",
    },
  }[locale]
}
