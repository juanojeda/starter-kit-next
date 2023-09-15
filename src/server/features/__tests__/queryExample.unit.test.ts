import { test, expect } from "@jest/globals"
import { PrismaClient } from "@prisma/client"
import { queryExample } from "~/server/features/queryExample"
import { createTRPCRouter } from "~/server/middleware/trpc"

jest.mock("@prisma/client")

const mockPrismaClient = PrismaClient as jest.Mock<PrismaClient>

describe("queryExample", () => {
  mockPrismaClient.mockImplementation(
    () =>
      ({
        post: {
          count: () => 1,
        },
        user: {
          count: () => 1,
        },
      } as unknown as PrismaClient)
  )

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
