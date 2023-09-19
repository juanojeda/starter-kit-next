import { test, expect } from "@jest/globals"
import { prismaMock } from "~/server/external/__mocks__/prisma"
import { queryExample } from "~/server/features/queryExample"
import { createTRPCRouter } from "~/server/middleware/trpc"
import { anyObject } from "jest-mock-extended"

jest.mock("~/server/external/prisma")

describe("queryExample", () => {
  test("Should return message", async () => {
    const mockUserCount = 1
    const mockPostCount = 2
    const mockAuthorCount = 3

    prismaMock.user.count
      .calledWith(anyObject())
      .mockResolvedValue(mockAuthorCount)
    prismaMock.user.count.calledWith(undefined).mockResolvedValue(mockUserCount)
    prismaMock.post.count.mockResolvedValue(mockPostCount)

    const caller = createTRPCRouter({ ...queryExample }).createCaller({
      session: null,
    })

    expect(await caller.queryExample()).toEqual(
      expect.objectContaining({
        googleAuthenticationConfigured: true,
        userCount: 1,
        postCount: 2,
        authorCount: 3,
      })
    )
  })
})
