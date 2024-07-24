"use client"
import type { Locations, Peer } from "@/shared/api"
import { getLocations, getPeer } from "@/shared/api"
import { download } from "@/shared/download"
import QRCodeGen from "qrcode"
import { useEffect, useState } from "react"

export function QRCode() {
  const [isLoading, setIsLoading] = useState(false)
  const [location, setLocation] = useState("")
  const [config, setConfig] = useState("")
  const [qrCodeUrl, setQrCodeUrl] = useState("")
  const [servers, setServers] = useState<Locations>([
    { code: "", name: "🤷‍♂️ Не выбрано" },
  ])
  useEffect(() => {
    getLocations().then((data) => {
      if (data) {
        setServers([
          ...servers,
          ...data.map(({ code }) => ({
            code,
            name: codeToCountry(code) + ` (${code})`,
          })),
        ])
      }
    })
  }, [])

  return (
    <>
      <h1 className="text-xl font-bold mb-4">QR-код и файл конфигурации</h1>
      <h2 className="text-lg font-semibold">Сервер:</h2>
      <select
        disabled={servers.length <= 1}
        onChange={({ target }) => {
          if (!target.value) {
            setQrCodeUrl("")
            return setLocation("")
          }

          setIsLoading(true)
          getPeer(target.value).then((peer) => {
            setIsLoading(false)
            setLocation(target.value)
            if (!peer) return alert("Server error")
            const config = createConfig(peer)
            setConfig(config)

            QRCodeGen.toDataURL(
              config,
              {
                width: 256,
                color: {
                  dark: "#000000",
                  light: "#FFFFFF", // #ffffff00 = transparent
                },
                margin: 0,
                errorCorrectionLevel: "M",
              },
              (err, url) => {
                if (!err) setQrCodeUrl(url)
              },
            )
          })
        }}
      >
        {servers.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
      <br />

      {isLoading && "Generating QR Code..."}
      {!isLoading && qrCodeUrl ? <img src={qrCodeUrl} alt="QR Code" /> : null}

      <br />
      <button
        className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        disabled={location === "" || isLoading}
        onClick={() => download(`frkn-${location}.conf`, config)}
      >
        {location ? "Скачать файл конфигурации" : "Выберите сервер"}
      </button>
    </>
  )
}

function codeToCountry(code: string): string {
  const codeMap = {
    uk: "🇬🇧 United Kingdom",
    ru: "🇷🇺 Russia",
    nl: "🇳🇱 Netherlands",
    ch: "🇨🇭 Switzerland",
  } as const

  const noDigitsCode = code.replace(/\d/g, "") as keyof typeof codeMap
  return codeMap[noDigitsCode]
}

function createConfig({ iface, peer }: Peer): string {
  return `[Interface]
Address = ${iface.address}
DNS = ${iface.dns}
PrivateKey = ${iface.key}

[Peer]
PublicKey = ${peer.pubkey}
PresharedKey = ${peer.psk}
AllowedIPs = ${peer.allowed_ips}
Endpoint = ${peer.endpoint}
PersistentKeepalive = 25`
}
