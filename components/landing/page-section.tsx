import { cn } from "@/lib/utils"
import type { PropsWithChildren } from "react"

type Props = PropsWithChildren<{
  id?: string
  className?: string
}>

export function PageSection({ children, id, className }: Props) {
  return (
    <section
      id={id}
      className={cn("max-w-6xl w-full mx-auto px-4 py-2 md:py-32", className)}
    >
      {children}
    </section>
  )
}
