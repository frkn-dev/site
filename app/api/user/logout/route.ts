import { NextResponse } from "next/server"

export async function POST() {
  try {
    const response = NextResponse.json({
      status: "success",
    })

    response.cookies.set("frkn_auth", "", {
      secure: true,
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 0, // delete
    })

    response.headers.set("Cache-Control", "no-store")

    return response
  } catch (error) {
    console.error("/api/user/logout", error)
    return NextResponse.json({
      status: "error",
      message: "Internal server error",
    })
  }
}
