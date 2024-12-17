import { PageSection } from "@/components/page-section"
import { getScopedI18n } from "@/shared/locales/server"

export default async function NotFound() {
  const t = await getScopedI18n("not_found")

  return (
    <PageSection className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">{t("404")}</h1>
      <h3 className="text-xl mb-8 text-center">{t("404_sub")}</h3>
      <form
        action="https://www.google.com/search"
        method="get"
        className="flex flex-col items-center"
      >
        <input
          type="text"
          name="q"
          placeholder={t("search_site")}
          required
          className="border p-3 mb-4 w-80 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input type="hidden" name="sitesearch" value="frkn.org" />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded"
        >
          {t("search")}
        </button>
      </form>
    </PageSection>
  )
}
