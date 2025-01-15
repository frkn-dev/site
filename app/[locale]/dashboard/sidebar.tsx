"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/shared/clsx"
import { useCurrentLocale } from "@/shared/locales/client"
import { DollarSign, Unplug } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Sidebar() {
  const pathname = usePathname()
  const locale = useCurrentLocale()

  if (locale === "ru") {
    return (
      <aside>
        <ul className="flex flex-col gap-2">
          <li>
            <Button
              variant="ghost"
              asChild
              className={cn("w-full justify-start", {
                "bg-accent": pathname.endsWith("/dashboard/connections"),
              })}
            >
              <Link href="/dashboard/connections">
                <Unplug className="w-4 h-4 mr-2" />
                <span>Подключения</span>
              </Link>
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              asChild
              className={cn("w-full justify-start", {
                "bg-accent": pathname.endsWith("/dashboard/billing"),
              })}
            >
              <Link href="/dashboard/billing">
                <DollarSign className="w-4 h-4 mr-2" />
                <span>Оплата</span>
              </Link>
            </Button>
          </li>
        </ul>
      </aside>
    )
  }

  return (
    <aside>
      <ul className="flex flex-col gap-2">
        <li>
          <Button
            variant="ghost"
            asChild
            className={cn("w-full justify-start", {
              "bg-accent": pathname.endsWith("/dashboard/connections"),
            })}
          >
            <Link href="/dashboard/connections">
              <Unplug className="w-4 h-4 mr-2" />
              <span>Connections</span>
            </Link>
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            asChild
            className={cn("w-full justify-start", {
              "bg-accent": pathname.endsWith("/dashboard/billing"),
            })}
          >
            <Link href="/dashboard/billing">
              <DollarSign className="w-4 h-4 mr-2" />
              <span>Billing</span>
            </Link>
          </Button>
        </li>
      </ul>
    </aside>
  )
}
