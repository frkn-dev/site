import { Button } from "@/components/ui/button"
import { GlobeLock, SquareDashedKanban } from "lucide-react"
import { CreateConnectionDialog } from "./create-connection-dialog"

export function EmptyState() {
  return (
    <div className="h-full grid place-items-center">
      <div className="flex flex-col items-center gap-4 max-w-xl text-center">
        <SquareDashedKanban className="size-8 text-muted-foreground" />
        <h2 className="text-xl font-semibold">
          You don't have any active VPN configurations yet
        </h2>
        <p>
          Create your first configuration to start browsing the internet
          securely and anonymously. It only takes a couple of minutes!
        </p>
        <CreateConnectionDialog>
          <Button>
            <GlobeLock className="size-4 mr-2" />
            Create your first connection
          </Button>
        </CreateConnectionDialog>
      </div>
    </div>
  )
}
