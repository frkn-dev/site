import { getScopedI18n } from "@/shared/locales/server"
import Tabs from "./components/tabs"

export default async function Page() {
  const t = await getScopedI18n("ip_check")

  const translations = {
    webrtc_tab: t("webrtc_tab"),
    dns_tab: t("dns_tab"),
    ipv6_tab: t("ip_tab"),
    loading: t("loading"),
    no_ips_found: t("no_ips_found"),
    webrtc_test_title: t("webrtc_test_title"),
    webrtc_test_description: t("webrtc_test_description"),
    type: t("type"),
    status: t("status"),
    ip: t("ip"),
    country: t("country"),
    provider: t("provider"),
    server_not_found: t("server_not_found"),
    dns_admin_warning: t("dns_admin_warning"),
    dns_leak_test: t("dns_leak_test"),
    dns_leak_not_found: t("dns_leak_not_found"),
    dns_leak_detected: t("dns_leak_detected"),
    ip_leak_test: t("ip_leak_test"),
    city: t("city"),
    flag: t("flag"),
    ip_not_found_or_protected: t("ip_not_found_or_protected"),
  }

  return (
    <div className="p-5">
      <Tabs translations={translations} />
    </div>
  )
}
