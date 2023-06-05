import type { Session } from "next-auth"
import { expect, test } from "@jest/globals"
import { createTRPCRouter } from "~/server/middleware/trpc"
import { protectedExample } from "~/server/features/protectedExample"

test("Should throw error for unauthed users", async () => {
  const caller = createTRPCRouter({
    testEndPoint: protectedExample,
  }).createCaller({ session: null })

  await expect(caller.testEndPoint()).rejects.toThrow("UNAUTHORIZED")
})

test("Should return message for valid user", async () => {
  const VALID_SESSION: Session = {
    expires: new Date().toISOString(),
    user: { id: "testUserId" },
  }
  const caller = createTRPCRouter({
    testEndpoint: protectedExample,
  }).createCaller({ session: VALID_SESSION })

  expect(await caller.testEndpoint()).toEqual(
    "Hello testUserId you can now see this secret message!"
  )
})
