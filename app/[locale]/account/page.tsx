import { ManageCryptomusButton } from "@/components/manage-cryptomus-button"
import { ManageStripeSubscriptionButton } from "@/components/manage-stripe-subscription-button"
import { PageSection } from "@/components/page-section"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import prisma from "@/prisma"
import { cn } from "@/shared/clsx"
import { isLoggedIn } from "@/shared/guards"
import type { Props } from "@/shared/locales/server"
import { getScopedI18n, getStaticParams } from "@/shared/locales/server"
import { setStaticParamsLocale } from "next-international/server"

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)
  const t = await getScopedI18n("app.account.subscription")
  const me = await isLoggedIn()
  const stripeStatus = me.stripeSubscription?.status ?? "unknown"
  const lavaSubscriptions = me.lavaBuyerId
    ? await prisma.lavaSubscriptions.findMany({
        where: { lavaBuyerId: me.lavaBuyerId },
      })
    : []
  const cryptomusInvoices = await prisma.cryptomusInvoices.findMany({
    where: { userId: me.id },
  })

  return (
    <PageSection>
      {!me.subscriptionType && (
        <Card>
          <CardHeader>
            <CardTitle>{t("inactive")}</CardTitle>
          </CardHeader>
        </Card>
      )}

      {cryptomusInvoices.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>{t("title")}</CardTitle>
            <CardDescription>
              {t("provider")}: <span className="font-semibold">Cryptomus</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {cryptomusInvoices.map((payment) => {
                const {
                  id,
                  created,
                  amount,
                  currency,
                  paymentAmount,
                  payerCurrency,
                  network,
                  status,
                } = payment
                return (
                  <div
                    key={id}
                    className="border rounded-lg p-4 shadow-sm bg-gray-100 text-black w-64"
                  >
                    <div className="text-lg font-bold">
                      {created.toLocaleString(locale)}
                    </div>

                    <div className="text-sm mt-2">
                      <strong>ID:</strong> {id}
                    </div>

                    <div className="text-sm mt-1">
                      <strong>{t("amount")}:</strong>{" "}
                      {Number.parseFloat(amount)} {currency}{" "}
                      {formatAmount(paymentAmount, payerCurrency, network)}
                    </div>

                    <div className="text-sm mt-1">
                      <strong>{t("status")}:</strong> {status}
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
          <CardFooter>
            <ManageCryptomusButton />
          </CardFooter>
        </Card>
      )}

      {lavaSubscriptions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>{t("title")}</CardTitle>
            <CardDescription>
              {t("provider")}: <span className="font-semibold">Lava.top</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {lavaSubscriptions.map((payment) => (
                <div
                  key={payment.id}
                  className="border rounded-lg p-4 shadow-sm bg-gray-100 text-black w-64"
                >
                  {payment.timestamp && (
                    <div className="text-lg font-bold">
                      {new Date(payment.timestamp).toLocaleString(locale)}
                    </div>
                  )}

                  {payment.contractId && (
                    <div className="text-sm mt-2">
                      <strong>ID:</strong> {payment.contractId}
                    </div>
                  )}
                  {payment.parentContractId && (
                    <div className="text-sm text-gray-500">
                      Parent ID: {payment.parentContractId}
                    </div>
                  )}
                  <div className="text-sm mt-1">
                    <strong>{t("amount")}:</strong> {payment.amount}{" "}
                    {payment.currency}
                  </div>
                  <div className="text-sm mt-1">
                    <strong>{t("status")}:</strong> {payment.status}
                  </div>

                  {payment.errorMessage && (
                    <div className="text-sm mt-1 text-red-500">
                      <strong>{t("error")}:</strong> {payment.errorMessage}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {me.subscriptionType === "Stripe" && (
        <Card>
          <CardHeader>
            <CardTitle>{t("title")}</CardTitle>
            <CardDescription>
              {t("provider")}: <span className="font-semibold">Stripe</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={cn("capitalize", {
                "text-green-400": stripeStatus === "active",
                "text-red-400": stripeStatus !== "active",
              })}
            >
              {t("status")}: {stripeStatus}
            </div>
          </CardContent>
          <CardFooter>
            <ManageStripeSubscriptionButton />
          </CardFooter>
        </Card>
      )}
    </PageSection>
  )
}

function formatAmount(
  paymentAmount: string | null,
  payerCurrency: string | null,
  network: string | null,
) {
  if (!paymentAmount) return null
  return ` (${Number.parseFloat(paymentAmount)} ${payerCurrency} ${network})`
}
