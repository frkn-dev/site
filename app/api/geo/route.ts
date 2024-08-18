import { geolocation } from "@vercel/edge"

export const runtime = "edge"
export const revalidate = 3600

export function GET(request: Request) {
  const data = geolocation(request)

  return Response.json({
    country: data.country,
  })
}
