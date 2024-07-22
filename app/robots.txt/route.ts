import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const isProd = request.nextUrl.hostname === "frkn.org"
  const robots = ["User-agent: *"]
  isProd ? robots.push("Disallow:") : robots.push("Disallow: /")

  return new NextResponse(robots.join("\n"), {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
