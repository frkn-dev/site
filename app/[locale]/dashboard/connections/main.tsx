"use client"
import { QrModal } from "@/components/qr-modal"
import { SubLinkInput } from "@/components/sub-link-input"
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
import { formatExpire, formatStrategy } from "@/shared/format/strategy"
import { useCurrentLocale, useScopedI18n } from "@/shared/locales/client"
import { trpc } from "@/shared/trpc"
import { Copy, LayoutGrid, Loader2, QrCode } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import {
  AiFillAndroid,
  AiFillApple,
  AiFillWindows,
  AiOutlineAndroid,
  AiOutlineApple,
  AiOutlineLinux,
  AiOutlineMacCommand,
  AiOutlineWindows,
} from "react-icons/ai"

export function Main() {
  const t = useScopedI18n("app.dashboard")
  const locale = useCurrentLocale()
  const [isModalOpen, setModalOpen] = useState(false)
  const [qr, setQr] = useState("")
  const showQr = (data: string) => {
    setQr(data)
    setModalOpen(true)
  }
  const { data, isLoading } = trpc.xray.get.useQuery(undefined, {
    refetchOnWindowFocus: false,
  })

  if (isLoading)
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8">
        <Loader2 className="ml-4 h-6 w-6 animate-spin" />
      </div>
    )

  if (!data) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl/8 font-semibold text-foreground sm:text-xl/8">
          {t("title")}
        </CardTitle>
        <CardDescription>
          {t("status")}: {data.status}
          <br />
          {t("traffic_limit")}: {formatBytes(data.limit)}{" "}
          {formatStrategy(data.limit_reset_strategy, locale)}
          {formatExpire(data.expire, locale)}
          <br />
          {t("used_traffic")}: {formatBytes(data.used_traffic)}
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
              <Link
                href="https://apps.microsoft.com/detail/9pdfnl3qv2s5"
                target="_blank"
              >
                <AiFillWindows className="mr-1" />
                Windows
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link
                href="https://apps.apple.com/ru/app/foxray/id6448898396"
                target="_blank"
              >
                <AiFillApple className="mr-1" />
                iOS & MacOS
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link
                href="https://play.google.com/store/apps/details?id=app.hiddify.com"
                target="_blank"
              >
                <AiFillAndroid className="mr-1" />
                Android
              </Link>
            </Button>
          </div>

          <Table>
            <TableBody>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">
                  <SubLinkInput value={data.subscription_url} />
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
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
                          <span className="hidden md:block">{t("copy")}</span>
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
              <Link
                href="https://s3.amazonaws.com/outline-releases/client/windows/stable/Outline-Client.exe"
                target="_blank"
              >
                <AiOutlineWindows className="mr-1" />
                Windows
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link
                href="https://itunes.apple.com/us/app/outline-app/id1356178125"
                target="_blank"
              >
                <AiOutlineMacCommand className="mr-1" />
                MacOS
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link
                href="https://s3.amazonaws.com/outline-releases/client/linux/stable/Outline-Client.AppImage"
                target="_blank"
              >
                <AiOutlineLinux className="mr-1" />
                Linux
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link
                href="https://itunes.apple.com/us/app/outline-app/id1356177741"
                target="_blank"
              >
                <AiOutlineApple className="mr-1" />
                iOS
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link
                href="https://play.google.com/store/apps/details?id=org.outline.android.client"
                target="_blank"
              >
                <AiOutlineAndroid className="mr-1" />
                Android
              </Link>
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("country")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.ss_links.map(({ link, country }) => (
                <TableRow key={link}>
                  <TableCell className="font-medium">{country}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" asChild>
                        <Link href={link}>
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
                              navigator.clipboard.writeText(link)
                            }}
                          >
                            <Copy className="h-4 w-4 md:mr-2" />
                            <span className="hidden md:block">{t("copy")}</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-56 break-words drop-shadow-md">
                          {link}
                        </TooltipContent>
                      </Tooltip>
                      <Button
                        aria-label="Show QR Code"
                        onClick={() => showQr(link)}
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
