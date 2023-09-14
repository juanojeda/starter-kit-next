import type { Session } from "next-auth"
import { expect, test } from "@jest/globals"
import { createTRPCRouter } from "~/server/middleware/trpc"
import { protectedExample } from "~/server/features/protectedExample"
import { PrismaClient } from "@prisma/client"

jest.mock("@prisma/client")

const mockPrismaClient = PrismaClient as jest.Mock<PrismaClient>

describe("protectedExample", () => {
  test("Should throw error for unauthed users", async () => {
    const caller = createTRPCRouter({
      ...protectedExample,
    }).createCaller({ session: null })

    await expect(caller.protectedExample()).rejects.toThrow("UNAUTHORIZED")
  })

  test("Should return the user object from the db, and all posts from the db", async () => {
    mockPrismaClient.mockImplementation(() => ({
      user: {
        findFirst: () => ({
          id: "testUserId",
        }),
      },
      post: {
        findMany: () => [{ author: { name: "Basil Brush" } }],
      },
    }))

    const VALID_SESSION: Session = {
      expires: new Date().toISOString(),
      user: { id: "testUserId", name: "Basil Brush", email: "basil@brush.com" },
    }
    const caller = createTRPCRouter({
      ...protectedExample,
    }).createCaller({ session: VALID_SESSION })

    expect(await caller.protectedExample()).toEqual(
      expect.objectContaining({
        user: { id: "testUserId" },
        allPosts: [{ author: { name: "Basil Brush" } }],
      })
    )
  })
})
