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
        <h1 className="text-4xl font-bold mb-6">FAQ</h1>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Q: Чем XRay лучше Shadowsocks (Outline)?
          </h2>
          <p>
            A: XRay создан специально для обхода блокировок, протокол маскирует
            трафик под легальный контент и таким образом обманывает системы
            обнаружения. XRay работает в России, Китае и Иране.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Q: Есть ли ограничения?</h2>
          <p>
            A: На платной версии нет ограничений ни по трафику, ни по количеству
            устройств, можно делиться с родственниками и друзьями.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Q: Можно ли оплатить российской картой?
          </h2>
          <p>A: Да, можно оплатить российской картой или по СБП.</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Q: Возможно ли установить XRay на роутер?
          </h2>
          <p>
            A: К сожалению, XRay работает на ограниченном количестве устройств.
            Если роутер поддерживает прошивку dd-wrt, то это возможно.{" "}
            <a
              href="https://wiki.dd-wrt.com/wiki/index.php/Supported_Devices"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Список роутеров
            </a>
            .
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Q: Плохо работает WhatsApp</h2>
          <p>
            A: В настройках клиента нужно отключить IPv6 и оставить только IPv4.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Q: Как оплатить?</h2>
          <p>A: Перейти по ссылке "Цена" и нажать "Оплатить".</p>
        </div>
      </div>
    )
  }

  if (locale === "es") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Preguntas Frecuentes</h1>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            P: ¿Cómo es XRay mejor que Shadowsocks (Outline)?
          </h2>
          <p>
            R: XRay está diseñado específicamente para evitar bloqueos, el
            protocolo disfraza el tráfico como contenido legítimo y engaña los
            sistemas de detección. XRay funciona en Rusia, China e Irán.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">P: ¿Hay limitaciones?</h2>
          <p>
            R: La versión de pago no tiene limitaciones de tráfico ni de
            dispositivos, puedes compartirla con tu familia y amigos.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            P: ¿Es posible instalar XRay en un enrutador?
          </h2>
          <p>
            R: Lamentablemente, XRay solo funciona en un número limitado de
            dispositivos. Si el enrutador soporta el firmware dd-wrt, es
            posible.{" "}
            <a
              href="https://wiki.dd-wrt.com/wiki/index.php/Supported_Devices"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lista de enrutadores
            </a>
            .
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            P: WhatsApp no funciona bien
          </h2>
          <p>
            R: En la configuración del cliente, debes desactivar IPv6 y dejar
            solo IPv4.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">P: ¿Cómo pagar?</h2>
          <p> R: Ve al enlace "Precios" y haz clic en "Pagar". </p>
        </div>
      </div>
    )
  }

  if (locale === "pt") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Perguntas Frequentes</h1>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            P: Como o XRay é melhor que o Shadowsocks (Outline)?
          </h2>
          <p>
            R: O XRay é projetado especificamente para contornar bloqueios, o
            protocolo disfarça o tráfego como conteúdo legítimo e engana os
            sistemas de detecção. O XRay funciona na Rússia, China e Irã.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">P: Existem limitações?</h2>
          <p>
            R: A versão paga não tem limitações de tráfego ou número de
            dispositivos, você pode compartilhar com sua família e amigos.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            P: É possível instalar o XRay em um roteador?
          </h2>
          <p>
            R: Infelizmente, o XRay funciona em um número limitado de
            dispositivos. Se o roteador suportar o firmware dd-wrt, é possível.{" "}
            <a
              href="https://wiki.dd-wrt.com/wiki/index.php/Supported_Devices"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lista de roteadores
            </a>
            .
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            P: O WhatsApp não funciona bem
          </h2>
          <p>
            R: Nas configurações do cliente, você deve desativar o IPv6 e deixar
            apenas o IPv4.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">P: Como pagar?</h2>
          <p> R: Vá para o link "Preços" e clique em "Pagar". </p>
        </div>
      </div>
    )
  }

  if (locale === "fr") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">
          Questions Fréquemment Posées
        </h1>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Q: Comment XRay est-il meilleur que Shadowsocks (Outline) ?
          </h2>
          <p>
            R: XRay est conçu spécifiquement pour contourner les blocages, le
            protocole déguisant le trafic en contenu légitime et trompant ainsi
            les systèmes de détection. XRay fonctionne en Russie, Chine et Iran.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Q: Y a-t-il des limitations ?
          </h2>
          <p>
            R: La version payante n'a aucune limitation concernant le trafic ou
            le nombre d'appareils, vous pouvez la partager avec votre famille et
            vos amis.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Q: Est-il possible d'installer XRay sur un routeur ?
          </h2>
          <p>
            R: Malheureusement, XRay fonctionne sur un nombre limité
            d'appareils. Si le routeur prend en charge le firmware dd-wrt, cela
            est possible.{" "}
            <a
              href="https://wiki.dd-wrt.com/wiki/index.php/Supported_Devices"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Liste des routeurs
            </a>
            .
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Q: WhatsApp fonctionne mal</h2>
          <p>
            R: Dans les paramètres du client, vous devez désactiver l'IPv6 et ne
            laisser que l'IPv4.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Q: Comment payer ?</h2>
          <p> R: Allez sur le lien "Prix" et cliquez sur "Payer". </p>
        </div>
      </div>
    )
  }

  if (locale === "de") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Häufig gestellte Fragen</h1>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            F: Wie ist XRay besser als Shadowsocks (Outline)?
          </h2>
          <p>
            A: XRay wurde speziell entwickelt, um Blockaden zu umgehen, das
            Protokoll tarnt den Datenverkehr als legitimen Inhalt und täuscht so
            Erkennungssysteme. XRay funktioniert in Russland, China und dem
            Iran.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">F: Gibt es Einschränkungen?</h2>
          <p>
            A: Die kostenpflichtige Version hat keine Einschränkungen
            hinsichtlich des Datenverkehrs oder der Anzahl der Geräte. Sie
            können sie mit Familie und Freunden teilen.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            F: Kann man XRay auf einem Router installieren?
          </h2>
          <p>
            A: Leider funktioniert XRay nur auf einer begrenzten Anzahl von
            Geräten. Wenn der Router die dd-wrt-Firmware unterstützt, ist dies
            möglich.{" "}
            <a
              href="https://wiki.dd-wrt.com/wiki/index.php/Supported_Devices"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Liste der unterstützten Router
            </a>
            .
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            F: WhatsApp funktioniert schlecht
          </h2>
          <p>
            A: In den Einstellungen des Clients müssen Sie IPv6 deaktivieren und
            nur IPv4 aktiv lassen.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">F: Wie kann ich bezahlen?</h2>
          <p>
            {" "}
            A: Gehen Sie zum Link "Preise" und klicken Sie auf "Bezahlen".{" "}
          </p>
        </div>
      </div>
    )
  }

  if (locale === "tr") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">SSS</h1>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            S: XRay, Shadowsocks'tan (Outline) nasıl daha iyi?
          </h2>
          <p>
            C: XRay, blokajları aşmak için özel olarak tasarlanmıştır, protokol
            trafiği geçerli içerik olarak gizler ve böylece tespit sistemlerini
            kandırır. XRay, Rusya, Çin ve İran'da çalışır.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            S: Herhangi bir sınırlama var mı?
          </h2>
          <p>
            C: Ücretli versiyonun trafik veya cihaz sayısı üzerinde herhangi bir
            sınırlaması yoktur, aileniz ve arkadaşlarınızla paylaşabilirsiniz.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            S: XRay'i bir yönlendiriciye kurmak mümkün mü?
          </h2>
          <p>
            C: Maalesef, XRay yalnızca sınırlı sayıda cihazda çalışır.
            Yönlendirici dd-wrt yazılımını destekliyorsa, kurulum mümkündür.{" "}
            <a
              href="https://wiki.dd-wrt.com/wiki/index.php/Supported_Devices"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yönlendirici listesi
            </a>
            .
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">S: WhatsApp kötü çalışıyor</h2>
          <p>
            C: Müşteri ayarlarında, IPv6'yı devre dışı bırakıp sadece IPv4'ü
            bırakmanız gerekir.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">S: Nasıl ödeme yapabilirim?</h2>
          <p> C: "Fiyat" bağlantısına gidin ve "Öde"ye tıklayın. </p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">FAQ</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">
          Q: How is XRay better than Shadowsocks (Outline)?
        </h2>
        <p>
          A: XRay is specifically designed to bypass blocks, the protocol
          disguises traffic as legitimate content and thus deceives detection
          systems. XRay works in Russia, China, and Iran.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Q: Are there any limitations?</h2>
        <p>
          A: The paid version has no limitations on traffic or the number of
          devices, you can share it with family and friends.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">
          Q: Is it possible to install XRay on a router?
        </h2>
        <p>
          A: Unfortunately, XRay works on a limited number of devices. If the
          router supports dd-wrt firmware, then it is possible.{" "}
          <a
            href="https://wiki.dd-wrt.com/wiki/index.php/Supported_Devices"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            List of routers
          </a>
          .
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Q: WhatsApp works poorly</h2>
        <p>
          A: In the client settings, you need to disable IPv6 and leave only
          IPv4.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Q: How to pay?</h2>
        <p>A: Go to the "Price" link and click "Pay".</p>
      </div>
    </div>
  )
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: { title: "Часто задаваемые вопросы – FRKN VPN" },
    en: { title: "Frequently Asked Questions – FRKN VPN" },
    es: { title: "Preguntas Frecuentes – FRKN VPN" },
    pt: { title: "Perguntas Frequentes – FRKN VPN" },
    fr: { title: "Questions Fréquemment Posées – FRKN VPN" },
    de: { title: "Häufig Gestellte Fragen – FRKN VPN" },
    tr: { title: "Sıkça Sorulan Sorular – FRKN VPN" },
  }[locale]
}
