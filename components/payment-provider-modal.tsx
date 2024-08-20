import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useScopedI18n } from "@/shared/locales/client"
import { $modals } from "@/shared/store"
import { trpc } from "@/shared/trpc"
import { useStore } from "@nanostores/react"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function PaymentProviderModal() {
  const t = useScopedI18n("pricing")
  const { paymentProvider } = useStore($modals)

  const router = useRouter()

  const { mutateAsync, isPending } =
    trpc.stripe.createCheckoutSession.useMutation({
      onSuccess(data) {
        if (data.url) {
          router.push(data.url)
        }
      },
    })

  return (
    <Dialog
      open={paymentProvider.open}
      onOpenChange={(state) =>
        $modals.setKey("paymentProvider", { open: state })
      }
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("payment_provider_dialog.title")}</DialogTitle>
          <DialogDescription>
            {t("payment_provider_dialog.description")}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
          <Button
            type="button"
            onClick={() => mutateAsync()}
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : null}
            Stripe
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
