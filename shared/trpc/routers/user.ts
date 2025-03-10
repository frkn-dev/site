import { env } from "@/env"
import prisma from "@/prisma"
import argon2 from "argon2"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import { z } from "zod"
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc"
import { create } from "./xray"

const list = [
  "mk5",
  "mk6",
  "mk7",
  "mk8",
  "mk10",
  "mk11",
  "mk12",
  "mk13",
  "mk14",
]
const getRandomCluster = () => list[Math.floor(Math.random() * list.length)]

export const user = createTRPCRouter({
  me: publicProcedure.query(async ({ ctx }) => {
    return ctx.user
  }),
  register: publicProcedure
    .input(
      z.object({
        password: z.string().length(128, "Invalid hash"),
      }),
    )
    .mutation(async ({ input }) => {
      const hashedPassword = await hashPassword(input.password)

      const cluster = await prisma.clusters.findUnique({
        where: { id: getRandomCluster() },
      })

      if (cluster) {
        const user = await prisma.users.create({
          data: {
            password: hashedPassword,
            refSource: cookies().get("frkn_ref_source")?.value,
            ref: cookies().get("frkn_ref")?.value,
            cluster: cluster.id,
          },
        })
        await create(user.id, user.cluster)

        return { status: "success" }
      }

      return { status: "error" }
    }),
  login: publicProcedure
    .input(
      z.object({
        password: z.string().length(128, "Invalid hash"),
      }),
    )
    .mutation(async ({ input }) => {
      const hashedPassword = await hashPassword(input.password)
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

      return { status: "success", token }
    }),
  logout: protectedProcedure.mutation(() => {
    cookies().delete("frkn_auth")

    return { success: true }
  }),
})

export async function hashPassword(password: string): Promise<string> {
  return argon2.hash(password, {
    salt: Buffer.from(env.PASSWORD_PEPPER),
  })
}
