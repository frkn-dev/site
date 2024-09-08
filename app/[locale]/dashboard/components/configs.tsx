"use client"

import { Button } from "@/components/ui/button"
import { useConfigs } from "@/shared/hooks/use-configs"
import { useScopedI18n } from "@/shared/locales/client"
import { Plus } from "lucide-react"
import { ConfigCard } from "./config-card"
import { ConfigsTable } from "./configs-table"
import { CreateConnectionDialog } from "./create-connection-dialog"
import { EmptyState } from "./empty-state"

export function Configs() {
  const t = useScopedI18n("app.dashboard")
  const { data, isLoading } = useConfigs()

  console.log(data)

  if (isLoading) {
    return <div>{t("loading")}</div>
  }

  if (data.length > 0) {
    return (
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">{t("your_configurations")}</h1>
          <CreateConnectionDialog>
            <Button className="hidden sm:flex">
              <Plus className="size-4 mr-2" />
              {t("add_new_configuration")}
            </Button>
          </CreateConnectionDialog>
          <CreateConnectionDialog>
            <Button size="icon" className="sm:hidden">
              <Plus className="size-4" />
            </Button>
          </CreateConnectionDialog>
        </div>
        <ConfigsTable data={data} />
      </div>
    )
  }

  if (data.length === 0) {
    return <EmptyState />
  }

  return null
}
