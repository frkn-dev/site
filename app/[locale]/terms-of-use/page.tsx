import { getStaticParams } from "@/shared/locales/server"
import type { Props } from "@/shared/locales/server"
import { setStaticParamsLocale } from "next-international/server"

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)

  if (locale === "en") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

        <p className="text-sm text-gray-600 mb-6">
          Last updated: August 23, 2024
        </p>

        <p className="mb-4">
          By using or paying for the FRKN VPN service provided by FRKN LLP, you
          agree to these terms. Any significant changes to these terms will be
          notified through a prominent announcement on frkn.org/blog at least
          one month before they take effect. If you wish to exercise your right
          to opt out of such changes, you must stop using the service (for
          refunds, see below).
        </p>
        <p className="mb-4">
          The user agrees that the English version of the agreement takes
          precedence in case of discrepancies with translations into other
          languages.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Service</h2>
        <p className="mb-4">
          The VPN service protects personal information through encryption and
          conceals user metadata by replacing their IP address with one of ours.
          This replacement address is used by many other users, which not only
          protects each user's data but also hides their activity pattern. Thus,
          the traceable chain between users and their online activity is broken.
        </p>
        <p className="mb-4">
          We do not block or filter domains, except when requested by the IP
          address owner or when known botnet addresses cause our servers to be
          blocked by hosting providers. We intercept DNS requests (port 53) to
          prevent DNS leaks.
        </p>
        <p className="mb-4">
          We do not modify, redirect, or inject data into user traffic.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Service Access</h2>
        <p className="mb-4">
          To use the service, you need to use an FRKN account number along with
          the FRKN VPN application or with another WireGuard, XRay, or OpenVPN
          client and our downloadable configuration files.
        </p>
        <p className="mb-4">
          We are not the developer, owner, or provider of third-party
          applications used to connect to the service (WireGuard, XRay,
          OpenVPN). We are not responsible for the operation, functionality,
          security, or compatibility of these applications.
        </p>
        <p className="mb-4">
          One account can be used on 5 devices. You are prohibited from using
          this service to provide a service similar to that provided by FRKN, or
          other services where VPN constitutes a significant part of the
          service.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Security</h2>
        <p className="mb-4">
          The user undertakes to independently take appropriate measures to
          ensure the security of their device and prevent unauthorized access by
          third parties.
        </p>
        <p className="mb-4">
          The user agrees to use the service and website only for lawful
          purposes and by lawful means, taking into account local legislation.
        </p>
        <p className="mb-4">
          The user is responsible for the safekeeping of the data required to
          connect to the service. In case of their loss or compromise, the user
          must immediately notify the administration.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Payment</h2>
        <p className="mb-4">
          We accept cryptocurrency, credit cards, iOS/Android in-app purchases,
          vouchers, and cash USD. The price may vary when purchased through the
          App Store or an official reseller. The service is activated as soon as
          the payment is credited, and time will start counting. These terms
          expire at the end of the paid period.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
        <p className="mb-4">
          We offer users a 30-day money-back guarantee. The 30-day period starts
          from the moment of payment. If you have complaints about the service
          after this period, the remaining time may be refunded. Please contact{" "}
          <a
            href="mailto:mail@frkn.org"
            className="text-blue-600 hover:underline"
          >
            mail@frkn.org
          </a>
        </p>
        <p className="mb-4">
          We do not offer refunds for cash payments. Refund requests for
          purchases made through the App Store or reseller must be directed to
          them directly.
        </p>
        <p className="mb-4">
          In the case of refunds for purchases made in cryptocurrency, the
          refund will be made to the same cryptocurrency wallet from which the
          payment was made.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
        <p className="mb-4">
          We want you to remain anonymous when using our service, so our policy
          is to never store activity logs or metadata and minimize data storage.
        </p>
        <p className="mb-4">
          However, when paying by bank transfer and Stripe, your bank and
          payment providers will process your personal data as controllers of
          such processing. You can read more about payment providers on their
          websites.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
        <p className="mb-4">
          FRKN VPN reserves the right to modify the service by updating the
          software or making changes to certain features. We will try to prevent
          interruptions and defects in the operation of the service and on our
          website. Despite our efforts, the service is provided on an "as is"
          and "as available" basis, and we do not guarantee that the service
          will be available at any time, nor the accuracy of the service or any
          material provided by the service or on the FRKN website. You are fully
          responsible for the use of the service.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2">FRKN LLP</p>
        <p className="mb-2">Reg. number OC453122</p>
        <p className="mb-4">
          Address: 111 Fulham Palace Road, London, United Kingdom, W6 8JA
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Условия использования</h1>

      <p className="text-sm text-gray-600 mb-6">
        Последнее обновление: 23 августа 2024 г.
      </p>

      <p className="mb-4">
        Используя или оплачивая сервис FRKN VPN от компании FRKN LLP, вы
        соглашаетесь с этими условиями. Любые значительные изменения этих
        условий будут уведомлены посредством заметного объявления на
        frkn.org/blog как минимум за один месяц до их вступления в силу. Если вы
        хотите воспользоваться правом отказаться от таких изменений, вы должны
        прекратить использование сервиса (для возвратов см. ниже).
      </p>
      <p className="mb-4">
        Пользователь соглашается, что версия соглашения на английском языке
        имеет преимущество в случае расхождений с переводами на другие языки.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Сервис</h2>
      <p className="mb-4">
        VPN-сервис защищает личную информацию с помощью шифрования и скрывает
        метаданные пользователя, заменяя его IP-адрес на один из наших. Этот
        заменяющий адрес используется многими другими пользователями, что не
        только защищает данные каждого пользователя, но и скрывает его или ее
        паттерн активности. Таким образом, разрывается прослеживаемая цепочка
        между пользователями и их онлайн-активностью.
      </p>
      <p className="mb-4">
        Мы не блокируем и не фильтруем домены, за исключением случаев, когда это
        запрашивается владельцем IP-адреса или когда известные адреса ботнетов
        приводят к тому, что наши серверы блокируются хостинг-провайдерами. Мы
        перехватываем DNS-запросы (порт 53) для предотвращения утечек DNS.
      </p>
      <p className="mb-4">
        Мы не изменяем, не перенаправляем и не внедряем данные в трафик
        пользователей.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Доступ к сервису</h2>
      <p className="mb-4">
        Для использования сервиса вам нужно использовать номер аккаунта FRKN
        вместе с приложением FRKN VPN или с другим клиентом WireGuard, XRay или
        OpenVPN и нашими загружаемыми конфигурационными файлами.
      </p>
      <p className="mb-4">
        Мы не является разработчиком, владельцем или поставщиком сторонних
        приложений, которые используется для подключения к сервису (WireGuard,
        XRay, OpenVPN). Мы не несем ответственности за работу, функциональность,
        безопасность или совместимость этих приложений.
      </p>
      <p className="mb-4">
        Один аккаунт можно использовать на 5 устройствах. Вам запрещено
        использовать этот сервис для предоставления сервиса, аналогичного тому,
        который предоставляется FRKN, или других сервисов, где VPN составляет
        значительную часть сервиса.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Безопасность</h2>
      <p className="mb-4">
        Пользователь обязуется самостоятельно предпринимать должные меры,
        обеспечивающие безопасность его устройства и предотвращающие
        несанкционированный доступ к нему третьих лиц.
      </p>
      <p className="mb-4">
        Пользователь обязуется использовать сервис и сайт только для законных
        целей и законными способами с учетом местного законодательства.
      </p>
      <p className="mb-4">
        Пользователь несет ответственность за сохранность данных для подключения
        к сервису. В случае их утраты или компрометации, пользователь обязан
        незамедлительно уведомить администрацию.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Оплата</h2>
      <p className="mb-4">
        Мы принимаем криптовалютой, кредитными картами, покупками в приложении
        iOS/Android, ваучерами и наличными USD. Цена может варьироваться при
        покупке через App Store или официального реселлера. Сервис активируется,
        как только платеж будет зачислен, и время начнет отсчитываться. Эти
        условия истекают в конце оплаченного периода.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Политика возвратов</h2>
      <p className="mb-4">
        Мы предлагаем пользователям 30-дневную гарантию возврата денег.
        30-дневный период начинается с момента оплаты. Если у вас есть жалобы на
        сервис после этого периода, оставшееся время может быть возмещено.
        Пожалуйста, свяжитесь с{" "}
        <a
          href="mailto:mail@frkn.org"
          className="text-blue-600 hover:underline"
        >
          mail@frkn.org
        </a>
      </p>
      <p className="mb-4">
        Мы не предлагаем возвраты для наличных платежей. Запросы на возврат
        средств за покупки, совершенные через App Store или реселлера, должны
        быть направлены непосредственно к ним.
      </p>
      <p className="mb-4">
        В случае возврата средств за покупки, произведенные в криптовалюте,
        возврат будет осуществляться на тот же криптовалютный кошелек, с
        которого был совершен платеж.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Конфиденциальность</h2>
      <p className="mb-4">
        Мы хотим, чтобы вы оставались анонимными при использовании нашего
        сервиса, поэтому наша политика заключается в том, чтобы никогда не
        хранить журналы активности или метаданные и свести к минимуму хранение
        данных.
      </p>
      <p className="mb-4">
        Однако при оплате банковским переводом и Stripe, ваш банк и платежные
        провайдеры будут обрабатывать ваши персональные данные в качестве
        контролеров такой обработки. Вы можете прочитать больше о платежных
        провайдерах на их веб-сайтах.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Отказ от ответственности</h2>
      <p className="mb-4">
        FRKN VPN оставляет за собой право изменять сервис, обновляя программное
        обеспечение или внося изменения в определенные функции. Мы постараемся
        предотвратить прерывания и дефекты в работе сервиса и на нашем сайте.
        Несмотря на наши усилия, сервис предоставляется на условиях «как есть» и
        «по мере доступности», и мы не гарантируем, что сервис будет доступен в
        любое время, а также точность сервиса или любого материала,
        предоставленного сервисом или на сайте FRKN. Вы несете полную
        ответственность за использование сервиса.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Контактная информация</h2>
      <p className="mb-2">FRKN LLP</p>
      <p className="mb-2">Рег. номер OC453122</p>
      <p className="mb-4">
        Адрес: 111 Fulham Palace Road, London, United Kingdom, W6 8JA
      </p>
    </div>
  )
}
