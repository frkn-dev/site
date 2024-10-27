"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useScopedI18n } from "@/shared/locales/client"
import { trpc } from "@/shared/trpc"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

export function DeleteLavaSubscriptionsButton() {
  const t = useScopedI18n("app.account.subscription")
  const tc = useScopedI18n("components")
  const [showEmail, setShowEmail] = useState(false)

  const schema = z.object({
    email: z.string().email({
      message: tc("email.invalid"),
    }),
  })
  type FormData = z.infer<typeof schema>
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  })

  const lava = trpc.lava.unsubscribe.useMutation({
    onSuccess(data) {
      if (data?.status === "ok") {
        toast.success("👍")
        setShowEmail(false)
      } else {
        toast.error(data?.message)
      }
    },
  })

  return (
    <div>
      <Button type="button" onClick={() => setShowEmail(!showEmail)}>
        {t("cancel")}
      </Button>

      {showEmail && (
        <div className="mt-2">
          <p>{t("cancel_desc")}</p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) =>
                lava.mutate({
                  email: data.email,
                }),
              )}
              className="flex gap-2 w-full"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="johndoe@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={lava.isPending}>
                {lava.isPending ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : null}
                {t("cancel_btn")}
              </Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  )
}
