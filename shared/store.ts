import { map } from "nanostores"

export const $modals = map<
  Record<
    "paymentProvider",
    {
      open: boolean
      payload?: unknown
    }
  >
>({
  paymentProvider: {
    open: false,
  },
})
