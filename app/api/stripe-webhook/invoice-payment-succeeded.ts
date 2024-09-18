import prisma from "@/prisma"
import { upgrade } from "@/shared/trpc/routers"
import type { Stripe } from "stripe"

export async function invoicePaymentSucceeded(
  event: Stripe.InvoicePaymentSucceededEvent,
) {
  try {
    const invoice = event.data.object
    const userId = invoice.subscription_details?.metadata?.userId

    if (!userId) {
      throw new Error("User id not found in metadata: " + userId)
    }

    await prisma.stripeInvoices.create({
      data: {
        invoiceId: invoice.id,
        created: invoice.created,
        status: invoice.status,
        amount_paid: invoice.amount_paid,
        currency: invoice.currency,
        paid: invoice.paid,
        userId,
      },
    })

    if (invoice.status === "paid") {
      await upgrade(userId)
    } else {
      console.error("Stripe: unexpected status", invoice.status)
    }
  } catch (error) {
    console.error("invoicePaymentSucceeded", error)
    throw error
  }
}
