import { ExternalLink } from "@/components/external-link"
import { useScopedI18n } from "@/shared/locales/client"

export function Mobile() {
  const t = useScopedI18n("app.installation.ios_android")

  return (
    <div>
      <div className="bg-zinc-950 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-3">{t("method1.title")}</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>{t("method1.step1")}</li>
          <li>
            {t("method1.step2")} (
            <ExternalLink href="https://apps.apple.com/us/app/wireguard/id1441195209">
              iOS
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://play.google.com/store/apps/details?id=com.wireguard.android">
              Android
            </ExternalLink>
            )
          </li>
          <li>{t("method1.step3")}</li>
          <li>{t("method1.step4")}</li>
          <li>{t("method1.step5")}</li>
          <li>{t("method1.step6")}</li>
        </ol>
      </div>

      <div className="bg-zinc-950 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-3">{t("method2.title")}</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            {t("method2.step1")} (
            <ExternalLink href="https://apps.apple.com/us/app/wireguard/id1441195209">
              iOS
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://play.google.com/store/apps/details?id=com.wireguard.android">
              Android
            </ExternalLink>
            )
          </li>
          <li>{t("method2.step2")}</li>
          <li>{t("method2.step3")}</li>
          <li>{t("method2.step4")}</li>
          <li>{t("method2.step5")}</li>
          <li>{t("method2.step6")}</li>
          <li>{t("method2.step7")}</li>
        </ol>
      </div>

      <div className="bg-zinc-950 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">{t("alternative.title")}</h3>
        <p>
          {t("alternative.step1")}{" "}
          <ExternalLink href="https://amnezia.org/en/downloads">
            AmneziaVPN
          </ExternalLink>
        </p>
      </div>
    </div>
  )
}
