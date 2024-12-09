import { PrismaClient } from "./mysql/index"

export const getMysqlClient = (url: string): PrismaClient => {
  return new PrismaClient({
    datasources: { mysql: { url } },
  })
}
