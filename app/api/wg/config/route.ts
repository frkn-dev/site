import { countries } from "@/app/api/wg/vars"
import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  id: z.string(),
  country: z.enum(countries),
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
      Interface: {
        PrivateKey: "AOV8JwLNENELRKIpI5qimhCeNG6sTtsgxYWNLMlTMkc=",
        Address: "10.0.1.5/32",
      },
      Peer: {
        PublicKey: "Hm/BARisqfYyatsL4PDw0zNJU1U14rYuThzoJyzLCXY=",
        Endpoint: "37.143.10.117:51820",
      },
    })
  } catch {
    return NextResponse.json({ status: "error" }, { status: 500 })
  }
}
