import { usePlausible } from "next-plausible"

type Events = {
  xrayCreated: never
  downloadedConfigurationFile: never
  generatedQRcode: never
  registration: never
  auth: never
}

export const useAnalytics = () => {
  const plausible = usePlausible<Events>()
  return plausible
}
