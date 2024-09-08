"use client"

import type { Peer } from "@/shared/trpc/routers/wg"
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { QRDialog } from "@/components/qr-dialog"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { createConfig } from "@/shared/create-config"
import { download } from "@/shared/download"
import type { Config } from "@/shared/hooks/use-configs"
import { useScopedI18n } from "@/shared/locales/client"
import { trpc } from "@/shared/trpc/provider"
import {
  Book,
  Download,
  Infinity as InfinityIcon,
  Link2,
  MoreHorizontal,
  QrCode,
  Trash2,
} from "lucide-react"
import Link from "next/link"
import { useMemo } from "react"

type Props = {
  data: Config[]
}

export function ConfigsTable({ data }: Props) {
  const t = useScopedI18n("app.dashboard")

  const { mutate: remove } = trpc.wg.remove.useMutation()

  const columns: ColumnDef<Config>[] = useMemo(
    () => [
      {
        accessorKey: "type",
        header: t("table.protocol"),
        accessorFn: (data) => data.type as string,
      },
      {
        accessorKey: "country",
        header: t("table.country"),
      },
      {
        accessorKey: "limit",
        header: t("table.limit"),
        cell: ({ row }) => {
          const config = row.original

          return config.type === "WireGuard" ? (
            <InfinityIcon className="size-4" />
          ) : (
            <span>{config.limit}</span>
          )
        },
        meta: { hideOnMobile: true },
      },
      {
        accessorKey: "usedTraffic",
        header: t("table.traffic"),
        cell: ({ row }) => {
          const config = row.original

          return config.type === "WireGuard" ? (
            <span>—</span>
          ) : (
            <span>{config.usedTraffic}</span>
          )
        },
        meta: { hideOnMobile: true },
      },
      {
        accessorKey: "resetLimitStrategy",
        header: t("table.reset_limit_strategy"),
        cell: ({ row }) => {
          const config = row.original

          return config.type === "WireGuard" ? (
            <span>—</span>
          ) : (
            <span>{config.resetLimitStrategy}</span>
          )
        },
        meta: { hideOnMobile: true },
      },
      {
        id: "actions",
        cell: ({ row }) => {
          const config = row.original

          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link
                    href={`/installation/${config.type === "WireGuard" ? "wireguard" : "xray"}`}
                    className="flex"
                  >
                    <Book className="size-4 mr-2" />
                    {t("table.actions.show_instruction")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <QRDialog config={config.configJSON}>
                  <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    <QrCode className="size-4 mr-2" />
                    {t("table.actions.show_qr")}
                  </DropdownMenuItem>
                </QRDialog>
                {config.type === "WireGuard" && (
                  <DropdownMenuItem
                    onClick={() => {
                      const parsed = JSON.parse(config.configJSON) as Peer
                      const parsedConfig = createConfig(parsed)
                      download(`frkn-${config.country}.conf`, parsedConfig)
                    }}
                  >
                    <Download className="size-4 mr-2" />
                    {t("table.actions.download_config")}
                  </DropdownMenuItem>
                )}
                {config.type !== "WireGuard" && (
                  <DropdownMenuItem
                    onClick={() => {
                      navigator.clipboard.writeText(config.subscriptionUrl)
                    }}
                  >
                    <Link2 className="size-4 mr-2" />
                    {t("table.actions.copy_url")}
                  </DropdownMenuItem>
                )}
                {config.type === "WireGuard" && (
                  <DropdownMenuItem
                    className="text-red-300 hover:text-red-300 focus:text-red-300"
                    onClick={() => {
                      remove(config.configId)
                    }}
                  >
                    <Trash2 className="size-4 mr-2" />
                    {t("table.actions.delete")}
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
    ],
    [],
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className={
                      "hideOnMobile" in (header.column.columnDef.meta || {})
                        ? "hidden sm:table-cell"
                        : ""
                    }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={
                      "hideOnMobile" in (cell.column.columnDef.meta || {})
                        ? "hidden sm:table-cell"
                        : ""
                    }
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
