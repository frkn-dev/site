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
import { trpc } from "@/shared/trpc"
import { Copy, LayoutGrid, QrCode } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Main() {
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
          Connections
        </CardTitle>
        <CardDescription>
          This table provides VPN servers with a{" "}
          <span className="font-bold">{formatBytes(data.limit)}</span> daily
          limit. Copy the configuration link into recommended VPN app or scan
          the QR code using a supported VPN client to connect.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <CardTitle className="mb-2">XRay</CardTitle>
          <CardDescription className="text-balance mb-2">
            A more advanced VPN protocol offering additional features like
            stronger encryption and obfuscation. Use the provided link in an
            XRay-supported VPN client for a secure connection.
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
                <TableHead className="text-right">Config</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">All Countries</TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    <Button size="sm" asChild>
                      <Link href="/">
                        <LayoutGrid className="h-4 w-4 md:mr-2" />
                        <span className="hidden md:block">Open in App</span>
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
                      <span className="hidden md:block">Show QR</span>
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
            A lightweight proxy protocol ideal for bypassing internet
            censorship. Copy the configuration link or scan the QR code in a
            Shadowsocks-compatible app to connect quickly.
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
                <TableHead className="text-right">Config</TableHead>
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
                          <span className="hidden md:block">Open in App</span>
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
                            <span className="hidden md:block">Copy</span>
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
                        <span className="hidden md:block">Show QR</span>
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
