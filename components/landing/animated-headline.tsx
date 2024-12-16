"use client"

import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"
import { PageSection } from "../page-section"

export function AnimatedHeadline() {
  const words: Record<"F" | "R" | "K" | "N", string[]> = useMemo(
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

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.F.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.F.length])

  const animations = useMemo(
    () => [
      {
        initial: { width: 0 },
        animate: { width: "auto" },
        transition: { duration: 1, ease: "easeInOut" },
        style: {
          overflow: "hidden",
          display: "inline-block",
          whiteSpace: "nowrap",
        },
      },
      {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 },
        style: {},
      },
      {
        initial: { scale: 0 },
        animate: { scale: 1 },
        transition: { duration: 0.5 },
        style: {},
      },
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
        style: {},
      },
    ],
    [],
  )

  const getRandomAnimation = () =>
    animations[Math.floor(Math.random() * animations.length)]

  return (
    <PageSection className="md:py-8">
      <h2
        className="w-fit mx-auto py-8 font-mono font-bold text-4xl"
        style={{ minWidth: "200px", textAlign: "center" }}
      >
        FRKN:
        <div className="flex flex-col items-center">
          {["F", "R", "K", "N"].map((key, index) => {
            const word =
              words[key as keyof typeof words][
                currentIndex % words[key as keyof typeof words].length
              ]
            const animation = getRandomAnimation()

            if (!animation) {
              return null
            }

            return (
              <motion.div
                key={`${word}-${currentIndex}-${index}`}
                initial={animation.initial}
                animate={animation.animate}
                transition={{ ...animation.transition, delay: index * 0.5 }}
                style={animation.style}
              >
                {word}
              </motion.div>
            )
          })}
        </div>
      </h2>
    </PageSection>
  )
}
