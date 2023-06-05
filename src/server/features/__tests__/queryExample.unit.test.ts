import { test, expect } from "@jest/globals"
import { queryExample } from "~/server/features/queryExample"
import { createTRPCRouter } from "~/server/middleware/trpc"

test("Should return message", async () => {
  const input = { text: "Ola" }
  const caller = createTRPCRouter({ testEndpoint: queryExample }).createCaller({
    session: null,
  })

  expect(await caller.testEndpoint(input)).toEqual({ greeting: "Hello Ola" })
})
