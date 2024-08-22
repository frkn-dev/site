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
    const json: { country: string } = await response.json()

    const country = json.country ?? "unknown"

    const providers = {
      stripe: country !== "RU",
    } as Record<"stripe", boolean>

    return providers
  }),
  register: publicProcedure
    .input(
      z.object({
        password: z.string().length(128, "Invalid hash"),
      }),
    )
    .mutation(async ({ input }) => {
      const hashedPassword = await argon2.hash(input.password, {
        salt: Buffer.from(env.PASSWORD_PEPPER),
      })

      await prisma.users.create({
        data: { password: hashedPassword },
      })

      return {
        status: "success",
      }
    }),
  login: publicProcedure
    .input(
      z.object({
        password: z.string().length(128, "Invalid hash"),
      }),
    )
    .mutation(async ({ input }) => {
      const hashedPassword = await argon2.hash(input.password, {
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
  logout: protectedProcedure.mutation(() => {
    cookies().delete("frkn_auth")

    return { success: true }
  }),
})
