"use client"

import { Tabs } from "@/components/tabs"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { QrCode } from "lucide-react"
import { useState } from "react"

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
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="inline-flex lg:hidden w-full mb-4">
            <QrCode className="mr-2" size={16} />
            Конфиг и QR-код
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
