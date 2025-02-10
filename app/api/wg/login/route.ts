import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  os: z.string(),
  systemVersion: z.string(),
  locale: z.string(),
  processors: z.string(),
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const body = schema.safeParse(json)
    if (!body.success) {
      return NextResponse.json(
        {
          status: "error",
          message: body.error.message,
        },
        { status: 400 },
      )
    }

    return NextResponse.json({
      id: "d7b01123-5db9-4174-ae70-7e58c4587eed",
    })
  } catch {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}
