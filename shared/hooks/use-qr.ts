import QRCodeGen from "qrcode"
import { useCallback, useState } from "react"

export function useQR() {
  const [qr, setQr] = useState<string | undefined>(undefined)

  const generateQR = useCallback((data: string) => {
    QRCodeGen.toDataURL(data, (err, url) => {
      if (!err) setQr(url)
    })
  }, [])

  return [qr, generateQR] as const
}
