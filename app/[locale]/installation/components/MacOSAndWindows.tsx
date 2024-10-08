import { ExternalLink } from "@/components/external-link"
import { useScopedI18n } from "@/shared/locales/client"

export function MacOSAndWindows() {
  const t = useScopedI18n("app.installation.macos_windows")

  return (
    <div>
      <div className="bg-background p-6 rounded-lg">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            {t("step1")} (
            <ExternalLink href="https://apps.apple.com/us/app/wireguard/id1451685025">
              MacOS
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://www.wireguard.com/install/">
              Windows
            </ExternalLink>
            )
          </li>
          <li>{t("step2")}</li>
          <li>{t("step3")}</li>
          <li>{t("step4")}</li>
          <li>{t("step5")}</li>
          <li>{t("step6")}</li>
        </ol>
      </div>
    </div>
  )
}
