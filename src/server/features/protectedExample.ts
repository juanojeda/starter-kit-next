import { protectedProcedure } from "~/server/middleware/trpc"

// The controller
export const protectedExample = {
  protectedExample: protectedProcedure.query(({ ctx }) => {
    try {
      return service(ctx.session.user.id)
    } catch (err) {
      console.log(err)
      throw err
    }
  }),
}

function service(userId: string) {
  return `Hello ${userId} you can now see this secret message!`
}
