import { BashCommand } from "@/components/bash-command"
import { useScopedI18n } from "@/shared/locales/client"

export function Linux() {
  const t = useScopedI18n("app.installation.linux")

  return (
    <div>
      <div className="bg-background p-6 rounded-lg">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            {t("step1")}
            <BashCommand command="sudo apt-get update && sudo apt-get upgrade" />
          </li>
          <li>
            {t("step2")}
            <BashCommand command="sudo apt-get install wireguard" />
          </li>
          <li>{t("step3")}</li>
          <li>
            {t("step4")}
            <BashCommand command="sudo mv [путь до файла]/frkn.conf /etc/wireguard/" />
          </li>
          <li>
            {t("step5")}
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>
                {t("step5_1")}{" "}
                <code className="bg-zinc-800 px-1 py-0.5 rounded font-mono text-sm">
                  sudo wg-quick up frkn
                </code>
              </li>
              <li>
                {t("step5_2")}{" "}
                <code className="bg-zinc-800 px-1 py-0.5 rounded font-mono text-sm">
                  sudo wg show
                </code>
              </li>
              <li>
                {t("step5_3")}{" "}
                <code className="bg-zinc-800 px-1 py-0.5 rounded font-mono text-sm">
                  sudo wg-quick down frkn
                </code>
              </li>
            </ul>
          </li>
        </ol>
        <p className="mt-8 text-sm text-gray-600">{t("notice")}</p>
        <BashCommand command="sudo apt-get install resolvconf" />
      </div>
    </div>
  )
}
