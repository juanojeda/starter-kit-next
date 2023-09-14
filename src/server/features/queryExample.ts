import { z } from "zod"
import { publicProcedure } from "~/server/middleware/trpc"
import { PrismaClient } from "@prisma/client"

// The controller
export const queryExample = {
  queryExample: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      try {
        return service(input.text)
      } catch (err) {
        console.log(err)
        throw err
      }
    }),
}

async function service(text: string) {
  const googleAuthConfigured: boolean = process.env.GOOGLE_CLIENT_ID
    ? true
    : false

  const prisma = new PrismaClient()

  const countPosts = await prisma.post.count()
  const countUsers = await prisma.user.count()
  const countUsersWithPosts = await prisma.user.count({
    where: {
      posts: {
        some: {
          authorId: {
            not: null,
          },
        },
      },
    },
  })

  return {
    greeting: `Hello ${text}`,
    authorCount: countUsersWithPosts,
    postCount: countPosts,
    userCount: countUsers,
    googleAuthenticationConfigured: googleAuthConfigured,
  }
}
