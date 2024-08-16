import { usePlausible } from "next-plausible"

type Events = {
  downloadedConfigurationFile: never
  generatedQRcode: never
  registration: never
  auth: never
}

export const useAnalytics = () => {
  const plausible = usePlausible<Events>()
  return plausible
}
