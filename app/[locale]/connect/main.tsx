"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useAnalytics } from "@/shared/analytics"
import { formatBytes } from "@/shared/format-bytes"
import { formatStrategy } from "@/shared/format-strategy"
import { useCurrentLocale, useScopedI18n } from "@/shared/locales/client"
import { trpc } from "@/shared/trpc"
import { Loader2, MessageCircleQuestion, QrCode } from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"
import { Card } from "./components/Card"
import { CopyInput } from "./components/CopyInput"
import { Instructions } from "./components/Instructions"
import { QrModal } from "./components/QRModal"
import v2ray from "./components/logo/v2ray.png"
import wg from "./components/logo/wg.svg"

export function Main() {
  const t = useScopedI18n("app.connect")
  const locale = useCurrentLocale()
  const analytics = useAnalytics()
  const [isModalOpen, setModalOpen] = useState(false)
  const [helpDialog, setHelpDialog] = useState(false)
  const [qr, setQr] = useState("")
  const { mutateAsync: create, isPending } = trpc.xray.create.useMutation()
  const { data, isLoading } = trpc.xray.get.useQuery()

  const showQr = (data: string) => {
    setQr(data)
    setModalOpen(true)
  }

  return (
    <>
      <div>
        <div className="grid grid-rows-1 lg:grid-cols-[1fr_auto] max-w-6xl w-full mx-auto px-4 gap-6">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8">
            <Card
              logo={wg}
              title="WireGuard"
              subtitle={t("wg")}
              action={() => (
                <Button variant="outline" className="ml-4" asChild>
                  <Link href="/installation">{t("create")}</Link>
                </Button>
              )}
            />
            <Card
              logo={v2ray}
              title="XRay"
              subtitle={t("xray")}
              action={() => (
                <Button
                  variant="outline"
                  className="ml-4"
                  disabled={isPending || isLoading || Boolean(data)}
                  onClick={() => {
                    create()
                    analytics("xrayCreated")
                  }}
                >
                  {isPending && (
                    <Loader2 size={16} className="mr-2 animate-spin" />
                  )}
                  {t("create")}
                </Button>
              )}
            />
          </div>
        </div>

        {isLoading && (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8">
            <Loader2 className="ml-4 h-6 w-6 text-white animate-spin" />
          </div>
        )}

        {data && (
          <div className="p-4 max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                {t("table.title")}
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 px-4 py-2 text-left">
                      {t("table.protocol")}
                    </th>
                    <th className="border border-gray-600 px-4 py-2 text-left">
                      {t("table.country")}
                    </th>
                    <th className="border border-gray-600 px-4 py-2 text-left">
                      {t("table.traffic")}
                    </th>
                    <th className="border border-gray-600 px-4 py-2 text-left">
                      {t("table.limit")}
                      <MessageCircleQuestion
                        width={18}
                        className="inline-block ml-1 cursor-pointer"
                        onClick={() => setHelpDialog(true)}
                      />
                    </th>
                    <th className="border border-gray-600 px-4 py-2 text-left">
                      {t("table.configuration")}
                    </th>
                    <th className="border border-gray-600 px-4 py-2 text-left">
                      {t("table.qr")}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="bg-gray-900 text-white hover:bg-gray-800">
                    <td className="border border-gray-700 px-4 py-2">XRay</td>
                    <td className="border border-gray-700 px-4 py-2">
                      {t("table.all")}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {formatBytes(data.used_traffic)}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {formatBytes(data.limit)}{" "}
                      {formatStrategy(data.limit_reset_strategy, locale)}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      <CopyInput value={data.subscription_url} />
                    </td>
                    <td className="border border-gray-700 px-4 py-2 text-center">
                      <button
                        className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-500"
                        onClick={() => showQr(data.subscription_url)}
                      >
                        <QrCode className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>

                  {data.ss_links.map((link) => (
                    <tr
                      className="bg-gray-900 text-white hover:bg-gray-800"
                      key={link.link}
                    >
                      <td className="border border-gray-700 px-4 py-2">
                        Shadowsocks
                      </td>
                      <td className="border border-gray-700 px-4 py-2">
                        {link.country}
                      </td>
                      <td className="border border-gray-700 px-4 py-2">
                        {formatBytes(data.used_traffic)}
                      </td>
                      <td className="border border-gray-700 px-4 py-2">
                        {formatBytes(data.limit)}{" "}
                        {formatStrategy(data.limit_reset_strategy, locale)}
                      </td>
                      <td className="border border-gray-700 px-4 py-2">
                        <CopyInput value={link.link} />
                      </td>
                      <td className="border border-gray-700 px-4 py-2 text-center">
                        <button
                          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-500"
                          onClick={() => showQr(link.link)}
                        >
                          <QrCode className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {data && <Instructions />}
      </div>

      <QrModal
        isOpen={isModalOpen}
        close={() => setModalOpen(false)}
        data={qr}
      />

      <Dialog open={helpDialog} onOpenChange={() => setHelpDialog(false)}>
        <DialogContent className="sm:max-w-[425px]">
          <div>
            <p>{t("table.premium")}</p>
            <br />
            Email:{" "}
            <a
              href="mailto:mail@frkn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              mail@frkn.org
            </a>
            <br />
            Telegram:{" "}
            <a
              href="https://t.me/frkn_support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              @frkn_support
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
