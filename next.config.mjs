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

export default nextConfig
