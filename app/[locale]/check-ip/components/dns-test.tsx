import { useEffect, useState } from "react"
import { checkDNSLeak, fetchIP } from "../../../../shared/utils/network-utils"

interface DNSServer {
  ip: string
  provider: string
  country: string
}

const DNSTest: React.FC<{ t: Record<string, string> }> = ({ t }) => {
  const [dnsServer, setDnsServer] = useState<DNSServer | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDNSLeaked, setIsDNSLeaked] = useState<boolean | null>(null)

  useEffect(() => {
    const checkDNS = async () => {
      setIsLoading(true)

      try {
        const result = await fetchIP()
        setDnsServer(result)
        if (result) {
          console.log(result)
          const dnsLeak = checkDNSLeak(result.ip)
          console.log(dnsLeak)
          setIsDNSLeaked(dnsLeak)
        }
      } catch (error) {
        console.error("Ошибка при проверке DNS:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkDNS()
  }, [])

  return (
    <div className="dns-test">
      <h2 className="mb-4 text-xl font-semibold">{t.dns_leak_test}</h2>
      <p className="mb-4 text-sm text-gray-600">{t.dns_admin_warning}</p>

      {isLoading ? (
        <div className="flex justify-center">
          <p className="text-gray-600">{t.loading}</p>
        </div>
      ) : !dnsServer ? (
        <div className="flex justify-center">
          <p className="text-gray-600">{t.server_not_found}</p>
        </div>
      ) : (
        <div className="mt-4 border-2 border-red-600 rounded overflow-hidden">
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
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap px-6 py-4">{dnsServer.ip}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  {dnsServer.provider}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {dnsServer.country}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {isDNSLeaked !== null && (
        <div className="mt-4">
          {isDNSLeaked ? (
            <p className="text-red-600">{t.dns_leak_detected}</p>
          ) : (
            <p className="text-green-600">{t.dns_leak_not_found}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default DNSTest
