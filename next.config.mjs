import withBundleAnalyzer from "@next/bundle-analyzer"
import { withPlausibleProxy } from "next-plausible"

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/installation-ru.html",
        destination: "/ru/installation",
        permanent: true,
      },
      {
        source: "/installation-en.html",
        destination: "/installation",
        permanent: true,
      },
    ]
  },
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(withPlausibleProxy()(nextConfig))
