import { getScopedI18n } from "@/shared/locales/server"
import { PageSection } from "../page-section"

export async function LocationsSection() {
  const t = await getScopedI18n("locations")

  const locations = [
    { code: "AT", name: `${t("au")}`, flag: "🇦🇹" },
    { code: "JP", name: `${t("jp")}`, flag: "🇯🇵" },
    { code: "NL", name: `${t("nl")}`, flag: "🇳🇱" },
    { code: "RU", name: `${t("ru")}`, flag: "🇷🇺" },
    { code: "CH", name: `${t("ch")}`, flag: "🇨🇭" },
    { code: "TR", name: `${t("tr")}`, flag: "🇹🇷" },
    { code: "US", name: `${t("us")}`, flag: "🇺🇸" },
  ]

  return (
    <PageSection className="md:py-8">
      <h2 className="w-fit mx-auto py-8 font-mono font-bold text-4xl">
        {t("available")}
      </h2>
      <ul className="flex flex-wrap justify-center gap-4 text-lg">
        {locations.map((location) => (
          <li
            key={location.code}
            className="flex items-center gap-2 p-2 rounded-md shadow-md"
          >
            <span>{location.flag}</span>
            <span>{location.name}</span>
          </li>
        ))}
      </ul>
    </PageSection>
  )
}
