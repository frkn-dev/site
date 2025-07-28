import { getScopedI18n } from "@/shared/locales/server"
import { PageSection } from "../page-section"

export async function LocationsSection() {
  const t = await getScopedI18n("locations")

  const locations = [
    { code: "NL", name: `${t("nl")}`, flag: "🇳🇱" },
    { code: "UK", name: `${t("uk")}`, flag: "🇬🇧" },
    { code: "DE", name: `${t("de")}`, flag: "🇩🇪" },
    { code: "PL", name: `${t("pl")}`, flag: "🇵🇱" },
    { code: "RU", name: `${t("ru")}`, flag: "🇷🇺" },
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
