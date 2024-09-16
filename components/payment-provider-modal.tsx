import { External } from "@/components/external-link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useCurrentLocale, useScopedI18n } from "@/shared/locales/client"
import type { Currencies } from "@/shared/services/lava"
import { offer } from "@/shared/services/lava"
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
  const t = useScopedI18n("pricing.payment_provider_dialog")
  const locale = useCurrentLocale()
  const { paymentProvider } = useStore($modals)
  const router = useRouter()
  const analytics = useAnalytics()
  const [step, setStep] = useState<"init" | "email" | "support">("init")
  const [currency, setCurrency] = useState<Currencies>("RUB")

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
      message: t("invalid"),
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
        {step === "init" && (
          <>
            <DialogHeader>
              <DialogTitle>{t("title")}</DialogTitle>
              <DialogDescription>{t("description")}</DialogDescription>
            </DialogHeader>

            <div className="grid gap-2">
              {/* <Button
                type="button"
                onClick={() => stripe.mutateAsync()}
                disabled={stripe.isPending}
              >
                {stripe.isPending ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : null}
                Stripe
              </Button> */}

              <Button
                type="button"
                onClick={() => {
                  setCurrency("USD")
                  setStep("email")
                }}
              >
                {t("lava")}
              </Button>

              <Button
                type="button"
                onClick={() => {
                  setCurrency("RUB")
                  setStep("email")
                }}
              >
                {t("lava_rub")}
              </Button>

              <Button type="button" onClick={() => setStep("support")}>
                {t("sbp")}
              </Button>

              <Button type="button" onClick={() => setStep("support")}>
                {t("crypto")}
              </Button>
            </div>
          </>
        )}

        {step === "email" && (
          <>
            <DialogHeader>
              <DialogTitle>
                <ArrowLeft
                  width={18}
                  className="inline-block ml-1 cursor-pointer"
                  onClick={() => setStep("init")}
                />
                {t("email_required")}
              </DialogTitle>
            </DialogHeader>

            <div className="grid gap-2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit((data) => {
                    analytics("subscribe", {
                      props: {
                        revenue: { currency, amount: offer[currency] },
                      },
                    })
                    lava.mutate({
                      email: data.email,
                      lang: locale.toUpperCase(),
                      currency,
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
                    {t("pay")}
                  </Button>
                </form>
              </Form>
            </div>
          </>
        )}

        {step === "support" && (
          <>
            <DialogHeader>
              <DialogTitle>
                <ArrowLeft
                  width={18}
                  className="inline-block ml-1 cursor-pointer"
                  onClick={() => setStep("init")}
                />
                {t("title")}
              </DialogTitle>
            </DialogHeader>

            <div className="grid gap-2">
              {t("support")}:{" "}
              <External href="https://t.me/frkn_support" text="@frkn_support" />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
