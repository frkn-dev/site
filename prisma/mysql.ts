import { PrismaClient } from "./mysql/index"

let prismaMysql: PrismaClient

if (process.env.NODE_ENV === "production") {
  prismaMysql = new PrismaClient()
} else {
  const globalWithPrisma = global as typeof global & {
    prismaMysql?: PrismaClient
  }
  if (!globalWithPrisma.prismaMysql) {
    globalWithPrisma.prismaMysql = new PrismaClient()
  }
  prismaMysql = globalWithPrisma.prismaMysql
}

export default prismaMysql
