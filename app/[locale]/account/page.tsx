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
  const lavaSubscriptions = await prisma.lavaSubscriptions.findMany({
    where: {
      userId: me.id,
    },
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
                  key={payment.contractId}
                  className="border rounded-lg p-4 shadow-sm bg-gray-100 text-black w-64"
                >
                  <div className="text-lg font-bold">{payment.contractId}</div>
                  {payment.parentContractId && (
                    <div className="text-sm text-gray-500">
                      Parent ID: {payment.parentContractId}
                    </div>
                  )}
                  {payment.timestamp && (
                    <div className="text-sm mt-2">
                      <strong>Timestamp:</strong>{" "}
                      {new Date(payment.timestamp).toLocaleString()}
                    </div>
                  )}
                  {payment.type && (
                    <div className="text-sm mt-1">
                      <strong>Type:</strong> {payment.type}
                    </div>
                  )}
                  <div className="text-sm mt-1">
                    <strong>Amount:</strong> {payment.amount?.toFixed(2)}{" "}
                    {payment.currency}
                  </div>
                  {payment.status && (
                    <div className="text-sm mt-1">
                      <strong>Status:</strong> {payment.status}
                    </div>
                  )}
                  {payment.errorMessage && (
                    <div className="text-sm mt-1 text-red-500">
                      <strong>Error:</strong> {payment.errorMessage}
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
