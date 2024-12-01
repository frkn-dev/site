import { useEffect, useState } from "react"
import { type IPInfo, fetchIP } from "../../../../shared/utils/network-utils"

const IPTest: React.FC<{ t: Record<string, string> }> = ({ t }) => {
  const [ipInfo, setIPInfo] = useState<IPInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkIP = async () => {
      try {
        const result = await fetchIP()
        setIPInfo(result)
      } catch (error) {
        console.error("Ошибка при проверке IP:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkIP()
  }, [])

  return (
    <div className="ip-test">
      <h2 className="mb-4 text-xl font-semibold">{t.ip_leak_test}</h2>
      {isLoading ? (
        <div className="flex justify-center">
          <p className="text-gray-600">{t.loading}</p>
        </div>
      ) : (
        <div className="mt-4 border-2 border-red-600 rounded overflow-hidden">
          {ipInfo ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    {t.ip}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    {t.provider}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    {t.country}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    {t.city}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    {t.flag}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="divide-y divide-gray-200 bg-white">
                  <td className="whitespace-nowrap px-6 py-4">{ipInfo.ip}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {ipInfo.provider}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {ipInfo.country}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{ipInfo.city}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {ipInfo.flag && (
                      <img src={ipInfo.flag} alt="Флаг" width={30} />
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-600">
              {t.ip_not_found_or_protected}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default IPTest
