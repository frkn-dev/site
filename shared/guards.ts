import type { StripeSubscriber } from "@/shared/entities/User"
import { getMe } from "@/shared/services/auth/get-me"
import { redirect } from "next/navigation"

export async function isLoggedIn() {
  const me = await getMe()

  if (!me) {
    redirect("/registration")
  }

  return me
}

export async function isSubscriber() {
  const me = await isLoggedIn()

  if (!me.subscriptionType) {
    redirect("/#pricing")
  }

  if (me.subscriptionType === "Stripe" && me.stripeSubscription) {
    if (me.stripeSubscription.status !== "active") {
      redirect("/#pricing")
    }

    return me as StripeSubscriber
  }

  return me
}
