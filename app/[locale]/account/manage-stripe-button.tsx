"use client"

import { Button } from "@/components/ui/button"
import { useScopedI18n } from "@/shared/locales/client"
import { trpc } from "@/shared/trpc"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function ManageStripeSubscriptionButton() {
  const t = useScopedI18n("app.account.subscription")

  const router = useRouter()

  const { mutate: createPortal, isPending } =
    trpc.stripe.createPortal.useMutation({
      onSuccess(url) {
        router.push(url)
      },
    })

  return (
    <Button type="button" onClick={() => createPortal()} disabled={isPending}>
      {isPending && <Loader2 className="size-4 mr-2 animate-spin" />}
      {t("manage")}
    </Button>
  )
}
