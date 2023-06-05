import { createTRPCRouter } from "~/server/middleware/trpc"
import { mutationExample } from "~/server/features/mutationExample"
import { protectedExample } from "~/server/features/protectedExample"
import { queryExample } from "~/server/features/queryExample"

export const appRouter = createTRPCRouter({
  queryExample: queryExample,
  mutationExample: mutationExample,
  protectedRouteExample: protectedExample,
})

export type AppRouter = typeof appRouter
