import { env } from "@/env";

export const DOMAIN = env.DOMAIN;
const ApiDomain = env.MARZBAN_API_DOMAIN;

export const getHostname = (subdomain?: string) =>
  subdomain ? `https://${subdomain}.${DOMAIN}` : `https://${DOMAIN}`;

export const getApiHostname = (subdomain?: string) =>
  subdomain ? `https://${subdomain}.${ApiDomain}` : `https://${ApiDomain}`;

export const WG_API_URL = env.WG_API_URL;
