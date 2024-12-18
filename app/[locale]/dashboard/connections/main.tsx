"use client"

import { QrModal } from "@/components/qr-modal"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { formatBytes } from "@/shared/format/bytes"
import { useScopedI18n } from "@/shared/locales/client"
import { trpc } from "@/shared/trpc"
import { Copy, LayoutGrid, QrCode } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Main() {
  const t = useScopedI18n("app.dashboard")
  const [isModalOpen, setModalOpen] = useState(false)
  const [qr, setQr] = useState("")

  const { data } = trpc.xray.get.useQuery(undefined, {
    refetchOnWindowFocus: false,
  })

  const showQr = (data: string) => {
    setQr(data)
    setModalOpen(true)
  }

  if (!data) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl/8 font-semibold text-foreground sm:text-xl/8">
          {t("title")}
        </CardTitle>
        <CardDescription>
          {t("vpnTableDescription_1")}
          <span className="font-bold">{formatBytes(data.limit)}</span>
          {t("vpnTableDescription_2")}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <CardTitle className="mb-2">XRay</CardTitle>
          <CardDescription className="text-balance mb-2">
            {t("xrayDescription")}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-2">
            <Button size="sm" asChild>
              <Link href="/">Windows</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/">MacOS</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/">iOS</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/">Android</Link>
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Country</TableHead>
                <TableHead className="text-right">{t("config")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  {t("allCountries")}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    <Button size="sm" asChild>
                      <Link href="/">
                        <LayoutGrid className="h-4 w-4 md:mr-2" />
                        <span className="hidden md:block">
                          {t("openInApp")}
                        </span>
                      </Link>
                    </Button>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          aria-label="Copy Config"
                          size="sm"
                          onClick={() => {
                            navigator.clipboard.writeText(data.subscription_url)
                          }}
                        >
                          <Copy className="h-4 w-4 md:mr-2" />
                          <span className="hidden md:block">Copy</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-56 break-words drop-shadow-md">
                        {data.subscription_url}
                      </TooltipContent>
                    </Tooltip>
                    <Button
                      aria-label="Show QR Code"
                      onClick={() => showQr(data.subscription_url)}
                      size="sm"
                    >
                      <QrCode className="h-4 w-4 md:mr-2" />
                      <span className="hidden md:block">{t("showQr")}</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <CardTitle className="mb-2">Shadowsocks</CardTitle>
          <CardDescription className="text-balance mb-2">
            {t("shadowsocksDescription")}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-2">
            <Button size="sm" asChild>
              <Link href="/">Windows</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/">MacOS</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/">iOS</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/">Android</Link>
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Country</TableHead>
                <TableHead className="text-right">{t("config")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.ss_links.map((link) => (
                <TableRow key={link.link}>
                  <TableCell className="font-medium">{link.country}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button size="sm" asChild>
                        <Link href="/">
                          <LayoutGrid className="h-4 w-4 md:mr-2" />
                          <span className="hidden md:block">
                            {t("openInApp")}
                          </span>
                        </Link>
                      </Button>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            aria-label="Copy Config"
                            size="sm"
                            onClick={() => {
                              navigator.clipboard.writeText(link.link)
                            }}
                          >
                            <Copy className="h-4 w-4 md:mr-2" />
                            <span className="hidden md:block">{t("copy")}</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-56 break-words drop-shadow-md">
                          {link.link}
                        </TooltipContent>
                      </Tooltip>
                      <Button
                        aria-label="Show QR Code"
                        onClick={() => showQr(link.link)}
                        size="sm"
                      >
                        <QrCode className="h-4 w-4 md:mr-2" />
                        <span className="hidden md:block">{t("showQr")}</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <QrModal
        isOpen={isModalOpen}
        close={() => setModalOpen(false)}
        data={qr}
      />
    </Card>
  )
}
