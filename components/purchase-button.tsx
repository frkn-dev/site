"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useScopedI18n } from "@/shared/locales/client"
import { trpc } from "@/shared/trpc"
import { Loader2 } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function PurchaseButton() {
  const t = useScopedI18n("pricing")
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="w-full">
          {t("pro.button")}
        </Button>
      </DialogTrigger>
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
            <Image
              src="/stripe.svg"
              alt="Stripe"
              width={468}
              height={222.5}
              className="max-h-6"
            />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
