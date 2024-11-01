import { NextResponse } from "next/server"

const url = "https://frkn.org/ru/account?status=successful"

export async function GET() {
  return NextResponse.redirect(url, 302)
}

export async function POST() {
  return NextResponse.redirect(url, 302)
}
