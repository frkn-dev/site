declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string
    PASSWORD_PEPPER: string
    JWT_SECRET: string
  }
}
