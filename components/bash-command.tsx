"use client"

import { Button } from "@/components/ui/button"
import { useScopedI18n } from "@/shared/locales/client"
import { Copy } from "lucide-react"
import { useCallback } from "react"
import { toast } from "sonner"

type Props = {
  command: string
}

export function BashCommand({ command }: Props) {
  const t = useScopedI18n("components.bash_command")

  const copy = useCallback(() => {
    navigator.clipboard?.writeText(command).then(() => {
      toast.success(t("copied"))
    })
  }, [command])

  return (
    <pre className="bg-zinc-900 text-sm px-4 py-1 rounded mt-2 overflow-x-auto grid grid-cols-[1fr,auto] items-center gap-2 border font-mono">
      <code className="overflow-x-auto">$ {command}</code>
      <Button aria-label="Copy" variant="outline" size="icon" onClick={copy}>
        <Copy size={12} />
      </Button>
    </pre>
  )
}
