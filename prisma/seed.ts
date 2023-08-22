import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient()

async function runSeeds() {
  // Seed your data
  const seedPostData = [{
    authorId: 123,
    title: "Creating a seed post"
  }]

  await prisma.post.createMany({
    data: seedPostData
  })
}

void runSeeds()
