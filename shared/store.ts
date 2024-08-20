import { map } from "nanostores"

type PaymentProvider = {
  paymentProvider: {
    open: boolean
    payload?: unknown
  }
}

export const $modals = map<PaymentProvider>({
  paymentProvider: {
    open: false,
  },
})
