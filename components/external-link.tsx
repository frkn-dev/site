import { ExternalLink as ExternalLinkIcon } from "lucide-react"
import type { HTMLAttributes, PropsWithChildren } from "react"

export function ExternalLink({
  children,
  href,
}: PropsWithChildren<{
  href: string
}>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="text-blue-500"
    >
      {children}
      <span className="inline-flex ml-0.5">
        <ExternalLinkIcon size={14} />
      </span>
    </a>
  )
}
