declare namespace NodeJS {
  interface ProcessEnv {
    POSTGRES_PRISMA_URL: string
    POSTGRES_URL_NON_POOLING: string
    PASSWORD_PEPPER: string
    JWT_SECRET: string
  }
}
