"use client"
import { useScopedI18n } from "@/shared/locales/client"
import { trpc } from "@/shared/trpc"

export const ClusterStatus: React.FC = () => {
  const t = useScopedI18n("app.status")
  const { data } = trpc.xray.nodes.useQuery()

  const status = data
    ? data.allConnected
      ? "bg-green-100 text-green-700"
      : data.hasError
        ? "bg-yellow-100 text-yellow-700"
        : "bg-gray-100 text-black-700"
    : "bg-gray-100 text-black-700"

  const statusLabel = data
    ? data.allConnected
      ? "Connected"
      : data.hasError
        ? "Issues"
        : "Unknown"
    : "Unknown"

  return (
    <div className="p-4 flex justify-between items-center border rounded-lg shadow-md">
      <h2>{t("connection")}</h2>
      <div className="inline-block ml-2">
        <span
          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${status}`}
        >
          {statusLabel}
        </span>
      </div>
    </div>
  )
}
