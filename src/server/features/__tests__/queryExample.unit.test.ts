import { test, expect } from "@jest/globals"
import { queryExample } from "~/server/features/queryExample"
import { createTRPCRouter } from "~/server/middleware/trpc"

test("Should return message", async () => {
  const input = { text: "Ola" }
  const caller = createTRPCRouter({ ...queryExample }).createCaller({
    session: null,
  })

  expect(await caller.queryExample(input)).toEqual({ greeting: "Hello Ola", googleAuthenticationConfigured: true, })
})
