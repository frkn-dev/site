"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { sha3_512 } from "js-sha3"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as UIForm,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { login } from "@/shared/api/legacy"
import { useScopedI18n } from "@/shared/locales/client"
import { validateMnemonic } from "@scure/bip39"
import { wordlist } from "@scure/bip39/wordlists/english"
import { useMutation } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useMemo } from "react"
import { toast } from "sonner"

export function Form() {
  const t = useScopedI18n("app.auth")

  const { push } = useRouter()

  const FormSchema = useMemo(() => {
    return z.object({
      mnemonic: z
        .string()
        .refine((value) => validateMnemonic(value, wordlist), {
          message: t("validation_error"),
        }),
    })
  }, [])

  const { mutateAsync, isPending } = useMutation({
    mutationFn: login,
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mnemonic: "",
    },
  })

  async function onSubmit({ mnemonic }: z.infer<typeof FormSchema>) {
    const result = await mutateAsync(sha3_512(mnemonic))
    if (result?.status === "success") {
      push("/installation")
    } else {
      toast.error(result?.message)
    }
  }

  return (
    <div className="h-full bg-gradient-to-t from-zinc-950 grid place-items-center">
      <div className="w-full max-w-lg px-4">
        <UIForm {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 p-6 rounded-lg border-zinc-950 border"
          >
            <h1 className="text-xl font-bold">{t("title")}</h1>
            <FormField
              control={form.control}
              name="mnemonic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("phrase")}</FormLabel>
                  <FormControl>
                    <Input
                      id="mnemonic"
                      placeholder="frog roof kitchen nature ..."
                      autoFocus
                      className="font-mono"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>{t("description")}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending}>
              {isPending && <Loader2 size={16} className="mr-2 animate-spin" />}
              {t("login")}
            </Button>
            <Button type="button" variant="link" asChild>
              <Link href="/registration">{t("register")}</Link>
            </Button>
          </form>
        </UIForm>
      </div>
    </div>
  )
}
