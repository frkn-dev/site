import withBundleAnalyzer from "@next/bundle-analyzer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/installation-ru.html",
        destination: "/ru/connect",
        permanent: true,
      },
      {
        source: "/installation-en.html",
        destination: "/connect",
        permanent: true,
      },
    ]
  },
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig)
