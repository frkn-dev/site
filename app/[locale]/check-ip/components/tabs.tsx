"use client"
import { useState } from "react"
import DNSTest from "./dns-test"
import IPTest from "./ip-test"
import WebRTCTest from "./webrtc-test"

export default function Tabs({
  translations,
}: { translations: Record<string, string> }) {
  const [activeTab, setActiveTab] = useState<"webrtc" | "dns" | "ipv6">(
    "webrtc",
  )

  return (
    <>
      <div className="flex justify-center gap-2.5 mb-5">
        {(["webrtc", "dns", "ipv6"] as const).map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2.5 rounded cursor-pointer ${
              tab === activeTab
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {translations[`${tab}_tab`]}
          </button>
        ))}
      </div>

      <div className="p-5 rounded bg-white shadow-md min-h-[200px]">
        {activeTab === "webrtc" && <WebRTCTest t={translations} />}
        {activeTab === "dns" && <DNSTest t={translations} />}
        {activeTab === "ipv6" && <IPTest t={translations} />}
      </div>
    </>
  )
}
