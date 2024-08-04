"use client"

import { User2 } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/shared/auth/client"
import { useScopedI18n } from "@/shared/locales/client"

type Props = {
  withUserClassName?: string
  withoutUserClassName?: string
  align?: "center" | "end" | "start" | undefined
}

export function User({
  withUserClassName,
  withoutUserClassName,
  align = "end",
}: Props) {
  const { data } = useAuth()

  const t = useScopedI18n("header")

  if (data?.status !== "success") {
    return (
      <div className={withoutUserClassName}>
        <Button asChild>
          <Link href="/registration">{t("register")}</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/auth">{t("login")}</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className={withUserClassName}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-gradient-to-r from-zinc-700 to-zinc-950"
          >
            <User2 size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align={align}>
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
