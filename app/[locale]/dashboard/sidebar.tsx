"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/shared/clsx"
import { DollarSign, Unplug } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Sidebar() {
  const pathname = usePathname()

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
