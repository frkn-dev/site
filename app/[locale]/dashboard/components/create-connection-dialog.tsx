"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useScopedI18n } from "@/shared/locales/client"
import { trpc } from "@/shared/trpc"
import { zodResolver } from "@hookform/resolvers/zod"
import { TriangleAlert } from "lucide-react"
import { type PropsWithChildren, useMemo } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const LOCATIONS_NAME_MAP = {
  uk: "United Kingdom",
  ru: "Russia",
  nl: "Netherlands",
  nl2: "Netherlands (2)",
  ch: "Switzerland",
} as const

export function CreateConnectionDialog({ children }: PropsWithChildren) {
  const t = useScopedI18n("app.dashboard")

  const createConnectionSchema = useMemo(() => {
    return z
      .object({
        protocol: z.enum(["WireGuard", "XRay"]),
        wireguardCountry: z
          .enum(["uk", "ru", "nl", "nl2", "ch"])
          .refine((data) => Object.keys(LOCATIONS_NAME_MAP).includes(data), {
            message: "Invalid country",
          })
          .optional(),
      })
      .refine(
        (data) => {
          if (data.protocol === "WireGuard") {
            return !!data.wireguardCountry
          }
          return true
        },
        {
          message: t("country_validation_error"),
          path: ["wireguardCountry"],
        },
      )
  }, [])

  const { data: locations, isLoading } = trpc.wg.locations.useQuery()
  const createWg = trpc.wg.create.useMutation()
  const createXray = trpc.xray.create.useMutation()
  const { data: configs, isLoading: isConfigsLoading } = trpc.wg.get.useQuery()

  const form = useForm<z.infer<typeof createConnectionSchema>>({
    resolver: zodResolver(createConnectionSchema),
    defaultValues: {
      protocol: "WireGuard",
      wireguardCountry: undefined,
    },
  })

  function onSubmit(values: z.infer<typeof createConnectionSchema>) {
    if (values.protocol === "WireGuard" && values.wireguardCountry) {
      createWg.mutate({ location: values.wireguardCountry })
    } else {
      createXray.mutate()
    }
  }

  const hasWGConfigs =
    form.watch("protocol") === "WireGuard" && configs && configs.length > 0
  const isSubmitDisabled = isConfigsLoading || hasWGConfigs

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>{t("create_vpn_connection")}</DialogTitle>
          <DialogDescription>{t("setup_vpn_connection")}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <FormField
                control={form.control}
                name="protocol"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>{t("select_protocol")}</FormLabel>
                    <FormControl>
                      <ToggleGroup
                        type="single"
                        className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                        variant="outline"
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <ToggleGroupItem
                          value="WireGuard"
                          aria-label="Toggle WireGuard"
                          className="w-full h-full font-normal text-left px-4 py-4 items-baseline"
                        >
                          <div>
                            <p className="font-medium text-base mb-1">
                              WireGuard
                            </p>
                            <p className="text-xs">{t("wg_description")}</p>
                          </div>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="XRay"
                          aria-label="Toggle XRay"
                          className="w-full h-full font-normal text-left px-4 py-4 items-baseline"
                        >
                          <div>
                            <p className="font-medium text-base mb-1">XRay</p>
                            <p className="text-xs">{t("xray_description")}</p>
                          </div>
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {form.watch("protocol") === "WireGuard" && locations && (
                <div>
                  <Alert variant="warning" className="mb-4">
                    <TriangleAlert className="size-4" />
                    <AlertTitle>{t("wg_alert.title")}</AlertTitle>
                    <AlertDescription>
                      {t("wg_alert.description")}
                    </AlertDescription>
                  </Alert>
                  <FormField
                    control={form.control}
                    name="wireguardCountry"
                    render={({ field }) => (
                      <FormItem className="mb-8">
                        <FormLabel>{t("select_server")}</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            disabled={isLoading}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={t("choose_server")} />
                            </SelectTrigger>
                            <SelectContent>
                              {locations.map(({ code }) => (
                                <SelectItem key={code} value={code}>
                                  {
                                    LOCATIONS_NAME_MAP[
                                      code as keyof typeof LOCATIONS_NAME_MAP
                                    ]
                                  }
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormDescription>
                          {t("only_one_server")}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" disabled={isSubmitDisabled}>
                  {t("create_connection")}
                </Button>
              </DialogClose>
            </DialogFooter>
            {hasWGConfigs && (
              <div className="text-sm text-muted-foreground text-right mt-2">
                {t("upgrade_plan")}
              </div>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
