import { test, expect } from "@jest/globals"
import { createTRPCRouter } from "~/server/middleware/trpc"
import { mutationExample } from "~/server/features/mutationExample"

test("Should return message", async () => {
  const input = {
    text: "Just a message to show how the mutation endpoint works",
  }
  const caller = createTRPCRouter({
    ...mutationExample,
  }).createCaller({ session: null })

  expect(await caller.mutationExample(input)).toEqual({ greeting: input.text })
})
