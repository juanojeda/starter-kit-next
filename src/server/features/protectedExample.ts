import { protectedProcedure } from "~/server/middleware/trpc"

// The controller
export const protectedExample = {
  protectedExample: protectedProcedure.query(({ ctx }) => {
    try {
      return service(ctx.session.user.name)
    } catch (err) {
      console.log(err)
      throw err
    }
  }),
}

function service(userName: string) {
  return `Hello ${userName} you can now see this secret message!`
}
