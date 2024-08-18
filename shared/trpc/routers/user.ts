import { env } from "@/env"
import prisma from "@/prisma"
import argon2 from "argon2"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import { z } from "zod"
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc"

export const user = createTRPCRouter({
  me: publicProcedure.query(async ({ ctx }) => {
    return ctx.user
  }),
  paymentProviders: protectedProcedure.query(async () => {
    const response = await fetch(env.HOST + "/api/geo")
    const json = (await response.json()) as { country: string }

    const country = (json.country ?? "unknown").toLowerCase()

    const providers = {
      stripe: country !== "RU",
    } as Record<"stripe", boolean>

    return providers
  }),
  register: publicProcedure
    .input(z.string())
    .mutation(async ({ input: password }) => {
      const validation = z
        .string()
        .length(128, "Invalid hash")
        .safeParse(password)

      if (!validation.success) {
        return {
          status: "error",
          message: validation.error.message,
        }
      }

      const hashedPassword = await argon2.hash(password, {
        salt: Buffer.from(env.PASSWORD_PEPPER),
      })

      await prisma.users.create({
        data: { password: hashedPassword },
      })

      return {
        status: "success",
        message: "",
      }
    }),
  login: publicProcedure
    .input(z.string())
    .mutation(async ({ input: password }) => {
      const validation = z
        .string()
        .length(128, "Invalid hash")
        .safeParse(password)

      if (!validation.success) {
        return {
          status: "error",
          message: validation.error.message,
        }
      }

      const hashedPassword = await argon2.hash(password, {
        salt: Buffer.from(env.PASSWORD_PEPPER),
      })

      const user = await prisma.users.findUnique({
        where: { password: hashedPassword },
      })

      if (!user) {
        return {
          status: "error",
          message: "Invalid credentials",
        }
      }

      const token = jwt.sign({ id: user.id }, env.JWT_SECRET, {
        expiresIn: "1y",
      })

      cookies().set("frkn_auth", token, {
        secure: true,
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 31536000, // 1y
      })

      return {
        status: "success",
        message: "",
      }
    }),
  logout: protectedProcedure.mutation(async () => {
    cookies().delete("frkn_auth")

    return { success: true }
  }),
})
