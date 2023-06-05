import { z } from "zod"
import { publicProcedure } from "~/server/middleware/trpc"

// This is the controller
export const mutationExample = publicProcedure
  .input(z.object({ text: z.string() }))
  .mutation(({ input }) => {
    try {
      return service(input.text)
    } catch (err) {
      console.log(err)
      throw err
    }
  })

function service(text: string) {
  return {
    greeting: `${text}`,
  }
}
