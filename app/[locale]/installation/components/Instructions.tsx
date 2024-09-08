"use client"

import { Tabs } from "@/components/tabs"
import { useScopedI18n } from "@/shared/locales/client"
import { useEffect, useState } from "react"

import { Linux } from "./Linux"
import { MacOSAndWindows } from "./MacOSAndWindows"
import { Mobile } from "./Mobile"

export function Instructions() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()

    if (/mobile|android|iphone|ipad|ipod/.test(userAgent)) {
      setActiveTabIndex(0)
    } else if (userAgent.includes("win") || userAgent.includes("mac")) {
      setActiveTabIndex(1)
    } else if (userAgent.includes("linux")) {
      setActiveTabIndex(2)
    }
  }, [])

  return (
    <div>
      <Tabs
        state={[activeTabIndex, setActiveTabIndex]}
        tabs={[
          { title: "iOS & Android" },
          { title: "MacOS & Windows" },
          { title: "Linux" },
        ]}
      />
      <div className="py-8">
        {activeTabIndex === 0 && <Mobile />}
        {activeTabIndex === 1 && <MacOSAndWindows />}
        {activeTabIndex === 2 && <Linux />}
      </div>
    </div>
  )
}
