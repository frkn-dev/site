import prisma from "@/prisma"
import { kv } from "@vercel/kv"
import { NextResponse } from "next/server"

export const revalidate = 300

export async function GET() {
  const databaseConnectionStatus = await checkDatabaseConnection()
  const kvConnectionStatus = await checkKvConnection()

  const response = NextResponse.json({
    status: "ok",
    database: databaseConnectionStatus ? "connected" : "disconnected",
    cache: kvConnectionStatus ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  })

  response.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  )

  return response
}

async function checkDatabaseConnection(): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`
    return true
  } catch (error) {
    console.error("Prisma check failed:", error)
    return false
  }
}

async function checkKvConnection(): Promise<boolean> {
  try {
    const result = await kv.ping()
    if (result === "PONG") {
      return true
    }

    console.error("Unexpected Redis response:", result)
    return false
  } catch (error) {
    console.error("Redis check failed:", error)
    return false
  }
}
