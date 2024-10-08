"use client"

import useTheme from "@/shared/theme/hooks/useTheme"
import type { ReactNode } from "react"

type Props = {
  icon: ReactNode
  text: string
  title: string
  textColor: string
}

export function Advantage({ icon, title, text, textColor }: Props) {
  const { theme } = useTheme()
  return (
    <div className="p-6 md:p-12 transition-colors">
      <div className="flex gap-4 mb-6">
        {icon}
        <h2
          className={`${theme === "dark" ? "text-title" : textColor} font-semibold font-mono`}
        >
          {title}
        </h2>
      </div>
      <p className="text-balance">{text}</p>
    </div>
  )
}
