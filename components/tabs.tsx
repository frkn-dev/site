// @NOTE: in case you are using Next.js
"use client"

import { useState } from "react"

import { motion } from "framer-motion"

import { cn } from "@/shared/clsx"

type Tab = {
  title: string
}

type Props = {
  containerClassName?: string
  activeTabClassName?: string
  tabClassName?: string
  tabs: Tab[]
  state: [number, (index: number) => void]
}

export function Tabs({
  containerClassName,
  activeTabClassName,
  tabClassName,
  tabs,
  state,
}: Props) {
  const [activeIdx, setActiveIdx] = state

  return (
    <div
      className={cn(
        "relative flex flex-wrap items-center justify-center gap-2",
        containerClassName,
      )}
    >
      {tabs.map((tab, index) => (
        <button
          key={tab.title}
          onClick={() => setActiveIdx(index)}
          className={cn(
            "group relative z-[1] rounded-lg px-4 py-2 flex-1 hover:bg-zinc-900 transition-colors",
            { "z-0": activeIdx === index },
            tabClassName,
          )}
        >
          {activeIdx === index && (
            <motion.div
              layoutId="clicked-button"
              transition={{ duration: 0.2 }}
              className={cn(
                "absolute inset-0 rounded-lg bg-zinc-800",
                activeTabClassName,
              )}
            />
          )}

          <span
            className={cn(
              "relative text-sm block font-medium duration-200",
              activeIdx === index ? "text-white delay-100" : "text-white",
            )}
          >
            {tab.title}
          </span>
        </button>
      ))}
    </div>
  )
}
