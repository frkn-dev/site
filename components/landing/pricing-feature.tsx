import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import type { PropsWithChildren } from "react"

type Props = {
  isEmpty?: boolean
}

export function PricingFeature({ children, isEmpty }: PropsWithChildren<Props>) {
  return (
    <div
      className={cn("flex items-center gap-2", {
        invisible: isEmpty,
      })}
    >
      <Check /> {children}
    </div>
  )
}
