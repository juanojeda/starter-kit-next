import { type PrismaClient } from "@prisma/client"
import { mockDeep, mockReset, type DeepMockProxy } from "jest-mock-extended"
import prisma from "~/server/external/prisma"

jest.mock("~/server/external/prisma", () => ({
  __esModule: true,

  default: mockDeep<PrismaClient>(),
}))

beforeEach(() => {
  mockReset(prismaMock)
})

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>
