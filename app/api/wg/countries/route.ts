import { countries } from "@/app/api/wg/vars"
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    countries,
  })
}
