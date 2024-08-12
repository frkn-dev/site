import { NextResponse } from "next/server"

export async function GET() {
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

    return response
  } catch (error) {
    console.error("/api/user/logout", error)
    return NextResponse.json({
      status: "error",
      message: "Internal server error",
    })
  }
}
