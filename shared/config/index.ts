export const DOMAIN = "frkn.org"
export const getHostname = (subdomain?: string) =>
  subdomain ? `https://${subdomain}.${DOMAIN}` : `https://${DOMAIN}`

export const WG_API_URL = "https://api.frkn.org"

export const SUB_URL = "https://fr-dm.ru"
