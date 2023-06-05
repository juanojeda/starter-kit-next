import { z } from "zod"
import { publicProcedure } from "~/server/middleware/trpc"

// The controller
export const queryExample = publicProcedure
  .input(z.object({ text: z.string() }))
  .query(({ input }) => {
    try {
      return service(input.text)
    } catch (err) {
      console.log(err)
      throw err
    }
  })

function service(text: string) {
  return {
    greeting: `Hello ${text}`,
  }
}
