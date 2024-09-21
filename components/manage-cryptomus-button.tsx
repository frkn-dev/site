"use client"
import { Button } from "@/components/ui/button"
import { useScopedI18n } from "@/shared/locales/client"
import { trpc } from "@/shared/trpc"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function ManageCryptomusButton() {
  const t = useScopedI18n("app.account.subscription")
  const router = useRouter()
  const cryptomus = trpc.cryptomus.invoice.useMutation({
    onSuccess(data) {
      if (data?.url) {
        router.push(data.url)
      }
    },
  })

  return (
    <Button
      type="button"
      onClick={() => cryptomus.mutate({ amount: "5" })}
      disabled={cryptomus.isPending}
    >
      {cryptomus.isPending && <Loader2 className="size-4 mr-2 animate-spin" />}
      {t("pay")}
    </Button>
  )
}
