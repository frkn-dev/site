"use client"

import { CardRevealedPointer } from "@/components/card-revealed-pointer"
import { PageSection } from "@/components/page-section"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { useAnalytics } from "@/shared/analytics"
import { cn } from "@/shared/clsx"
import { useScopedI18n } from "@/shared/locales/client"
import { trpc } from "@/shared/trpc"
import { Copy, Loader2, User2 } from "lucide-react"
import Link from "next/link"
import { useCallback, useState } from "react"
import { toast } from "sonner"

export function Form() {
  const t = useScopedI18n("app.registration")
  const analytics = useAnalytics()
  const [mnemonic, setMnemonic] = useState("")

  const { mutateAsync: register, isPending } = trpc.user.register.useMutation({
    onError() {
      toast.error(t("description.error"))
    },
  })

  const handleConfirm = useCallback(async () => {
    const { generateMnemonic } = await import("@scure/bip39")
    const { wordlist } = await import("@scure/bip39/wordlists/english")
    const { sha3_512 } = await import("js-sha3")

    const mnemonic = generateMnemonic(wordlist)

    setMnemonic(mnemonic)

    await register({ password: sha3_512(mnemonic) })
    analytics("registration")
  }, [])

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(mnemonic)
    toast.success(t("generated.copy_success"))
  }, [mnemonic])

  return (
    <div className="h-full bg-gradient-to-t from-zinc-950">
      <PageSection className="md:py-16">
        {mnemonic ? (
          <div className="mx-auto w-fit text-center transition-opacity duration-1000 ease-in opacity-0 animate-fade-in">
            <h1 className="text-3xl font-bold mb-6">{t("generated.title")}</h1>
            <CardRevealedPointer>
              <p className="font-mono text-xl">{mnemonic}</p>
            </CardRevealedPointer>
            <div className="mt-6 flex items-center justify-center gap-2">
              <Button variant="outline" onClick={handleCopy}>
                <Copy size={16} className="mr-2" /> {t("generated.copy")}
              </Button>
              <Button asChild>
                <Link href="/auth">
                  <User2 size={16} className="mr-2" /> {t("generated.login")}
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-muted-foreground text-sm">
              {t("generated.warning")}
            </p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
            <div className="text-balance space-y-2 max-w-3xl mb-6">
              <p>{t("description.part1")}</p>
              <p>{t("description.part2")}</p>
              <p>{t("description.part3")}</p>
              <ul className="list-disc pl-6">
                <li>{t("description.list_item1")}</li>
                <li>{t("description.list_item2")}</li>
                <li>{t("description.list_item3")}</li>
                <li className="font-bold">{t("description.list_item4")}</li>
              </ul>
              <p>{t("description.part4")}</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <HoverBorderGradient
                  aria-disabled={isPending}
                  containerClassName={cn({
                    "pointer-events-none opacity-50": isPending,
                  })}
                >
                  <div className="flex items-center gap-2">
                    {isPending && (
                      <Loader2 size={16} className="animate-spin" />
                    )}
                    {t("confirm_dialog.button")}
                  </div>
                </HoverBorderGradient>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader className="text-balance">
                  <AlertDialogTitle className="sr-only">
                    {t("confirm_dialog.title")}
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-base text-foreground">
                    {t("confirm_dialog.text")}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>
                    {t("confirm_dialog.cancel")}
                  </AlertDialogCancel>
                  <AlertDialogAction onClick={handleConfirm}>
                    {t("confirm_dialog.confirm")}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Link
              href="/auth"
              className="block underline underline-offset-2 text-muted-foreground mt-6 text-sm"
            >
              {t("description.already_registered")}
            </Link>
          </>
        )}
      </PageSection>
    </div>
  )
}
