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
import { cn } from "@/shared/clsx"
import { isSubscriber } from "@/shared/guards"
import type { Props } from "@/shared/locales/server"
import { getScopedI18n, getStaticParams } from "@/shared/locales/server"
import { setStaticParamsLocale } from "next-international/server"

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Page({ params: { locale } }: Props) {
  setStaticParamsLocale(locale)

  const t = await getScopedI18n("app.account.subscription")

  const me = await isSubscriber()

  function buildSubscriptionData() {
    if (me.subscriptionType === "Stripe") {
      return {
        provider: "Stripe",
        status: me.stripeSubscription?.status ?? "unknown",
      }
    }

    return {}
  }

  const subscriptionData = buildSubscriptionData()

  return (
    <PageSection>
      {subscriptionData.provider === "Stripe" && (
        <Card>
          <CardHeader>
            <CardTitle>{t("title")}</CardTitle>
            <CardDescription>
              {t("provider")}:{" "}
              <span className="font-semibold">{subscriptionData.provider}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={cn("capitalize", {
                "text-green-400": subscriptionData.status === "active",
                "text-red-400": subscriptionData.status !== "active",
              })}
            >
              {t("status")}: {subscriptionData.status}
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
