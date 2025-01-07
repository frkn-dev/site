import { getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
import type { Metadata } from "next"
import { setStaticParamsLocale } from "next-international/server"

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)

  if (locale === "ru") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">XRay</h1>

        <p className="mb-4">
          XRay — это передовой VPN-протокол, который получил широкое
          распространение для обхода интернет-цензуры в России, Иране и Китае.
          Протокол базируется на V2Ray, но отличается улучшенной
          производительностью, новыми функциями и более высоким уровнем
          безопасности. Эти качества позволяют использовать его в условиях
          жестких ограничений доступа к интернету.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Преимущества</h2>
        <p className="mb-4">
          Улучшенное шифрование и высокая производительность. Одним из ключевых
          преимуществ XRay является использование протокола XTLS. Этот протокол
          оптимизирован для более эффективной передачи данных, что позволяет
          ускорить соединение и снизить задержки. В отличие от стандартного TLS,
          XTLS экономит вычислительные ресурсы и улучшает скорость работы,
          особенно в медленных или нестабильных сетях.
        </p>

        <p className="mb-4">
          Гибкость и расширяемость. XRay поддерживает несколько протоколов:
          VMess, VLESS, Shadowsocks и другие. Это делает его универсальным
          инструментом для обхода цензуры. Возможности по маскировке трафика и
          гибкости маршрутизации позволяют настроить VPN под конкретные нужды,
          обеспечивая стабильное соединение даже в условиях активного
          мониторинга и блокировки VPN-трафика.
        </p>

        <p className="mb-4">
          Скрытие трафика и обход DPI. В условиях, когда правительства
          используют технологии глубокого анализа пакетов (DPI) для блокировки
          VPN-трафика, XRay предоставляет инструменты для обхода таких
          ограничений. Например, XRay может замаскировать трафик под обычные
          HTTPS-запросы, что затрудняет его обнаружение и блокировку. Это
          особенно важно в Китае, где Великий китайский файрвол (GFW) активно
          обновляет методы фильтрации и блокировки трафика.
        </p>

        <h2 className="text-2xl font-semibold mb-4">FRKN</h2>
        <p className="mb-4">
          Для использования FRKN VPN с XRay на различных устройствах, скачайте
          одно из следующих приложений:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Для iPhone, iPad и Mac рекомендуем установить{" "}
            <a
              href="https://apps.apple.com/ru/app/foxray/id6448898396"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              FoXray
            </a>
          </li>
          <li>
            Для Windows и Android установите приложение Hiddify из{" "}
            <a
              href="https://apps.microsoft.com/detail/9pdfnl3qv2s5"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              Microsoft Store
            </a>{" "}
            или{" "}
            <a
              href="https://play.google.com/store/apps/details?id=app.hiddify.com"
              className="text-blue-500"
            >
              Google Play
            </a>
          </li>
        </ul>
      </div>
    )
  }

  if (locale === "es") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">XRay</h1>

        <p className="mb-4">
          XRay es un protocolo VPN avanzado que ha ganado amplia aceptación para
          eludir la censura de Internet en Rusia, Irán y China. El protocolo se
          basa en V2Ray, pero se diferencia por su mejor rendimiento, nuevas
          funciones y mayor nivel de seguridad. Estas cualidades permiten su uso
          en condiciones de estrictas restricciones de acceso a Internet.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Ventajas</h2>
        <p className="mb-4">
          Cifrado mejorado y alto rendimiento. Una de las principales ventajas
          de XRay es el uso del protocolo XTLS. Este protocolo está optimizado
          para una transmisión de datos más eficiente, lo que permite acelerar
          la conexión y reducir la latencia. A diferencia del TLS estándar, XTLS
          ahorra recursos computacionales y mejora la velocidad, especialmente
          en redes lentas o inestables.
        </p>

        <p className="mb-4">
          Flexibilidad y escalabilidad. XRay soporta varios protocolos: VMess,
          VLESS, Shadowsocks y otros. Esto lo convierte en una herramienta
          versátil para eludir la censura. Las capacidades de enmascaramiento de
          tráfico y flexibilidad de enrutamiento permiten personalizar el VPN
          para necesidades específicas, garantizando una conexión estable
          incluso bajo monitorización activa y bloqueo del tráfico VPN.
        </p>

        <p className="mb-4">
          Enmascaramiento de tráfico y elusión de DPI. En condiciones donde los
          gobiernos utilizan tecnologías de análisis profundo de paquetes (DPI)
          para bloquear el tráfico VPN, XRay proporciona herramientas para
          evitar dichas restricciones. Por ejemplo, XRay puede disfrazar el
          tráfico como solicitudes HTTPS normales, lo que dificulta su detección
          y bloqueo. Esto es especialmente importante en China, donde el Gran
          Cortafuegos de China (GFW) actualiza activamente los métodos de
          filtrado y bloqueo de tráfico.
        </p>

        <h2 className="text-2xl font-semibold mb-4">FRKN</h2>
        <p className="mb-4">
          Para usar FRKN VPN con XRay en diferentes dispositivos, descargue una
          de las siguientes aplicaciones:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Para iPhone, iPad y Mac recomendamos instalar{" "}
            <a
              href="https://apps.apple.com/ru/app/foxray/id6448898396"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              FoXray
            </a>
          </li>
          <li>
            Para Windows y Android instale la aplicación Hiddify desde{" "}
            <a
              href="https://apps.microsoft.com/detail/9pdfnl3qv2s5"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              Microsoft Store
            </a>{" "}
            o{" "}
            <a
              href="https://play.google.com/store/apps/details?id=app.hiddify.com"
              className="text-blue-500"
            >
              Google Play
            </a>
          </li>
        </ul>
      </div>
    )
  }

  if (locale === "pt") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">XRay</h1>

        <p className="mb-4">
          XRay é um protocolo VPN avançado que ganhou ampla aceitação para
          contornar a censura na Internet na Rússia, Irã e China. O protocolo é
          baseado no V2Ray, mas se diferencia por seu desempenho aprimorado,
          novos recursos e maior nível de segurança. Essas qualidades permitem
          seu uso em condições de restrições rigorosas ao acesso à Internet.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Vantagens</h2>
        <p className="mb-4">
          Criptografia aprimorada e alto desempenho. Uma das principais
          vantagens do XRay é o uso do protocolo XTLS. Esse protocolo é
          otimizado para uma transmissão de dados mais eficiente, permitindo
          acelerar a conexão e reduzir a latência. Ao contrário do TLS padrão, o
          XTLS economiza recursos computacionais e melhora a velocidade,
          especialmente em redes lentas ou instáveis.
        </p>

        <p className="mb-4">
          Flexibilidade e escalabilidade. O XRay suporta vários protocolos:
          VMess, VLESS, Shadowsocks e outros. Isso o torna uma ferramenta
          versátil para contornar a censura. As capacidades de mascaramento de
          tráfego e flexibilidade de roteamento permitem personalizar a VPN para
          necessidades específicas, garantindo uma conexão estável mesmo em
          condições de monitoramento ativo e bloqueio de tráfego de VPN.
        </p>

        <p className="mb-4">
          Mascaramento de tráfego e evasão de DPI. Em situações em que governos
          utilizam tecnologias de inspeção profunda de pacotes (DPI) para
          bloquear tráfego de VPN, o XRay fornece ferramentas para evitar essas
          restrições. Por exemplo, o XRay pode disfarçar o tráfego como
          solicitações HTTPS normais, dificultando sua detecção e bloqueio. Isso
          é especialmente importante na China, onde o Grande Firewall da China
          (GFW) atualiza continuamente os métodos de filtragem e bloqueio de
          tráfego.
        </p>

        <h2 className="text-2xl font-semibold mb-4">FRKN</h2>
        <p className="mb-4">
          Para usar o FRKN VPN com XRay em diferentes dispositivos, baixe um dos
          seguintes aplicativos:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Para iPhone, iPad e Mac, recomendamos instalar o{" "}
            <a
              href="https://apps.apple.com/ru/app/foxray/id6448898396"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              FoXray
            </a>
          </li>
          <li>
            Para Windows e Android, instale o aplicativo Hiddify da{" "}
            <a
              href="https://apps.microsoft.com/detail/9pdfnl3qv2s5"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              Microsoft Store
            </a>{" "}
            ou{" "}
            <a
              href="https://play.google.com/store/apps/details?id=app.hiddify.com"
              className="text-blue-500"
            >
              Google Play
            </a>
          </li>
        </ul>
      </div>
    )
  }

  if (locale === "fr") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">XRay</h1>

        <p className="mb-4">
          XRay est un protocole VPN avancé qui a été largement adopté pour
          contourner la censure d'Internet en Russie, en Iran et en Chine. Le
          protocole est basé sur V2Ray mais se distingue par ses performances
          améliorées, ses nouvelles fonctionnalités et son niveau de sécurité
          accru. Ces qualités le rendent utilisable dans des conditions de
          restrictions sévères d'accès à Internet.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Avantages</h2>
        <p className="mb-4">
          Chiffrement amélioré et haute performance. L'un des principaux
          avantages de XRay est l'utilisation du protocole XTLS. Ce protocole
          est optimisé pour une transmission de données plus efficace, ce qui
          permet d'accélérer la connexion et de réduire la latence.
          Contrairement au TLS standard, XTLS économise les ressources
          informatiques et améliore la vitesse, particulièrement dans les
          réseaux lents ou instables.
        </p>

        <p className="mb-4">
          Flexibilité et extensibilité. XRay prend en charge plusieurs
          protocoles : VMess, VLESS, Shadowsocks, et d'autres. Cela en fait un
          outil polyvalent pour contourner la censure. Les capacités de
          camouflage de trafic et la flexibilité du routage permettent de
          personnaliser le VPN pour des besoins spécifiques, garantissant une
          connexion stable même en cas de surveillance active et de blocage du
          trafic VPN.
        </p>

        <p className="mb-4">
          Masquage de trafic et contournement DPI. Dans les situations où les
          gouvernements utilisent des technologies d'inspection approfondie de
          paquets (DPI) pour bloquer le trafic VPN, XRay fournit des outils pour
          contourner ces restrictions. Par exemple, XRay peut déguiser le trafic
          en requêtes HTTPS ordinaires, rendant sa détection et son blocage
          difficiles. Cela est particulièrement important en Chine, où le Grand
          Pare-feu chinois (GFW) met activement à jour les méthodes de filtrage
          et de blocage du trafic.
        </p>

        <h2 className="text-2xl font-semibold mb-4">FRKN</h2>
        <p className="mb-4">
          Pour utiliser FRKN VPN avec XRay sur différents appareils, téléchargez
          l'une des applications suivantes :
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Pour iPhone, iPad et Mac, nous recommandons d'installer{" "}
            <a
              href="https://apps.apple.com/ru/app/foxray/id6448898396"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              FoXray
            </a>
          </li>
          <li>
            Pour Windows et Android, installez l'application Hiddify depuis{" "}
            <a
              href="https://apps.microsoft.com/detail/9pdfnl3qv2s5"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              Microsoft Store
            </a>{" "}
            ou{" "}
            <a
              href="https://play.google.com/store/apps/details?id=app.hiddify.com"
              className="text-blue-500"
            >
              Google Play
            </a>
          </li>
        </ul>
      </div>
    )
  }

  if (locale === "de") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">XRay</h1>

        <p className="mb-4">
          XRay ist ein fortschrittliches VPN-Protokoll, das weit verbreitet
          genutzt wird, um Internetsperren in Russland, Iran und China zu
          umgehen. Das Protokoll basiert auf V2Ray, zeichnet sich jedoch durch
          verbesserte Leistung, neue Funktionen und ein höheres
          Sicherheitsniveau aus. Diese Eigenschaften machen es geeignet für den
          Einsatz unter strengen Internetzugangsrestriktionen.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Vorteile</h2>
        <p className="mb-4">
          Verbesserte Verschlüsselung und hohe Leistung. Einer der Hauptvorteile
          von XRay ist die Nutzung des XTLS-Protokolls. Dieses Protokoll ist für
          eine effizientere Datenübertragung optimiert, was die Verbindung
          beschleunigt und die Latenzzeit reduziert. Im Vergleich zu
          standardmäßigem TLS spart XTLS Rechenressourcen und erhöht die
          Geschwindigkeit, insbesondere in langsamen oder instabilen Netzwerken.
        </p>

        <p className="mb-4">
          Flexibilität und Erweiterbarkeit. XRay unterstützt mehrere Protokolle:
          VMess, VLESS, Shadowsocks und andere. Dies macht es zu einem
          vielseitigen Werkzeug zur Umgehung von Zensur. Die Möglichkeiten zur
          Verschleierung des Datenverkehrs und flexiblen Routenführung
          ermöglichen es, das VPN an spezifische Anforderungen anzupassen und
          eine stabile Verbindung auch bei aktiver Überwachung und Sperrung von
          VPN-Datenverkehr zu gewährleisten.
        </p>

        <p className="mb-4">
          Datenverkehrsverschleierung und Umgehung von DPI. In Fällen, in denen
          Regierungen Deep Packet Inspection (DPI) einsetzen, um
          VPN-Datenverkehr zu blockieren, bietet XRay Werkzeuge zur Umgehung
          solcher Einschränkungen. Beispielsweise kann XRay den Datenverkehr als
          normale HTTPS-Anfragen tarnen, was die Erkennung und Blockierung
          erschwert. Dies ist besonders wichtig in China, wo die Great Firewall
          (GFW) aktiv Methoden zur Filterung und Blockierung von Datenverkehr
          aktualisiert.
        </p>

        <h2 className="text-2xl font-semibold mb-4">FRKN</h2>
        <p className="mb-4">
          Um FRKN VPN mit XRay auf verschiedenen Geräten zu nutzen, laden Sie
          eine der folgenden Apps herunter:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Für iPhone, iPad und Mac empfehlen wir die Installation von{" "}
            <a
              href="https://apps.apple.com/ru/app/foxray/id6448898396"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              FoXray
            </a>
          </li>
          <li>
            Für Windows und Android installieren Sie die Hiddify-App aus dem{" "}
            <a
              href="https://apps.microsoft.com/detail/9pdfnl3qv2s5"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              Microsoft Store
            </a>{" "}
            oder{" "}
            <a
              href="https://play.google.com/store/apps/details?id=app.hiddify.com"
              className="text-blue-500"
            >
              Google Play
            </a>
          </li>
        </ul>
      </div>
    )
  }

  if (locale === "tr") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">XRay</h1>

        <p className="mb-4">
          XRay, Rusya, İran ve Çin'deki internet sansürünü aşmak için geniş
          çapta kullanılan gelişmiş bir VPN protokolüdür. Protokol V2Ray üzerine
          kurulmuştur, ancak geliştirilmiş performansı, yeni özellikleri ve daha
          yüksek güvenlik seviyesi ile ayrılır. Bu özellikler, katı internet
          erişim kısıtlamaları altında bile kullanılmasını mümkün kılar.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Avantajlar</h2>
        <p className="mb-4">
          Gelişmiş şifreleme ve yüksek performans. XRay'in en önemli
          avantajlarından biri, XTLS protokolünü kullanmasıdır. Bu protokol,
          veri iletimini daha verimli hale getirmek için optimize edilmiştir ve
          bağlantıyı hızlandırıp gecikmeyi azaltır. Standart TLS'den farklı
          olarak, XTLS hesaplama kaynaklarını korur ve özellikle yavaş veya
          kararsız ağlarda hız sağlar.
        </p>

        <p className="mb-4">
          Esneklik ve genişletilebilirlik. XRay, VMess, VLESS, Shadowsocks ve
          diğerleri gibi birden fazla protokolü destekler. Bu, sansürü aşmak
          için çok yönlü bir araç haline getirir. Trafik gizleme ve yönlendirme
          esnekliği gibi özellikler, VPN'i belirli ihtiyaçlara göre
          özelleştirmeye olanak tanır ve aktif izleme ve VPN trafiğinin
          engellenmesi durumlarında bile kararlı bir bağlantı sağlar.
        </p>

        <p className="mb-4">
          Trafik gizleme ve DPI aşma. Hükümetlerin VPN trafiğini engellemek için
          derin paket incelemesi (DPI) teknolojilerini kullandığı durumlarda,
          XRay bu kısıtlamaları aşmak için araçlar sunar. Örneğin, XRay trafiği
          normal HTTPS istekleri olarak gizleyebilir ve böylece tespit
          edilmesini ve engellenmesini zorlaştırır. Bu, Çin'de, Büyük Çin
          Güvenlik Duvarı'nın (GFW) trafik filtreleme ve engelleme yöntemlerini
          sürekli olarak güncellediği durumlarda özellikle önemlidir.
        </p>

        <h2 className="text-2xl font-semibold mb-4">FRKN</h2>
        <p className="mb-4">
          XRay ile FRKN VPN'i farklı cihazlarda kullanmak için aşağıdaki
          uygulamalardan birini indirin:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            iPhone, iPad ve Mac için{" "}
            <a
              href="https://apps.apple.com/ru/app/foxray/id6448898396"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              FoXray
            </a>{" "}
            uygulamasını yüklemenizi öneririz.
          </li>
          <li>
            Windows ve Android için{" "}
            <a
              href="https://apps.microsoft.com/detail/9pdfnl3qv2s5"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              Microsoft Store
            </a>{" "}
            veya{" "}
            <a
              href="https://play.google.com/store/apps/details?id=app.hiddify.com"
              className="text-blue-500"
            >
              Google Play
            </a>{" "}
            üzerinden Hiddify uygulamasını yükleyin.
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">XRay</h1>

      <p className="mb-4">
        XRay is an advanced VPN protocol that has gained widespread use for
        bypassing internet censorship in Russia, Iran, and China. The protocol
        is based on V2Ray but features improved performance, new functions, and
        a higher level of security. These qualities allow it to be used under
        strict internet access restrictions.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
      <p className="mb-4">
        Enhanced encryption and high performance. One of the key advantages of
        XRay is the use of the XTLS protocol. This protocol is optimized for
        more efficient data transmission, which speeds up the connection and
        reduces latency. Unlike standard TLS, XTLS saves computational resources
        and improves speed, especially in slow or unstable networks.
      </p>

      <p className="mb-4">
        Flexibility and expandability. XRay supports multiple protocols: VMess,
        VLESS, Shadowsocks, and others. This makes it a versatile tool for
        bypassing censorship. Traffic obfuscation and routing flexibility
        capabilities allow you to configure the VPN for specific needs, ensuring
        a stable connection even under active monitoring and VPN traffic
        blocking.
      </p>

      <p className="mb-4">
        Traffic obfuscation and DPI bypass. In conditions where governments use
        deep packet inspection (DPI) technologies to block VPN traffic, XRay
        provides tools to bypass such restrictions. For example, XRay can
        disguise traffic as regular HTTPS requests, making it difficult to
        detect and block. This is especially important in China, where the Great
        Firewall (GFW) actively updates its traffic filtering and blocking
        methods.
      </p>

      <h2 className="text-2xl font-semibold mb-4">FRKN</h2>
      <p className="mb-4">
        To use FRKN VPN with XRay on various devices, download one of the
        following applications:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          For iPhone, iPad, and Mac, we recommend installing{" "}
          <a
            href="https://apps.apple.com/ru/app/foxray/id6448898396"
            className="text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            FoXray
          </a>
        </li>
        <li>
          For Windows and Android, install the Hiddify app:{" "}
          <a
            href="https://apps.microsoft.com/detail/9pdfnl3qv2s5"
            className="text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            Microsoft Store
          </a>
          ,{" "}
          <a
            href="https://play.google.com/store/apps/details?id=app.hiddify.com"
            className="text-blue-500"
          >
            Google Play
          </a>
        </li>
      </ul>
    </div>
  )
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: {
      title: "XRay: Передовой VPN-протокол",
      description:
        "Узнайте о преимуществах XRay, его использовании для обхода интернет-цензуры и настройке на различных устройствах.",
    },
    en: {
      title: "XRay: Advanced VPN Protocol",
      description:
        "Learn about the advantages of XRay, its use for bypassing internet censorship, and setup on various devices.",
    },
    es: {
      title: "XRay: Protocolo VPN Avanzado",
      description:
        "Conozca las ventajas de XRay, su uso para eludir la censura en internet y la configuración en varios dispositivos.",
    },
    pt: {
      title: "XRay: Protocolo VPN Avançado",
      description:
        "Saiba mais sobre as vantagens do XRay, seu uso para contornar a censura na internet e a configuração em vários dispositivos.",
    },
    fr: {
      title: "XRay: Protocole VPN Avancé",
      description:
        "Découvrez les avantages de XRay, son utilisation pour contourner la censure sur internet et sa configuration sur divers appareils.",
    },
    de: {
      title: "XRay: Fortschrittliches VPN-Protokoll",
      description:
        "Erfahren Sie mehr über die Vorteile von XRay, seine Verwendung zur Umgehung der Internetzensur und die Einrichtung auf verschiedenen Geräten.",
    },
    tr: {
      title: "XRay: Gelişmiş VPN Protokolü",
      description:
        "XRay'in avantajlarını, internet sansürünü aşmak için kullanımını ve çeşitli cihazlarda kurulumunu öğrenin.",
    },
  }[locale]
}
