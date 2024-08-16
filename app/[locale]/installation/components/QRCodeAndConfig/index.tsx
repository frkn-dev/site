"use client"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { useAnalytics } from "@/shared/analytics"
import { getPeer } from "@/shared/api/legacy"
import { cn } from "@/shared/clsx"
import { useScopedI18n } from "@/shared/locales/client"
import { useQuery } from "@tanstack/react-query"
import { Download } from "lucide-react"
import QRCodeGen from "qrcode"
import { useEffect, useMemo, useState } from "react"
import { toast } from "sonner"
import { createConfig } from "./create-config"
import { download } from "./download"

type Props = {
  locations: {
    code: string
    name: string
  }[]
  place: "aside" | "drawer"
}

const LOCATIONS_NAME_MAP = {
  uk: "United Kingdom",
  ru: "Russia",
  nl: "Netherlands",
  nl2: "Netherlands (2)",
  ch: "Switzerland",
}

export function QRCodeAndConfig({ locations, place }: Props) {
  const t = useScopedI18n("app.installation.qr")
  const analytics = useAnalytics()
  const [server, setServer] = useState<string>()
  const [qr, setQr] = useState<string>()
  const [conf, setConf] = useState<string>()

  const { refetch, data, isLoading } = useQuery({
    queryKey: ["peer", server],
    queryFn: ({ queryKey }) => getPeer(queryKey[1] as string),
    enabled: false,
  })

  useEffect(() => {
    if (!server) return

    setQr(undefined)
    setConf(undefined)

    refetch()
  }, [server])

  useEffect(() => {
    if (!data) return

    const config = createConfig(data)
    setConf(config)

    QRCodeGen.toDataURL(
      config,
      {
        width: 256,
        color: {
          dark: "#000",
          light: "#fff",
        },
        margin: 0,
        errorCorrectionLevel: "M",
      },
      (err, url) => {
        if (!err) {
          setQr(url)
          analytics("generatedQRcode")
        } else toast.error("Error generating QR code")
      },
    )
  }, [data])

  const imageClassName = useMemo(
    () =>
      place === "aside" ? "w-full aspect-square" : "w-64 mx-auto aspect-square",
    [place],
  )

  return (
    <div
      className={cn("p-6", {
        "bg-zinc-950 rounded-lg mt-[68px]": place === "aside",
      })}
    >
      <h3 className="font-semibold mb-0.5">{t("title")}</h3>
      <p className="mb-4 text-muted-foreground text-sm max-w-80">
        {t("description")}
      </p>
      <Select onValueChange={setServer} value={server} disabled={isLoading}>
        <SelectTrigger className="mb-4">
          <SelectValue placeholder={t("choose_server")} />
        </SelectTrigger>
        <SelectContent>
          {locations.map(({ code }) => (
            <SelectItem key={code} value={code}>
              {LOCATIONS_NAME_MAP[code as keyof typeof LOCATIONS_NAME_MAP]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {isLoading && <Skeleton className={imageClassName} />}
      {qr && (
        <div className="p-6 bg-white rounded-lg">
          <img className={imageClassName} src={qr} alt="QR code" />
        </div>
      )}
      {conf && (
        <Button
          className="w-full mt-4"
          onClick={() => {
            analytics("downloadedConfigurationFile")
            download(`frkn-${server}.conf`, conf)
          }}
        >
          {t("download")} <Download className="ml-2" size={16} />
        </Button>
      )}
    </div>
  )
}
