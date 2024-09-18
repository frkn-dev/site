import { env } from "@/env"
import { getErrorMessage } from "@/shared/get-error-message"
import { stripe } from "@/shared/services/stripe/client"
import { headers } from "next/headers"
import { customerSubscriptionCreated } from "./customer-subscription-created"
import { customerSubscriptionDeleted } from "./customer-subscription-deleted"
import { customerSubscriptionUpdated } from "./customer-subscription-updated"

export async function POST(request: Request) {
  try {
    const body = await request.text()
    const signature = headers().get("stripe-signature")

    if (!signature) {
      throw new Error("Missing stripe signature")
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET,
    )

    switch (event.type) {
      case "customer.subscription.created": {
        await customerSubscriptionCreated(event)
        break
      }
      case "customer.subscription.updated": {
        await customerSubscriptionUpdated(event)
        break
      }
      case "customer.subscription.deleted": {
        await customerSubscriptionDeleted(event)
        break
      }
    }

    return Response.json({ received: true })
  } catch (error) {
    const message = getErrorMessage(error)
    console.error("POST stripe-webhook", error)
    return Response.json({ message }, { status: 500 })
  }
}
