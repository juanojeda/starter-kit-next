import { test, expect } from "@jest/globals"
import { queryExample } from "~/server/features/queryExample"
import { createTRPCRouter } from "~/server/middleware/trpc"

describe("queryExample", () => {
  test("Should return message", async () => {
    const input = { text: "Ola" }
    const caller = createTRPCRouter({ ...queryExample }).createCaller({
      session: null,
    })

    expect(await caller.queryExample(input)).toEqual(
      expect.objectContaining({
        greeting: "Hello Ola",
        googleAuthenticationConfigured: true,
        userCount: expect.any(Number),
        postCount: expect.any(Number),
        authorCount: expect.any(Number),
      })
    )
  })
})
