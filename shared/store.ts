import { map } from "nanostores"

type PaymentProvider = {
  paymentProvider: {
    open: boolean
    plan?: "1m" | "1y"
    payload?: unknown
  }
}

export const $modals = map<PaymentProvider>({
  paymentProvider: {
    open: false,
  },
})
