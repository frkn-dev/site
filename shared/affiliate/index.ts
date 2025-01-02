import { env } from "@/env"
import ky from "ky"

/**
 * @see https://support.mitgo.com/knowledge-base/article/integration-via-postback-request_2
 */
export async function postback(
  order_id: string,
  price: number,
  currency_code: "RUB" | "EUR" | "USD",
  uid: string,
  isRetry = false,
) {
  try {
    await ky("https://ad.admitad.com/r", {
      searchParams: {
        postback: "1",
        payment_type: "sale",
        campaign_code: "db7d7f9f49",
        postback_key: env.ADMITAD_POSTBACK_KEY,
        action_code: "1",
        tariff_code: "1",
        uid,
        order_id, // your internal order ID
        price, // example: 2.65
        currency_code,
      },
      timeout: 3_000,
      retry: 1,
    })

    return { status: "ok" }
  } catch (error: any) {
    if (error.name === "TimeoutError" && !isRetry) {
      console.warn("Postback TimeoutError", order_id)
      return postback(order_id, price, currency_code, uid, true)
    }
    console.error(`Postback ${order_id}`, error)
    return null
  }
}
