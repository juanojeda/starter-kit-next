import { type Session } from "next-auth"
import { test, expect } from "@jest/globals"
import { createTRPCRouter } from "~/server/middleware/trpc"
import { mutationExample } from "~/server/features/mutationExample"
import { type Prisma, PrismaClient } from "@prisma/client"

jest.mock("@prisma/client")

const mockPrismaClient = PrismaClient as jest.Mock<PrismaClient>

describe("mutationExample", () => {
  mockPrismaClient.mockImplementation(
    () =>
      ({
        post: {
          create: ({ data: { title, author } }: Prisma.PostCreateArgs) => ({
            title,
            author,
          }),
        },
      } as unknown as PrismaClient)
  )

  const input = {
    text: "Just a message to show how the mutation endpoint works",
  }

  describe("GIVEN an unauthenticated user", () => {
    test("Should return anonymous post", async () => {
      const caller = createTRPCRouter({
        ...mutationExample,
      }).createCaller({ session: null })

      expect(await caller.mutationExample(input)).toEqual(
        expect.objectContaining({
          title: input.text,
          author: undefined,
        })
      )
    })
  })

  describe("GIVEN an authenticated user", () => {
    test("Should return post with Author field", async () => {
      const caller = createTRPCRouter({
        ...mutationExample,
      }).createCaller({
        session: {
          user: {
            id: "123",
            name: "test user",
            email: "test@test.com",
          },
        } as Session,
      })
      expect(await caller.mutationExample(input)).toEqual(
        expect.objectContaining({
          title: input.text,
          // TODO: replace this with less tightly-coupled test
          author: expect.objectContaining({
            connect: {
              email: "test@test.com",
            },
          }),
        })
      )
    })
  })
})
