"use client"

import { Loader2, User2 } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout } from "@/shared/api/legacy"
import { useAuth } from "@/shared/auth/client"
import { useScopedI18n } from "@/shared/locales/client"
import { useQuery } from "@tanstack/react-query"

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
  const { data, isLoading } = useAuth()
  const t = useScopedI18n("header")
  const { refetch, isLoading: isLogoutLoading } = useQuery({
    queryKey: ["logout"],
    queryFn: logout,
    enabled: false,
  })

  if (isLoading || isLogoutLoading) {
    return <Loader2 size={16} className="animate-spin" />
  }

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
          <span title={data.user.id}>
            {"ID: " + data.user.id.split("-")[0] + "..."}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gradient-to-r from-zinc-700 to-zinc-950 ml-[15px]"
            >
              <User2 size={16} />
            </Button>
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align={align}>
          <DropdownMenuItem
            onClick={() => refetch().then(() => window.location.reload())}
            className="cursor-pointer"
          >
            {t("logout")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
