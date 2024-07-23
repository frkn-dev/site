import type { ReactNode } from "react"

type Props = {
  icon: ReactNode
  text: string
  title: string
}

export function Advantage({ icon, title, text }: Props) {
  return (
    <div className="p-6 md:p-12 border border-zinc-950 hover:bg-zinc-950 transition-colors">
      <div className="flex gap-4 mb-6">
        {icon}
        <h2 className="text-zinc-200 font-semibold font-mono">{title}</h2>
      </div>
      <p className="text-balance">{text}</p>
    </div>
  )
}
