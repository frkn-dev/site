"use client"

import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"
import { PageSection } from "../page-section"

type letters = "F" | "R" | "K" | "N"

const animation = {
  initial: { width: 0 },
  animate: { width: "auto" },
  transition: { duration: 1, ease: "easeInOut" },
  style: {
    overflow: "hidden",
    display: "inline-block",
    whiteSpace: "nowrap",
  },
}

export function AnimatedHeadline() {
  const words: Record<letters, string[]> = useMemo(
    () => ({
      F: [
        "Freedom",
        "Fast",
        "Free",
        "Flexible",
        "Frictionless",
        "Future-ready",
        "Fortress",
        "Fortified",
      ],
      R: ["Robustness", "Reliable", "Resilient", "Riskless"],
      K: ["Keyless", "Kryptographic", "Krypton-like"],
      N: ["Network", "Node", "Navigation"],
    }),
    [],
  )

  const [currentWords, setCurrentWords] = useState({
    F: words.F[0],
    R: words.R[0],
    K: words.K[0],
    N: words.N[0],
  })

  const keysDict: Record<letters, Array<letters>> = {
    F: ["R", "K", "N"],
    R: ["F", "K", "N"],
    K: ["F", "R", "N"],
    N: ["F", "R", "K"],
  }

  const [lastKey, setLastKey] = useState<keyof typeof keysDict>("F")

  useEffect(() => {
    const interval = setInterval(() => {
      const randomKey = keysDict[lastKey][
        Math.floor(Math.random() * keysDict[lastKey].length)
      ] as letters

      const randomWord =
        words[randomKey as keyof typeof words][
          Math.floor(
            Math.random() * words[randomKey as keyof typeof words].length,
          )
        ]
      setCurrentWords((prev) => ({ ...prev, [randomKey]: randomWord }))
      setLastKey(randomKey)
    }, 2000)
    return () => clearInterval(interval)
  }, [words, lastKey])

  return (
    <PageSection className="md:py-8">
      <div className="w-fit flex gap-3 mx-auto py-8 font-mono font-bold text-sm md:text-xl lg:text-3xl xl:text-4xl">
        FRKN:{" "}
        {["F", "R", "K", "N"].map((key, index) => {
          return (
            <motion.span
              key={`${currentWords[key]}-${index}`}
              initial={animation.initial}
              animate={key === lastKey ? animation.animate : { width: "auto" }}
              transition={animation.transition}
              style={animation.style}
            >
              {`${currentWords[key]}${index !== 3 ? "," : ""}`}
            </motion.span>
          )
        })}
      </div>
    </PageSection>
  )
}
