import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient()

async function runSeeds() {
  // Seed your data

  const SEED_USER_UUID = "my-unique-user-uuid"
  const SEED_POST_UUID = "my-unique-post-uuid"

  const seedUser = {
    id: SEED_USER_UUID,
    email: "seed.user@everest.engineering",
    name: "Seedy McSeedface",
  }

  const seedPost = {
    id: SEED_POST_UUID,
    title: "Creatinga a seed post",
    authorId: SEED_USER_UUID,
  }

  await prisma.user.upsert({
    where: { id: seedUser.id },
    create: seedUser,
    update: seedUser,
  })

  await prisma.post.upsert({
    where: { id: seedPost.id },
    create: seedPost,
    update: seedPost,
  })
}

void runSeeds()
