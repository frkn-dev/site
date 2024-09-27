import prisma from "@/prisma"
import { NextResponse } from "next/server"

export const revalidate = 300

export async function GET() {
  const databaseConnectionStatus = await checkDatabaseConnection()

  const response = NextResponse.json({
    status: "ok",
    database: databaseConnectionStatus ? "connected" : "disconnected",
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
