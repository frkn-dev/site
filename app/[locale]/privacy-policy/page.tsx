import { getStaticParams } from "@/locales/server"
import { setStaticParamsLocale } from "next-international/server"

export function generateStaticParams() {
  return getStaticParams()
}

type Props = {
  params: {
    locale: "ru" | "en"
  }
}

export default async function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)

  if (locale === "en") {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <p className="text-sm text-gray-600 mb-6">
          Last updated: July 23, 2024
        </p>

        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          We never store activity logs or metadata and strive to minimize data
          storage. However, in some situations, we may process your personal
          data, for example, if you make payments by bank transfer, send an
          email, or report a problem. In these cases, we apply the General Data
          Protection Regulation (GDPR), the Data Protection Bill (UK), and the
          California Consumer Privacy Act (CCPA).
        </p>

        <h2 className="text-2xl font-semibold mb-4">Payments</h2>
        <p className="mb-4">
          Payment information is processed for the purpose of providing you with
          our service, refunding, and for accounting purposes. The processing of
          payment data for the first two purposes is necessary for the
          performance of the contract.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Bank transfer stores the sender's name, address, bank account
            number, and FRKN account number.
          </li>
          <li>
            Stripe stores the Stripe payment ID, expiration date, last 4 digits
            of the card, card type, and country of origin.
          </li>
        </ul>
        <p className="mb-4">
          Please avoid bank transfer payments if you do not want your FRKN
          account to be associated with you. When making such payments, the FRKN
          account number will be indicated in the transaction field. Use
          cryptocurrency payment to maintain full anonymity.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Payment Data</h2>
        <p className="mb-4">
          Some payment data must be stored for the statutory period described in
          applicable local laws, such as the Accounting Act. If not required by
          law or specified above, we will not store payment data longer than
          necessary for the stated purpose. After the expiration of the
          established retention periods, the data will be permanently deleted.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Support and Problem Reporting
        </h2>
        <p className="mb-4">
          The processing of emails and problem reports through our
          application/client is carried out for the purpose of answering
          questions, solving problems, and providing general customer support.
          The processing is based on our legitimate interest to help you.
        </p>
        <p className="mb-4">
          After a support case/problem report is "resolved" or "closed," all
          related emails/problem reports are archived (removed from inbox).
          After six months, all emails/problem reports sent to our support
          address are automatically and permanently deleted (from inbox,
          deleted, sent messages, trash, and archives).
        </p>

        <h2 className="text-2xl font-semibold mb-4">Third Parties</h2>
        <p className="mb-4">
          Your personal data will only be transferred to third parties who
          provide services on our behalf and for the purposes stated above.
          Categories of such recipients include email service providers and
          payment solution providers (which are subject to confidentiality).
        </p>
        <p className="mb-4">
          Our website may contain links to other websites. We are not
          responsible for their content. Please familiarize yourself with their
          privacy policies.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Use of Technical Data and Cookies
        </h2>
        <p className="mb-4">
          On our website, we use statistical services to analyze traffic and
          improve the quality of services provided. We only choose services that
          comply with GDPR requirements.
        </p>
        <p className="mb-4">Cookies are used exclusively for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Saving user preferences;</li>
          <li>Ensuring secure and correct functioning of the website.</li>
        </ul>
        <p className="mb-4">
          All collected data is anonymized and does not allow identification of
          a specific user.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Rights of Data Subjects</h2>
        <p className="mb-4">
          You have the right, in certain situations, to request correction or
          deletion of your personal data and/or restriction of processing, as
          well as the right to data portability (if applicable).
        </p>
        <p className="mb-4">
          You also have the right to request a copy of your personal data.
          However, in most cases, we will not be able to provide you with data,
          as we do not store data except for payment data, which we cannot
          provide since the purpose of processing payment data does not require
          identification of the data subject (Article 11 GDPR).
        </p>
        <p className="mb-4">
          If you wish to exercise your rights, please contact us at{" "}
          <a
            href="mailto:support@frkn.org"
            className="text-blue-600 hover:underline"
          >
            support@frkn.org
          </a>{" "}
          for more information.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2">FRKN LLP</p>
        <p className="mb-2">Reg. number OC453122</p>
        <p className="mb-4">
          Address: 111 Fulham Palace Road, London, United Kingdom, W6 8JA
        </p>

        <p className="mt-8 text-sm text-gray-600">
          We are committed to protecting your data and using it only for the
          stated purposes.
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Политика конфиденциальности</h1>

      <p className="text-sm text-gray-600 mb-6">
        Последнее обновление: 23 июля 2024 г.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Обзор</h2>
      <p className="mb-4">
        Мы никогда не сохраняем журналы активности или метаданные и стараемся
        свести к минимуму хранение данных. Однако в некоторых ситуациях мы можем
        обрабатывать ваши персональные данные, например, если вы совершаете
        платежи банковским переводом, отправляете электронное письмо или
        сообщаете о проблеме. В этих случаях мы применяем Общий регламент защиты
        данных (GDPR), Data Protection Bill (Великобритания) и California
        Consumer Privacy Act (CCPA).
      </p>

      <h2 className="text-2xl font-semibold mb-4">Платежи</h2>
      <p className="mb-4">
        Информация о платежах обрабатывается с целью предоставления вам нашего
        сервиса, возврата средств и для бухгалтерского учета. Обработка данных о
        платежах для первых двух целей необходима для выполнения договора.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Банковский перевод хранит имя отправителя, адрес, номер банковского
          счета и номер аккаунта FRKN.
        </li>
        <li>
          Stripe хранит идентификатор платежа Stripe, срок действия, последние 4
          цифры карты, тип карты и страну происхождения.
        </li>
      </ul>
      <p className="mb-4">
        Пожалуйста, избегайте платежей банковским переводом, если вы не хотите,
        чтобы ваш аккаунт FRKN можно было связать с вами. При совершении таких
        платежей номер аккаунта FRKN будет указан в поле транзакции. Используйте
        оплату криптовалютой для сохранения полной анонимности.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Данные о платежах</h2>
      <p className="mb-4">
        Некоторые данные о платежах должны храниться в течение установленного
        законом периода, описанного в применимых местных законах, таких как
        Закон о бухгалтерском учете. Если это не требуется законом или не
        указано выше, данные о платежах мы будем хранить не дольше, чем это
        необходимо для указанной цели. После окончания установленных сроков
        хранения данные будут навсегда удалены.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Поддержка и отчет о проблемах
      </h2>
      <p className="mb-4">
        Обработка электронных писем и отчетов о проблемах через наше
        приложение/клиент осуществляется с целью ответов на вопросы, решения
        проблем и предоставления общей поддержки клиентам. Обработка основана на
        нашем законном интересе помочь вам.
      </p>
      <p className="mb-4">
        После "решения" или "закрытия" случая поддержки/отчета о проблеме все
        связанные электронные письма/отчеты о проблемах архивируются (удаляются
        из входящих сообщений). Через шесть месяцев все электронные
        письма/отчеты о проблемах, отправленные на наш адрес поддержки,
        автоматически и навсегда удаляются (из входящих, удаленных, отправленных
        сообщений, корзины и архивов).
      </p>

      <h2 className="text-2xl font-semibold mb-4">Третьи стороны</h2>
      <p className="mb-4">
        Ваши персональные данные будут переданы только третьим сторонам, которые
        оказывают услуги от нашего имени и для вышеуказанных целей. Категории
        таких получателей включают поставщиков услуг электронной почты и
        платежных решений (которые подлежат конфиденциальности).
      </p>
      <p className="mb-4">
        На нашем сайте могут быть ссылки на другие сайты. Мы не несем
        ответственности за их контент. Пожалуйста, ознакомьтесь с их политиками
        конфиденциальности.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Использование технических данных и cookies
      </h2>
      <p className="mb-4">
        На нашем сайте мы используем сервисы статистики для анализа посещаемости
        и улучшения качества предоставляемых услуг. Мы выбираем только те
        сервисы, которые соответствуют требованиям GDPR.
      </p>
      <p className="mb-4">Cookies используются исключительно для:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Сохранения пользовательских предпочтений;</li>
        <li>Обеспечения безопасного и корректного функционирования сайта.</li>
      </ul>
      <p className="mb-4">
        Все собираемые данные анонимизированы и не позволяют идентифицировать
        конкретного пользователя.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Права субъектов данных</h2>
      <p className="mb-4">
        Вы имеете право в определенных ситуациях запросить у нас исправление или
        удаление ваших персональных данных и/или ограничение обработки, а также
        право на переносимость данных (если применимо).
      </p>
      <p className="mb-4">
        Вы также имеете право запросить копию ваших персональных данных. Однако
        в большинстве случаев мы не сможем предоставить вам данные, так как мы
        не храним данные, кроме платежных данных, которые мы не можем
        предоставить, поскольку цель обработки платежных данных не требует
        идентификации субъекта данных (статья 11 GDPR).
      </p>
      <p className="mb-4">
        Если вы хотите воспользоваться своими правами, пожалуйста, свяжитесь с
        нами по адресу{" "}
        <a
          href="mailto:support@frkn.org"
          className="text-blue-600 hover:underline"
        >
          support@frkn.org
        </a>{" "}
        для получения дополнительной информации.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Контактная информация</h2>
      <p className="mb-2">FRKN LLP</p>
      <p className="mb-2">Рег. номер OC453122</p>
      <p className="mb-4">
        Адрес: 111 Fulham Palace Road, London, United Kingdom, W6 8JA
      </p>

      <p className="mt-8 text-sm text-gray-600">
        Мы обязуемся защищать ваши данные и использовать их только в указанных
        целях.
      </p>
    </div>
  )
}
