"use client"

import { Button } from "@/components/ui/button"
import { useConfigs } from "@/shared/hooks/use-configs"
import { Plus } from "lucide-react"
import { ConfigCard } from "./config-card"
import { CreateConnectionDialog } from "./create-connection-dialog"
import { EmptyState } from "./empty-state"

export function Configs() {
  const { data, isLoading } = useConfigs()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (data.length > 0) {
    return (
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Your configurations</h1>
          <CreateConnectionDialog>
            <Button className="hidden sm:flex">
              <Plus className="size-4 mr-2" />
              Add new configuration
            </Button>
          </CreateConnectionDialog>
          <CreateConnectionDialog>
            <Button size="icon" className="sm:hidden">
              <Plus className="size-4" />
            </Button>
          </CreateConnectionDialog>
        </div>
        <div className="flex gap-2 flex-wrap">
          {data.map((config, index) => (
            <ConfigCard key={index} config={config} />
          ))}
        </div>
      </div>
    )
  }

  if (data.length === 0) {
    return <EmptyState />
  }

  return null
}
