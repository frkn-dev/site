import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { createConfig } from "@/shared/create-config"
import { download } from "@/shared/download"
import type { Config } from "@/shared/hooks/use-configs"
import { useQR } from "@/shared/hooks/use-qr"
import type { Peer } from "@/shared/trpc/routers/wg"
import { Copy, Download } from "lucide-react"
import { useEffect, useMemo } from "react"

export function ConfigCard({ config }: { config: Config }) {
  const [qr, generateQR] = useQR()

  const wgConfig = useMemo(() => {
    if (config.type !== "WireGuard") return null

    const parsed = JSON.parse(config.data.config) as Peer
    return createConfig(parsed)
  }, [config])

  useEffect(() => {
    if (wgConfig) {
      generateQR(wgConfig)
    }
  }, [wgConfig, generateQR])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          {config.type}
          {config.type === "WireGuard" ? ` (${config.data.country})` : ""}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{config.type}</SheetTitle>
          <SheetDescription>
            Check installation instruction here
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          {(config.type === "XRay" || config.type === "Shadowsocks") && (
            <div>
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <div>Limit:</div>
                  <div>
                    <span className="font-mono">
                      {Math.round(config.data.limit / (1024 * 1024))}
                    </span>
                    <span>MB</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>Used traffic:</div>
                  <div>
                    <span className="font-mono">
                      {Math.round(config.data.usedTraffic / (1024 * 1024))}
                    </span>
                    <span>MB</span>
                  </div>
                </div>
              </div>

              {config.data.links.map((link) => (
                <div key={link} className="flex items-center gap-2">
                  <div className="truncate font-mono">{link}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Copy"
                    className="flex-shrink-0"
                    onClick={(e) => {
                      navigator.clipboard.writeText(link)

                      const button = e.currentTarget
                      const originalInnerHTML = button.innerHTML
                      button.innerHTML =
                        '<svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'

                      setTimeout(() => {
                        button.innerHTML = originalInnerHTML
                      }, 1000)
                    }}
                  >
                    <Copy className="size-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
          {config.type === "WireGuard" && wgConfig && (
            <div>
              <div className="p-6 bg-white rounded-lg">
                <img className="w-full aspect-square" src={qr} alt="QR code" />
              </div>
              <Button
                className="w-full mt-4"
                onClick={() => {
                  download(`frkn-${config.data.country}.conf`, wgConfig)
                }}
              >
                Download <Download className="ml-2" size={16} />
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
