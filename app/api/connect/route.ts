import { caller } from "@/shared/trpc/caller"
import { NextResponse } from "next/server"

export const revalidate = 10

export async function GET() {
  try {
    const result = await caller.xray.get()

    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}
