"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import type { PropsWithChildren } from "react"

export function CardRevealedPointer({ children }: PropsWithChildren) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  return (
    <div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect()

        mouseX.set(e.clientX - left)
        mouseY.set(e.clientY - top)
      }}
      className="group relative w-full overflow-hidden rounded-xl bg-background"
    >
      <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
						radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(38, 38, 38, 0.4), transparent 80%)
					`,
        }}
      />
      <div className="relative flex flex-col gap-3 rounded-xl border border-zinc-900/10 px-4 py-5">
        {children}
      </div>
    </div>
  )
}
