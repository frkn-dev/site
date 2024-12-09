import { decrypt } from "@/shared/decrypt"
import { PrismaClient } from "./mysql/index"

export const getMysqlClient = (uri: string): PrismaClient => {
  const url = decrypt(uri)
  return new PrismaClient({
    datasources: { mysql: { url } },
  })
}
