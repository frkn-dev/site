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
import { isLoggedIn } from "@/shared/guards"
import type { Props } from "@/shared/locales/server"
import { getScopedI18n, getStaticParams } from "@/shared/locales/server"
import type { Metadata } from "next"
import { setStaticParamsLocale } from "next-international/server"
import { ManageCryptomusButton } from "./manage-cryptomus-button"
import { DeleteLavaSubscriptionsButton } from "./manage-lava-button"
import { ManageStripeSubscriptionButton } from "./manage-stripe-button"

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)
  const t = await getScopedI18n("app.account.subscription")
  const me = await isLoggedIn()
  const lavaSubscriptions = me.lavaBuyerId
    ? await prisma.lavaSubscriptions.findMany({
        where: { lavaBuyerId: me.lavaBuyerId },
      })
    : []
  const cryptomusInvoices = await prisma.cryptomusInvoices.findMany({
    where: { userId: me.id },
  })
  const stripeInvoices = await prisma.stripeInvoices.findMany({
    where: { userId: me.id },
  })

  return (
    <PageSection className="py-4 md:py-4">
      {!me.subscriptionType && (
        <Card className="mb-3">
          <CardHeader>
            <CardTitle>{t("inactive")}</CardTitle>
          </CardHeader>
        </Card>
      )}

      {cryptomusInvoices.length > 0 && (
        <Card className="mb-3">
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
        <Card className="mb-3">
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
          {me.subscriptionType === "Lava" && (
            <CardFooter>
              <DeleteLavaSubscriptionsButton />
            </CardFooter>
          )}
        </Card>
      )}

      {stripeInvoices.length > 0 && (
        <Card className="mb-3">
          <CardHeader>
            <CardTitle>{t("title")}</CardTitle>
            <CardDescription>
              {t("provider")}: <span className="font-semibold">Stripe</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {stripeInvoices.map((payment) => (
                <div
                  key={payment.id}
                  className="border rounded-lg p-4 shadow-sm bg-gray-100 text-black w-64"
                >
                  <div className="text-lg font-bold">
                    {new Date(payment.created * 1000).toLocaleString(locale)}
                  </div>

                  <div className="text-sm mt-1">
                    <strong>{t("amount")}:</strong>{" "}
                    {(payment.amount_paid / 100).toFixed(2)} {payment.currency}
                  </div>
                  <div className="text-sm mt-1">
                    <strong>{t("status")}:</strong> {payment.status}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          {me.subscriptionType === "Stripe" && (
            <CardFooter>
              <ManageStripeSubscriptionButton />
            </CardFooter>
          )}
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

export function generateMetadata({ params: { locale } }: Props): Metadata {
  return {
    ru: {
      title: "Платежи – FRKN VPN",
    },
    en: {
      title: "Payments – FRKN VPN",
    },
  }[locale]
}
