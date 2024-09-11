import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useCurrentLocale, useScopedI18n } from "@/shared/locales/client"
import { $modals } from "@/shared/store"
import { trpc } from "@/shared/trpc"
import { zodResolver } from "@hookform/resolvers/zod"
import { useStore } from "@nanostores/react"
import { ArrowLeft, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAnalytics } from "@/shared/analytics"

export function PaymentProviderModal() {
  const t = useScopedI18n("pricing")
  const locale = useCurrentLocale()
  const { paymentProvider } = useStore($modals)
  const router = useRouter()
  const analytics = useAnalytics()
  const [step, setStep] = useState<1 | 2>(1)
  const stripe = trpc.stripe.createCheckoutSession.useMutation({
    onSuccess(data) {
      if (data.url) {
        router.push(data.url)
      }
    },
  })
  const lava = trpc.lava.invoice.useMutation({
    onSuccess(data) {
      if (data?.paymentUrl) {
        router.push(data.paymentUrl)
      }
    },
  })

  const schema = z.object({
    email: z.string().email({
      message: t("payment_provider_dialog.invalid"),
    }),
  })
  type FormData = z.infer<typeof schema>
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
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
          <DialogTitle>
            {step === 2 && (
              <ArrowLeft
                width={18}
                className="inline-block ml-1 cursor-pointer"
                onClick={() => setStep(1)}
              />
            )}
            {t("payment_provider_dialog.title")}
          </DialogTitle>
          <DialogDescription>
            {t("payment_provider_dialog.description")}
          </DialogDescription>
        </DialogHeader>
        {step === 1 && (
          <div className="grid gap-2">
            <Button
              type="button"
              onClick={() => stripe.mutateAsync()}
              disabled={stripe.isPending}
            >
              {stripe.isPending ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : null}
              Stripe
            </Button>

            <Button type="button" onClick={() => setStep(2)}>
              {t("payment_provider_dialog.lava_rub")}
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) => {
                  analytics("subscribe", {
                    props: {
                      revenue: { currency: "RUB", amount: 400 },
                    },
                  })
                  lava.mutate({
                    email: data.email,
                    lang: locale.toUpperCase(),
                  })
                })}
                className="flex gap-2 w-full"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input placeholder="johndoe@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={lava.isPending}>
                  {lava.isPending ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : null}
                  {t("payment_provider_dialog.pay")}
                </Button>
              </form>
            </Form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
