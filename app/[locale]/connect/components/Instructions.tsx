import { External } from "@/components/external-link"
import { useCurrentLocale } from "@/shared/locales/client"

export const Instructions = () => {
  const locale = useCurrentLocale()

  if (locale === "ru") {
    return (
      <div className="bg-gray-800 text-white p-6 mt-8 rounded-lg shadow-md max-w-6xl mx-auto">
        <p className="mb-4">
          Для подключения к <b>XRay</b> на iOS и Мас мы рекомендуем приложение{" "}
          <External
            href="https://apps.apple.com/ru/app/foxray/id6448898396"
            text="FoXray"
          />
          . Для{" "}
          <External
            href="https://github.com/hiddify/hiddify-next/releases/download/v2.2.0/Hiddify-Windows-Setup-x64.exe"
            text="Windows"
          />{" "}
          и{" "}
          <External
            href="https://play.google.com/store/apps/details?id=app.hiddify.com"
            text="Android"
          />{" "}
          используйте Hiddify.
        </p>
        <p className="mb-4">
          Для <b>Shadowsocks</b> можно использовать FoXray или Hiddify, но
          удобнее установить приложение Outline: для{" "}
          <External
            href="https://s3.amazonaws.com/outline-releases/client/windows/stable/Outline-Client.exe"
            text="Windows"
          />
          ,{" "}
          <External
            href="https://play.google.com/store/apps/details?id=org.outline.android.client"
            text="Android"
          />{" "}
          и{" "}
          <External
            href="https://apps.apple.com/us/app/outline-app/id1356177741"
            text="iOS"
          />
        </p>

        <p>
          Если у вас возникли вопросы, пожалуйста, обратитесь в нашу поддержку в
          Telegram{" "}
          <External href="https://t.me/frkn_support" text="@frkn_support" />
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gray-800 text-white p-6 mt-8 rounded-lg shadow-md max-w-6xl mx-auto">
      <p className="mb-4">
        To connect to <b>XRay</b> on iOS and Mac, we recommend the{" "}
        <External
          href="https://apps.apple.com/ru/app/foxray/id6448898396"
          text="FoXray"
        />{" "}
        app. For{" "}
        <External
          href="https://github.com/hiddify/hiddify-next/releases/download/v2.2.0/Hiddify-Windows-Setup-x64.exe"
          text="Windows"
        />{" "}
        and{" "}
        <External
          href="https://play.google.com/store/apps/details?id=app.hiddify.com"
          text="Android"
        />{" "}
        use Hiddify.
      </p>
      <p className="mb-4">
        For <b>Shadowsocks</b>, you can use FoXray or Hiddify, but it's more
        convenient to install the Outline app: for{" "}
        <External
          href="https://s3.amazonaws.com/outline-releases/client/windows/stable/Outline-Client.exe"
          text="Windows"
        />
        ,{" "}
        <External
          href="https://play.google.com/store/apps/details?id=org.outline.android.client"
          text="Android"
        />{" "}
        and{" "}
        <External
          href="https://apps.apple.com/us/app/outline-app/id1356177741"
          text="iOS"
        />
      </p>

      <p>
        If you have any questions, please contact our support on Telegram{" "}
        <External href="https://t.me/frkn_support" text="@frkn_support" />
      </p>
    </div>
  )
}
