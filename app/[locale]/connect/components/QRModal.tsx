import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import QRCodeGen from "qrcode"
import { useEffect, useState } from "react"

type Props = { isOpen: boolean; close: () => void; data: string }

export function QrModal({ isOpen, close, data }: Props) {
  const [qr, setQr] = useState<string>()
  useEffect(() => {
    if (!data) return

    QRCodeGen.toDataURL(
      data,
      {
        width: 256,
        color: {
          dark: "#000",
          light: "#fff",
        },
        margin: 0,
        errorCorrectionLevel: "M",
      },
      (err, url) => {
        if (!err) {
          setQr(url)
        }
      },
    )
  }, [data])

  return (
    <Dialog open={isOpen} onOpenChange={() => close()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>QR</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2">
          {qr && (
            <div className="p-6 bg-white rounded-lg">
              <img className="w-full aspect-square" src={qr} alt="QR code" />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
