import type { Metadata } from "next"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import "./globals.css"

const title = "FRKN VPN"
const description = "Cвободный VPN для свободных людей"
const icon = "/icon512x512.png"
const url = "https://frkn.org"

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon,
  },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "FRKN",
    images: [
      {
        url: url + icon,
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    site: "@frkn_org",
    images: url + icon,
  },
}

type Props = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="bg-[#000000]">
        <div className="max-w-[1120px] px-[40px] mx-auto max-lg:px-[15px]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
