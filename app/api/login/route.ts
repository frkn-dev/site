import { caller } from "@/shared/trpc/caller"
import { TRPCError } from "@trpc/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = await caller.user.login({ password: body.password })

    return NextResponse.json(result)
  } catch (error) {
    if (error instanceof TRPCError) {
      return NextResponse.json(
        {
          status: "error",
          message: error.code,
          cause: error.cause,
        },
        { status: 422 },
      )
    }

    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}
