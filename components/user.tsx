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
import { useScopedI18n } from "@/shared/locales/client"
import { useMe } from "@/shared/services/auth/use-me"
import { trpc } from "@/shared/trpc"
import { useRouter } from "next/navigation"

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
  const router = useRouter()

  const { data: user, isLoading } = useMe()
  const { mutateAsync: logout } = trpc.user.logout.useMutation()

  const isSubscriber = Boolean(user && user.subscriptionType !== null)

  const t = useScopedI18n("header")

  if (isLoading) {
    return <Loader2 size={16} className="animate-spin" />
  }

  if (!user) {
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
        <DropdownMenuTrigger asChild className="flex items-center">
          <span title={user.id}>
            {`ID: ${user.id.split("-")[0]}...`}
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
          {isSubscriber && (
            <DropdownMenuItem asChild>
              <Link href="/account">{t("account")}</Link>
            </DropdownMenuItem>
          )}

          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(user.id)}
            className="cursor-pointer"
          >
            {t("myId")}
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() =>
              logout().then(() => {
                router.refresh()
              })
            }
            className="cursor-pointer"
          >
            {t("logout")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
