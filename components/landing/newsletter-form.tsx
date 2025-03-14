"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { PageSection } from "@/components/page-section"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useCurrentLocale, useScopedI18n } from "@/shared/locales/client"
import { trpc } from "@/shared/trpc/provider"

export function NewsletterForm() {
  const t = useScopedI18n("newsletter_form")
  const tc = useScopedI18n("components")
  const locale = useCurrentLocale()
  const schema = z.object({
    email: z.string().email({ message: tc("email.invalid") }),
  })
  type FormData = z.infer<typeof schema>
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  })
  const mutation = trpc.emailNewsletter.create.useMutation()

  async function onSubmit(data: FormData) {
    mutation.mutate(
      {
        email: data.email,
        lang: locale,
      },
      {
        onSuccess: (result) => {
          if (result?.error) {
            toast.error(tc("email.invalid"))
          } else {
            toast.success(t("success"))
          }
        },
      },
    )
  }

  return (
    <PageSection className="md:py-16">
      <h2 className="w-fit mx-auto py-8 font-mono font-bold text-4xl">
        {t("title")}
      </h2>
      <div className="w-fit mx-auto">
        <p className="mb-2 max-w-lg">{t("description")}</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
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
            <Button type="submit" disabled={mutation.isPending}>
              {t("subscribe")}
            </Button>
          </form>
        </Form>
      </div>
    </PageSection>
  )
}
