import { usePlausible } from "next-plausible"

type Events = {
  xrayCreated: never
  downloadedConfigurationFile: never
  generatedQRcode: never
  registration: never
  auth: never
  subscribe: { revenue: { currency: string; amount: number } }
}

export const useAnalytics = () => {
  const plausible = usePlausible<Events>()
  return plausible
}
