import { PageSection } from "@/components/page-section"
import { isLoggedIn } from "@/shared/guards"
import type { PropsWithChildren } from "react"

export default async function Layout({ children }: PropsWithChildren) {
  await isLoggedIn()

  return <PageSection className="md:py-8">{children}</PageSection>
}
