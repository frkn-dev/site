"use client"
import { Tabs } from "@/components/tabs"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { useScopedI18n } from "@/shared/locales/client"
import { QrCode } from "lucide-react"
import { useEffect, useState } from "react"

import { Linux } from "./Linux"
import { MacOSAndWindows } from "./MacOSAndWindows"
import { Mobile } from "./Mobile"
import { QRCodeAndConfig } from "./QRCodeAndConfig"

type Props = {
  locations: {
    code: string
    name: string
  }[]
}

export function Instructions({ locations }: Props) {
  const t = useScopedI18n("app.installation")
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()

    if (userAgent.includes("win") || userAgent.includes("mac")) {
      setActiveTabIndex(1)
    } else if (userAgent.includes("linux")) {
      setActiveTabIndex(2)
    }
  }, [])

  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="inline-flex lg:hidden w-full mb-4">
            <QrCode className="mr-2" size={16} />
            {t("qr.mobile_button")}
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <QRCodeAndConfig locations={locations} place="drawer" />
        </DrawerContent>
      </Drawer>

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
