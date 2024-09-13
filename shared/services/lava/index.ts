import type { components } from "@/shared/types/lava"

export const offer = {
  id: "5187e4ac-2ce8-4237-8086-c39bca794a25",
  RUB: 500,
  USD: 5,
} as { id: string } & Record<components["schemas"]["CurrencyDto"], number>

export const currencies = ["RUB", "USD"] as const

export type Currencies = (typeof currencies)[number]
