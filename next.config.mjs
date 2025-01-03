import withBundleAnalyzer from "@next/bundle-analyzer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/ru/connect",
        destination: "/ru/dashboard/connections",
        permanent: true,
      },
      {
        source: "/connect",
        destination: "/dashboard/connections",
        permanent: true,
      },
    ]
  },
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig)
