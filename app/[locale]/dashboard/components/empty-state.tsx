import { Button } from "@/components/ui/button"
import { GlobeLock, SquareDashedKanban } from "lucide-react"
import { CreateConnectionDialog } from "./create-connection-dialog"
import { useScopedI18n } from "@/shared/locales/client"

export function EmptyState() {
  const t = useScopedI18n("app.dashboard")

  return (
    <div className="h-full grid place-items-center">
      <div className="flex flex-col items-center gap-4 max-w-xl text-center">
        <SquareDashedKanban className="size-8 text-muted-foreground" />
        <h2 className="text-xl font-semibold">{t("no_active_configs")}</h2>
        <p>{t("create_first_config")}</p>
        <CreateConnectionDialog>
          <Button>
            <GlobeLock className="size-4 mr-2" />
            {t("create_first_connection")}
          </Button>
        </CreateConnectionDialog>
      </div>
    </div>
  )
}
