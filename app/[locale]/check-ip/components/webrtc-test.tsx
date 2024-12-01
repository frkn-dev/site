import { useEffect, useState } from "react"
import {
  type IPInfo,
  getWebRTCIPs,
} from "../../../../shared/utils/network-utils"

const WebRTCTest: React.FC<{ t: Record<string, string> }> = ({ t }) => {
  const [localIPs, setLocalIPs] = useState<IPInfo[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkWebRTC = async () => {
      try {
        const ips = await getWebRTCIPs()
        setLocalIPs(ips)
      } catch (error) {
        console.error("Ошибка при проверке WebRTC:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkWebRTC()
  }, [])

  return (
    <div className="webrtc-test">
      <h2 className="mb-4 text-xl font-semibold">{t.webrtc_test_title}</h2>
      <p className="mb-4 text-sm text-gray-600">{t.webrtc_test_description}</p>

      {isLoading ? (
        <div className="flex justify-center">
          <p className="text-gray-600">{t.loading}</p>
        </div>
      ) : (
        <div className="mt-4 border-2 border-red-600 rounded overflow-hidden">
          {localIPs.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    {t.ip}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    {t.type}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    {t.status}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {localIPs.map((ip, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-6 py-4">{ip.ip}</td>
                    <td className="whitespace-nowrap px-6 py-4">{ip.ipType}</td>
                    <td className="whitespace-nowrap px-6 py-4">{ip.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-600">{t.no_ips_found}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default WebRTCTest
