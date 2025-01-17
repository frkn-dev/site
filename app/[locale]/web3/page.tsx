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
        <h1 className="text-4xl font-bold mb-6">Токенизация</h1>
        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/1.png" alt="Tor" className="w-10" />
          <h2 className="text-2xl font-semibold">Tor через VPN</h2>
        </div>
        <p className="mb-4">
          Удобный доступ к анонимной сети Tor всего одним нажатием поможет
          обойти цензуру и сохранить вашу конфиденциальность.
          <br />С помощью FRKN вам не нужен браузер Tor для доступа к скрытым
          onion-сервисам. Вы можете использовать свой привычный браузер для
          подключения к сети Tor.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/2.png" alt="Домены" className="w-10" />
          <h2 className="text-2xl font-semibold">
            Децентрализированные домены
          </h2>
        </div>
        <p className="mb-4">
          Поддержка децентрализованных доменов ENS и Unstoppable Domains в нашем
          VPN позволит пользователям использовать домены, зарегистрированные на
          блокчейне, что устраняет зависимость от традиционных DNS-систем. Это
          повышает уровень конфиденциальности, делает доступ к сервису более
          устойчивым к цензуре и упрощает процесс подключения.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/3.png" alt="Файловые хранилища" className="w-10" />
          <h2 className="text-2xl font-semibold">
            Децентрализованные файловые хранилища
          </h2>
        </div>
        <p className="mb-4">
          Интеграция децентрализованных файловых хранилищ, таких как IPFS, в наш
          VPN предоставит пользователям возможность получать доступ к контенту,
          который хранится в распределённой сети, без необходимости полагаться
          на центральные серверы. Это увеличивает устойчивость к цензуре,
          улучшает защиту данных и гарантирует доступность файлов, даже если
          некоторые узлы сети становятся недоступными.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/4.png" alt="VPN" className="w-10" />
          <h2 className="text-2xl font-semibold">Децентрализованный VPN</h2>
        </div>
        <p className="mb-4">
          Создание децентрализованной сети VPN-узлов повышает уровень
          безопасности, так как прослушивание и отслеживание активности
          пользователей становится сложнее. Децентрализованный VPN также более
          устойчив к атакам и блокировкам благодаря отсутствию единой точки
          отказа.
          <br />
          Сеть устройств FRKN предложит полностью децентрализованный VPN-сервис
          с несколькими маршрутами и интеллектуальной маршрутизацией,
          обеспечивая неограниченный доступ к контенту без потери скорости. dVPN
          предоставляет все преимущества VPN без централизованного контроля.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/5.png" alt="Пользовательские узлы" className="w-10" />
          <h2 className="text-2xl font-semibold">Пользовательские узлы</h2>
        </div>
        <p className="mb-4">
          Распределенная модель сервиса предложит пользователям множество
          VPN-серверов по всему миру. Каждый желающий сможет запустить ноду и
          стать провайдером VPN, а пользователям остается лишь выбрать ближайшую
          точку доступа. Это значительно увеличивает скорость соединения,
          обеспечит безопасное и приватное подключение к интернету через
          децентрализованные узлы вместо традиционных серверов.
          <br />
          Пользователи смонут получать пассивный доход в токенах за совместное
          использование интернет-инфраструктуры, управляя узлом или покупая
          маршрутизатор и продавая неиспользуемую пропускную способность сети
          FRKN.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/6.png" alt="Портативный интернет" className="w-10" />
          <h2 className="text-2xl font-semibold">Портативный интернет</h2>
        </div>
        <p className="mb-4">
          Разработка портативного устройства для децентрализованного VPN
          обеспечит безопасное и приватное подключение к интернету без
          необходимости использования традиционных серверов. Устройство будет
          предлагать пожизненную подписку без дополнительных платежей. Оно будет
          легко настраиваться по принципу «plug-and-play» и будет подходить как
          для домашнего использования, так и для путешествий.
          <br />
          <br />
        </p>

        <p>
          FRKN будет использовать децентрализованные технологии для фрагментации
          и шифрования данных пользователей, что исключит возможность их
          перехвата третьими лицами.
        </p>
      </div>
    )
  }

  if (locale === "es") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Tokenización</h1>
        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/1.png" alt="Tor" className="w-10" />
          <h2 className="text-2xl font-semibold">Tor a través de VPN</h2>
        </div>
        <p className="mb-4">
          El acceso conveniente a la red anónima Tor con solo un clic ayudará a
          eludir la censura y mantener tu privacidad.
          <br />
          Con FRKN, no necesitas el navegador Tor para acceder a los servicios
          onion ocultos. Puedes usar tu navegador habitual para conectarte a la
          red Tor.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/2.png" alt="Dominios" className="w-10" />
          <h2 className="text-2xl font-semibold">Dominios descentralizados</h2>
        </div>
        <p className="mb-4">
          El soporte para dominios descentralizados ENS y Unstoppable Domains en
          nuestro VPN permitirá a los usuarios utilizar dominios registrados en
          blockchain, eliminando la dependencia de los sistemas DNS
          tradicionales. Esto mejora la privacidad, hace que el acceso al
          servicio sea más resistente a la censura y simplifica el proceso de
          conexión.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img
            src="/web3/3.png"
            alt="Almacenamiento de archivos"
            className="w-10"
          />
          <h2 className="text-2xl font-semibold">
            Almacenamientos de archivos descentralizados
          </h2>
        </div>
        <p className="mb-4">
          La integración de almacenamiento de archivos descentralizados, como
          IPFS, en nuestro VPN permitirá a los usuarios acceder a contenido
          almacenado en una red distribuida sin depender de servidores
          centrales. Esto aumenta la resistencia a la censura, mejora la
          protección de los datos y asegura la disponibilidad de los archivos,
          incluso si algunos nodos de la red se vuelven inaccesibles.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/4.png" alt="VPN" className="w-10" />
          <h2 className="text-2xl font-semibold">VPN descentralizado</h2>
        </div>
        <p className="mb-4">
          Crear una red descentralizada de nodos VPN aumenta la seguridad, ya
          que es más difícil espiar y rastrear la actividad de los usuarios. Un
          VPN descentralizado también es más resistente a los ataques y bloqueos
          debido a la ausencia de un punto único de fallo.
          <br />
          La red de dispositivos FRKN ofrecerá un servicio VPN completamente
          descentralizado con múltiples rutas y enrutamiento inteligente,
          brindando acceso ilimitado al contenido sin pérdida de velocidad. dVPN
          ofrece todas las ventajas del VPN sin control centralizado.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/5.png" alt="Nodos personalizados" className="w-10" />
          <h2 className="text-2xl font-semibold">Nodos personalizados</h2>
        </div>
        <p className="mb-4">
          El modelo distribuido del servicio ofrecerá a los usuarios numerosos
          servidores VPN en todo el mundo. Cualquiera podrá ejecutar un nodo y
          convertirse en proveedor de VPN, y los usuarios solo tendrán que
          elegir el punto de acceso más cercano. Esto aumentará
          significativamente la velocidad de la conexión y proporcionará una
          conexión segura y privada a Internet a través de nodos
          descentralizados en lugar de servidores tradicionales.
          <br />
          Los usuarios podrán recibir ingresos pasivos en tokens por compartir
          infraestructura de Internet, administrando un nodo o comprando un
          enrutador y vendiendo el ancho de banda no utilizado de la red FRKN.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/6.png" alt="Internet portátil" className="w-10" />
          <h2 className="text-2xl font-semibold">Internet portátil</h2>
        </div>
        <p className="mb-4">
          El desarrollo de un dispositivo portátil para VPN descentralizado
          proporcionará una conexión segura y privada a Internet sin necesidad
          de servidores tradicionales. El dispositivo ofrecerá una suscripción
          de por vida sin pagos adicionales. Será fácil de configurar con el
          principio de «plug-and-play» y será adecuado tanto para uso doméstico
          como para viajes.
          <br />
          <br />
        </p>

        <p>
          FRKN utilizará tecnologías descentralizadas para fragmentar y cifrar
          los datos de los usuarios, lo que eliminará la posibilidad de que sean
          interceptados por terceros.
        </p>
      </div>
    )
  }

  if (locale === "pt") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Tokenização</h1>
        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/1.png" alt="Tor" className="w-10" />
          <h2 className="text-2xl font-semibold">Tor via VPN</h2>
        </div>
        <p className="mb-4">
          O acesso conveniente à rede anônima Tor com um único clique ajudará a
          contornar a censura e proteger a sua privacidade.
          <br />
          Com o FRKN, você não precisa do navegador Tor para acessar os serviços
          onion ocultos. Você pode usar o seu navegador usual para se conectar à
          rede Tor.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/2.png" alt="Domínios" className="w-10" />
          <h2 className="text-2xl font-semibold">Domínios descentralizados</h2>
        </div>
        <p className="mb-4">
          O suporte a domínios descentralizados ENS e Unstoppable Domains em
          nosso VPN permitirá que os usuários usem domínios registrados em
          blockchain, eliminando a dependência dos sistemas tradicionais de DNS.
          Isso melhora a privacidade, torna o acesso ao serviço mais resistente
          à censura e simplifica o processo de conexão.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img
            src="/web3/3.png"
            alt="Armazenamento de Arquivos"
            className="w-10"
          />
          <h2 className="text-2xl font-semibold">
            Armazenamento de Arquivos Descentralizados
          </h2>
        </div>
        <p className="mb-4">
          A integração de armazenamento de arquivos descentralizados, como IPFS,
          no nosso VPN permitirá que os usuários acessem conteúdo armazenado em
          uma rede distribuída sem depender de servidores centrais. Isso aumenta
          a resistência à censura, melhora a proteção de dados e garante a
          disponibilidade dos arquivos, mesmo que alguns nós da rede se tornem
          inacessíveis.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/4.png" alt="VPN" className="w-10" />
          <h2 className="text-2xl font-semibold">VPN Descentralizado</h2>
        </div>
        <p className="mb-4">
          Criar uma rede descentralizada de nós VPN aumenta a segurança, pois
          fica mais difícil espionar e rastrear a atividade dos usuários. Um VPN
          descentralizado também é mais resistente a ataques e bloqueios devido
          à ausência de um ponto único de falha.
          <br />A rede de dispositivos FRKN oferecerá um serviço VPN totalmente
          descentralizado com várias rotas e roteamento inteligente, garantindo
          acesso ilimitado ao conteúdo sem perda de velocidade. O dVPN oferece
          todas as vantagens de um VPN sem o controle centralizado.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/5.png" alt="Nós Personalizados" className="w-10" />
          <h2 className="text-2xl font-semibold">Nós Personalizados</h2>
        </div>
        <p className="mb-4">
          O modelo distribuído do serviço oferecerá aos usuários uma grande
          quantidade de servidores VPN ao redor do mundo. Qualquer pessoa pode
          rodar um nó e se tornar um provedor de VPN, e os usuários só precisam
          escolher o ponto de acesso mais próximo. Isso aumentará
          significativamente a velocidade de conexão e proporcionará uma conexão
          segura e privada com a internet através de nós descentralizados em vez
          de servidores tradicionais.
          <br />
          Os usuários poderão receber renda passiva em tokens por compartilhar
          infraestrutura de internet, gerenciando um nó ou comprando um roteador
          e vendendo a largura de banda não utilizada na rede FRKN.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/6.png" alt="Internet Portátil" className="w-10" />
          <h2 className="text-2xl font-semibold">Internet Portátil</h2>
        </div>
        <p className="mb-4">
          O desenvolvimento de um dispositivo portátil para VPN descentralizado
          proporcionará uma conexão segura e privada à internet sem a
          necessidade de servidores tradicionais. O dispositivo oferecerá uma
          assinatura vitalícia sem custos adicionais. Será fácil de configurar
          com o princípio de "plug-and-play" e será adequado tanto para uso
          doméstico quanto para viagens.
          <br />
          <br />
        </p>

        <p>
          O FRKN usará tecnologias descentralizadas para fragmentar e
          criptografar os dados dos usuários, o que eliminará a possibilidade de
          interceptação por terceiros.
        </p>
      </div>
    )
  }

  if (locale === "fr") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Tokenisation</h1>
        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/1.png" alt="Tor" className="w-10" />
          <h2 className="text-2xl font-semibold">Tor via VPN</h2>
        </div>
        <p className="mb-4">
          L'accès pratique au réseau anonyme Tor en un seul clic permettra de
          contourner la censure et de protéger votre confidentialité.
          <br />
          Avec FRKN, vous n'avez pas besoin du navigateur Tor pour accéder aux
          services onion cachés. Vous pouvez utiliser votre navigateur habituel
          pour vous connecter au réseau Tor.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/2.png" alt="Domaines" className="w-10" />
          <h2 className="text-2xl font-semibold">Domaines décentralisés</h2>
        </div>
        <p className="mb-4">
          La prise en charge des domaines décentralisés ENS et Unstoppable
          Domains dans notre VPN permettra aux utilisateurs d'utiliser des
          domaines enregistrés sur la blockchain, supprimant ainsi la dépendance
          aux systèmes DNS traditionnels. Cela améliore la confidentialité, rend
          l'accès au service plus résistant à la censure et simplifie le
          processus de connexion.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/3.png" alt="Stockage de fichiers" className="w-10" />
          <h2 className="text-2xl font-semibold">
            Stockage de fichiers décentralisés
          </h2>
        </div>
        <p className="mb-4">
          L'intégration de stockages de fichiers décentralisés, tels qu'IPFS,
          dans notre VPN permettra aux utilisateurs d'accéder à du contenu
          stocké dans un réseau distribué sans avoir à dépendre des serveurs
          centraux. Cela renforce la résistance à la censure, améliore la
          protection des données et garantit la disponibilité des fichiers, même
          si certains nœuds du réseau deviennent inaccessibles.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/4.png" alt="VPN" className="w-10" />
          <h2 className="text-2xl font-semibold">VPN décentralisé</h2>
        </div>
        <p className="mb-4">
          Créer un réseau décentralisé de nœuds VPN renforce la sécurité, car
          l'écoute et le suivi des activités des utilisateurs deviennent plus
          difficiles. Un VPN décentralisé est également plus résistant aux
          attaques et aux blocages grâce à l'absence de point de défaillance
          unique.
          <br />
          Le réseau d'appareils FRKN proposera un service VPN totalement
          décentralisé avec plusieurs itinéraires et un routage intelligent,
          offrant un accès illimité au contenu sans perte de vitesse. dVPN offre
          tous les avantages du VPN sans contrôle centralisé.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/5.png" alt="Nœuds personnalisés" className="w-10" />
          <h2 className="text-2xl font-semibold">Nœuds personnalisés</h2>
        </div>
        <p className="mb-4">
          Le modèle distribué du service offrira aux utilisateurs de nombreux
          serveurs VPN dans le monde entier. Tout le monde pourra exécuter un
          nœud et devenir fournisseur de VPN, et les utilisateurs n'auront plus
          qu'à choisir le point d'accès le plus proche. Cela augmentera
          considérablement la vitesse de connexion et offrira une connexion
          sécurisée et privée à Internet via des nœuds décentralisés au lieu de
          serveurs traditionnels.
          <br />
          Les utilisateurs pourront gagner des revenus passifs en tokens en
          partageant l'infrastructure Internet, en gérant un nœud ou en achetant
          un routeur et en vendant la bande passante inutilisée du réseau FRKN.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/6.png" alt="Internet portable" className="w-10" />
          <h2 className="text-2xl font-semibold">Internet portable</h2>
        </div>
        <p className="mb-4">
          Le développement d'un appareil portable pour VPN décentralisé fournira
          une connexion sécurisée et privée à Internet sans avoir besoin de
          serveurs traditionnels. L'appareil offrira un abonnement à vie sans
          paiements supplémentaires. Il sera facile à configurer selon le
          principe "plug-and-play" et sera adapté aussi bien pour un usage
          domestique que pour les voyages.
          <br />
          <br />
        </p>

        <p>
          FRKN utilisera des technologies décentralisées pour fragmenter et
          chiffrer les données des utilisateurs, ce qui éliminera la possibilité
          d'interception par des tiers.
        </p>
      </div>
    )
  }

  if (locale === "de") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Tokenisierung</h1>
        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/1.png" alt="Tor" className="w-10" />
          <h2 className="text-2xl font-semibold">Tor über VPN</h2>
        </div>
        <p className="mb-4">
          Der bequeme Zugang zum anonymen Tor-Netzwerk mit nur einem Klick
          hilft, Zensur zu umgehen und Ihre Privatsphäre zu wahren.
          <br />
          Mit FRKN benötigen Sie keinen Tor-Browser, um auf versteckte
          Onion-Dienste zuzugreifen. Sie können Ihren gewohnten Browser
          verwenden, um mit dem Tor-Netzwerk zu verbinden.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/2.png" alt="Domains" className="w-10" />
          <h2 className="text-2xl font-semibold">Dezentrale Domains</h2>
        </div>
        <p className="mb-4">
          Die Unterstützung von dezentralen Domains wie ENS und Unstoppable
          Domains in unserem VPN ermöglicht es Nutzern, Domains zu verwenden,
          die auf der Blockchain registriert sind, wodurch die Abhängigkeit von
          traditionellen DNS-Systemen entfällt. Dies erhöht die Privatsphäre,
          macht den Zugang widerstandsfähiger gegen Zensur und vereinfacht den
          Verbindungsprozess.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/3.png" alt="Dateispeicher" className="w-10" />
          <h2 className="text-2xl font-semibold">Dezentrale Dateispeicher</h2>
        </div>
        <p className="mb-4">
          Die Integration dezentraler Dateispeicher wie IPFS in unser VPN
          ermöglicht es den Nutzern, auf Inhalte zuzugreifen, die in einem
          verteilten Netzwerk gespeichert sind, ohne auf zentrale Server
          angewiesen zu sein. Dies erhöht die Widerstandsfähigkeit gegen Zensur,
          verbessert den Datenschutz und gewährleistet die Verfügbarkeit von
          Dateien, auch wenn einige Knoten des Netzwerks nicht erreichbar sind.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/4.png" alt="VPN" className="w-10" />
          <h2 className="text-2xl font-semibold">Dezentrales VPN</h2>
        </div>
        <p className="mb-4">
          Der Aufbau eines dezentralen VPN-Knotennetzwerks erhöht die
          Sicherheit, da das Abhören und Nachverfolgen von Nutzeraktivitäten
          schwieriger wird. Ein dezentrales VPN ist auch widerstandsfähiger
          gegenüber Angriffen und Blockaden, da es keine einzelne Fehlerquelle
          gibt.
          <br />
          Das FRKN-Netzwerk von Geräten wird einen vollständig dezentralen
          VPN-Service mit mehreren Routen und intelligenter Routenwahl anbieten,
          der uneingeschränkten Zugang zu Inhalten ohne Geschwindigkeitsverlust
          bietet. dVPN bietet alle Vorteile eines VPN ohne zentralisierte
          Kontrolle.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/5.png" alt="Benutzerknoten" className="w-10" />
          <h2 className="text-2xl font-semibold">Benutzerknoten</h2>
        </div>
        <p className="mb-4">
          Das verteilte Modell des Dienstes bietet den Nutzern viele VPN-Server
          weltweit. Jeder kann einen Knoten starten und VPN-Anbieter werden,
          während die Nutzer nur den nächsten Zugangspunkt wählen müssen. Dies
          erhöht die Verbindungsgeschwindigkeit erheblich und sorgt für eine
          sichere und private Internetverbindung über dezentrale Knoten anstelle
          von traditionellen Servern.
          <br />
          Nutzer können passives Einkommen in Token verdienen, indem sie
          Internetinfrastruktur gemeinsam nutzen, einen Knoten verwalten oder
          einen Router kaufen und die nicht genutzte Bandbreite des
          FRKN-Netzwerks verkaufen.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/6.png" alt="Portables Internet" className="w-10" />
          <h2 className="text-2xl font-semibold">Portables Internet</h2>
        </div>
        <p className="mb-4">
          Die Entwicklung eines tragbaren Geräts für dezentrales VPN wird eine
          sichere und private Internetverbindung bieten, ohne auf traditionelle
          Server angewiesen zu sein. Das Gerät wird ein lebenslanges Abonnement
          ohne zusätzliche Gebühren anbieten und wird einfach im
          Plug-and-Play-Prinzip konfiguriert werden können, sowohl für den
          Heimgebrauch als auch für Reisen.
          <br />
          <br />
        </p>

        <p>
          FRKN wird dezentrale Technologien zur Fragmentierung und
          Verschlüsselung der Nutzerdaten verwenden, wodurch ein Abfangen durch
          Dritte unmöglich wird.
        </p>
      </div>
    )
  }

  if (locale === "tr") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Tokenizasyon</h1>
        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/1.png" alt="Tor" className="w-10" />
          <h2 className="text-2xl font-semibold">VPN Üzerinden Tor</h2>
        </div>
        <p className="mb-4">
          Tek bir tıklama ile anonim Tor ağına erişim, sansürü aşmanıza ve
          gizliliğinizi korumanıza yardımcı olur.
          <br />
          FRKN ile Tor tarayıcısına ihtiyacınız yok, gizli Onion servislerine
          erişim sağlamak için normal tarayıcınızı kullanabilirsiniz.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/2.png" alt="Domainler" className="w-10" />
          <h2 className="text-2xl font-semibold">Merkeziyetsiz Domainler</h2>
        </div>
        <p className="mb-4">
          VPN'imizdeki merkeziyetsiz domainler ENS ve Unstoppable Domains
          desteği, kullanıcıların blockchain üzerinde kaydedilmiş domainleri
          kullanmalarını sağlar, bu da geleneksel DNS sistemlerine olan
          bağımlılığı ortadan kaldırır. Bu, gizliliği artırır, sansüre karşı
          dayanıklılığı arttırır ve bağlantı sürecini kolaylaştırır.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/3.png" alt="Dosya Depolama" className="w-10" />
          <h2 className="text-2xl font-semibold">
            Merkeziyetsiz Dosya Depoları
          </h2>
        </div>
        <p className="mb-4">
          IPFS gibi merkeziyetsiz dosya depolarının VPN'imize entegrasyonu,
          kullanıcıların merkezi sunuculara ihtiyaç duymadan dağıtık ağda
          depolanan içeriklere erişmelerine olanak tanır. Bu, sansüre karşı
          dayanıklılığı artırır, veri korumasını geliştirir ve bazı ağ düğümleri
          erişilemez hale gelse bile dosyaların erişilebilirliğini garanti eder.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/4.png" alt="VPN" className="w-10" />
          <h2 className="text-2xl font-semibold">Merkeziyetsiz VPN</h2>
        </div>
        <p className="mb-4">
          Merkeziyetsiz bir VPN düğüm ağı kurmak, kullanıcı aktivitelerinin
          dinlenmesi ve izlenmesinin zorlaşması nedeniyle güvenliği artırır.
          Merkeziyetsiz VPN ayrıca tek bir arıza noktası olmadığı için
          saldırılara ve engellemeye karşı daha dayanıklıdır.
          <br />
          FRKN cihaz ağı, birden fazla yol ve akıllı yönlendirme ile tam
          merkeziyetsiz bir VPN hizmeti sunacak ve hız kaybı olmadan içeriğe
          sınırsız erişim sağlayacaktır. dVPN, merkeziyetsiz kontrol olmadan
          VPN'nin tüm avantajlarını sunar.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/5.png" alt="Kullanıcı Düğümleri" className="w-10" />
          <h2 className="text-2xl font-semibold">Kullanıcı Düğümleri</h2>
        </div>
        <p className="mb-4">
          Hizmetin dağıtık modeli, kullanıcılarına dünya çapında birçok VPN
          sunucusu sunacaktır. Herkes bir düğüm başlatarak VPN sağlayıcısı
          olabilir ve kullanıcılar sadece en yakın erişim noktasını seçmek
          zorunda kalır. Bu, bağlantı hızını önemli ölçüde artırır ve geleneksel
          sunucular yerine merkeziyetsiz düğümler üzerinden güvenli ve özel bir
          internet bağlantısı sağlar.
          <br />
          Kullanıcılar, internet altyapısını ortaklaşa kullanarak, bir düğüm
          yöneterek veya bir yönlendirici satın alıp FRKN ağının kullanılmayan
          bant genişliğini satarak tokenlerle pasif gelir elde edebilirler.
        </p>

        <div className="flex gap-3 items-center lg:items-end mb-4">
          <img src="/web3/6.png" alt="Taşınabilir İnternet" className="w-10" />
          <h2 className="text-2xl font-semibold">Taşınabilir İnternet</h2>
        </div>
        <p className="mb-4">
          Merkeziyetsiz VPN için taşınabilir bir cihaz geliştirilmesi,
          geleneksel sunuculara ihtiyaç duymadan güvenli ve özel internet
          bağlantısı sağlayacaktır. Cihaz, ek ücretler olmadan ömür boyu
          abonelik sunacak ve "tak ve çalıştır" prensibiyle kolayca
          yapılandırılacaktır, hem evde kullanım hem de seyahat için uygundur.
          <br />
          <br />
        </p>

        <p>
          FRKN, kullanıcı verilerini parçalama ve şifreleme için merkeziyetsiz
          teknolojiler kullanacak, bu da üçüncü şahısların veri yakalamasını
          imkansız hale getirecektir.
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Tokenization</h1>
      <div className="flex gap-3 items-center lg:items-end mb-4">
        <img src="/web3/1.png" alt="Tor" className="w-10" />
        <h2 className="text-2xl font-semibold">Tor through VPN</h2>
      </div>
      <p className="mb-4">
        Convenient access to the anonymous Tor network with just one click helps
        bypass censorship and maintain your privacy.
        <br />
        With FRKN, you don't need the Tor browser to access hidden
        onion-services. You can use your regular browser to connect to the Tor
        network.
      </p>
      <div className="flex gap-3 items-center lg:items-end mb-4">
        <img src="/web3/2.png" alt="Domains" className="w-10" />
        <h2 className="text-2xl font-semibold">Decentralized Domains</h2>
      </div>
      <p className="mb-4">
        Support for decentralized domains ENS and Unstoppable Domains in our VPN
        allows users to use domains registered on the blockchain, eliminating
        reliance on traditional DNS systems. This enhances privacy, makes access
        to the service more resistant to censorship, and simplifies the
        connection process.
      </p>
      <div className="flex gap-3 items-center lg:items-end mb-4">
        <img src="/web3/3.png" alt="File Storage" className="w-10" />
        <h2 className="text-2xl font-semibold">Decentralized File Storage</h2>
      </div>
      <p className="mb-4">
        Integration of decentralized file storages, such as IPFS, into our VPN
        will provide users with the ability to access content stored in a
        distributed network without relying on central servers. This increases
        resistance to censorship, enhances data protection, and ensures file
        availability even if some network nodes become unavailable.
      </p>
      <div className="flex gap-3 items-center lg:items-end mb-4">
        <img src="/web3/4.png" alt="VPN" className="w-10" />
        <h2 className="text-2xl font-semibold">Decentralized VPN</h2>
      </div>
      <p className="mb-4">
        Creating a decentralized network of VPN nodes enhances security, as
        eavesdropping and tracking user activity become more complex. A
        decentralized VPN is also more resistant to attacks and blockages due to
        the absence of a single point of failure.
        <br />
        The FRKN device network will offer a fully decentralized VPN service
        with multiple routes and intelligent routing, providing unlimited
        content access without speed loss. dVPN offers all the advantages of a
        VPN without centralized control.
      </p>
      <div className="flex gap-3 items-center lg:items-end mb-4">
        <img src="/web3/5.png" alt="User Nodes" className="w-10" />
        <h2 className="text-2xl font-semibold">User Nodes</h2>
      </div>
      <p className="mb-4">
        A distributed service model will offer users numerous VPN servers
        worldwide. Anyone can run a node and become a VPN provider, and users
        simply need to choose the nearest access point. This significantly
        increases connection speed, ensures secure and private internet
        connection through decentralized nodes instead of traditional servers.
        <br />
        Users can earn passive income in tokens by sharing internet
        infrastructure, managing a node, purchasing a router, and selling unused
        bandwidth in the FRKN network.
      </p>
      <div className="flex gap-3 items-center lg:items-end mb-4">
        <img src="/web3/6.png" alt="Portable Internet" className="w-10" />
        <h2 className="text-2xl font-semibold">Portable Internet</h2>
      </div>
      <p className="mb-4">
        Developing a portable device for decentralized VPN will ensure secure
        and private internet connection without the need for traditional
        servers. The device will offer a lifetime subscription with no
        additional payments. It will be easy to set up using a "plug-and-play"
        principle and will be suitable for both home use and travel.
        <br />
        <br />
      </p>
      <p>
        FRKN will use decentralized technologies to fragment and encrypt user
        data, eliminating the possibility of interception by third parties.
      </p>
    </div>
  )
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: {
      title: "Токенизация: На пути к децентрализации",
      description:
        "VPN-сервис на пути к децентрализации, обеспечивающий защиту вашей приватности и безопасности, открывая возможности для децентрализованного интернета.",
    },
    en: {
      title: "Tokenization: On the Path to Decentralization",
      description:
        "VPN service on the path to decentralization, offering enhanced privacy and security while embracing the future of a decentralized internet.",
    },
    es: {
      title: "Tokenización: En el camino hacia la descentralización",
      description:
        "Servicio VPN en el camino hacia la descentralización, ofreciendo mayor privacidad y seguridad mientras se abraza el futuro de un internet descentralizado.",
    },
    pt: {
      title: "Tokenização: No Caminho para a Descentralização",
      description:
        "Serviço VPN no caminho para a descentralização, oferecendo maior privacidade e segurança enquanto abraça o futuro de uma internet descentralizada.",
    },
    fr: {
      title: "Tokenisation : Sur le chemin de la décentralisation",
      description:
        "Service VPN sur le chemin de la décentralisation, offrant une confidentialité et une sécurité accrues tout en embrassant l'avenir d'un internet décentralisé.",
    },
    de: {
      title: "Tokenisierung: Auf dem Weg zur Dezentralisierung",
      description:
        "VPN-Dienst auf dem Weg zur Dezentralisierung, der verbesserte Privatsphäre und Sicherheit bietet und die Zukunft eines dezentralisierten Internets begrüßt.",
    },
    tr: {
      title: "Tokenizasyon: Merkeziyetsizliğe Giden Yolda",
      description:
        "Merkeziyetsizliğe giden yolda VPN hizmeti, gelişmiş gizlilik ve güvenlik sunarken merkeziyetsiz bir internetin geleceğini kucaklıyor.",
    },
  }[locale]
}
