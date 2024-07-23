"use client"

import { EvervaultCard, Icon } from "@/components/ui/evervault-card"
import { Check } from "lucide-react"

type Props = {
  title: "free" | "pro"
}

export function PricingCard({ title }: Props) {
  return (
    <div className="border border-white/[0.2] flex flex-col items-start p-4 relative">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
      <EvervaultCard text={title} />
      <div>
        <div className="flex items-center">
          <Check /> Feature 1
        </div>
        <div className="flex items-center">
          <Check /> Feature 2
        </div>
        <div className="flex items-center">
          <Check /> Feature 3
        </div>
      </div>
    </div>
  )
}
