import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useQR } from "@/shared/hooks/use-qr"
import { type PropsWithChildren, useEffect } from "react"

type Props = {
  config: string
}

export function QRDialog({ children, config }: PropsWithChildren<Props>) {
  const [qr, generateQR] = useQR()

  useEffect(() => {
    generateQR(config)
  }, [config, generateQR])

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className="p-6 bg-white">
          <img className="w-full aspect-square" src={qr} alt="QR code" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
