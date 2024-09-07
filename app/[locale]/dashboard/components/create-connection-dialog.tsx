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
import { trpc } from "@/shared/trpc"
import { zodResolver } from "@hookform/resolvers/zod"
import { TriangleAlert } from "lucide-react"
import type { PropsWithChildren } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const LOCATIONS_NAME_MAP = {
  uk: "United Kingdom",
  ru: "Russia",
  nl: "Netherlands",
  nl2: "Netherlands (2)",
  ch: "Switzerland",
} as const

const createConnectionSchema = z
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
      message: "Country is required for WireGuard protocol",
      path: ["wireguardCountry"],
    },
  )

export function CreateConnectionDialog({ children }: PropsWithChildren) {
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
          <DialogTitle>Create VPN Connection</DialogTitle>
          <DialogDescription>
            Setup your VPN connection and start browsing the web with enhanced
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <FormField
                control={form.control}
                name="protocol"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Select protocol</FormLabel>
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
                            <p className="text-xs">
                              For countries with minimal censorship. When you
                              just want to enhance privacy
                            </p>
                          </div>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="XRay"
                          aria-label="Toggle XRay"
                          className="w-full h-full font-normal text-left px-4 py-4 items-baseline"
                        >
                          <div>
                            <p className="font-medium text-base mb-1">XRay</p>
                            <p className="text-xs">
                              For countries with high censorship (Russia,
                              Belarus, China, Iran) to bypass restrictions
                            </p>
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
                    <AlertTitle>Unstable connection to WireGuard</AlertTitle>
                    <AlertDescription>
                      WireGuard may experience interruptions due to blockages.
                      For a reliable connection, use the XRay protocol.
                    </AlertDescription>
                  </Alert>
                  <FormField
                    control={form.control}
                    name="wireguardCountry"
                    render={({ field }) => (
                      <FormItem className="mb-8">
                        <FormLabel>Select server</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            disabled={isLoading}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Choose server" />
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
                          Only one server connection is available in the free
                          plan
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
                  Create Connection
                </Button>
              </DialogClose>
            </DialogFooter>
            {hasWGConfigs && (
              <div className="text-sm text-muted-foreground text-right mt-2">
                You already have a WireGuard connection. Upgrade plan to create
                a new one
              </div>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
