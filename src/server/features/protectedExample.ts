import { PrismaClient } from "@prisma/client"
import { protectedProcedure } from "~/server/middleware/trpc"

type User = {
  email: string
  id: string
  name: string
}
type UserSession = {
  session: {
    user: User
  }
}

// The controller
export const protectedExample = {
  protectedExample: protectedProcedure.query(
    ({ ctx }: { ctx: UserSession }) => {
      try {
        return service(ctx.session.user)
      } catch (err) {
        console.log(err)
        throw err
      }
    }
  ),
}

async function service({ name, id, email }: User) {
  const prisma = new PrismaClient()
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  })
  const allPosts = await prisma.post.findMany({
    include: {
      author: true,
    },
  })

  return {
    user,
    allPosts,
  }
}
