import { PrismaClient } from '@prisma/client';
import { doSeed, prismaCreateTodo } from './post';

const prisma = new PrismaClient();

const main = async () => {
  console.log(`Start seeding ...`);
  await doSeed();
  await prismaCreateTodo();
  console.log(`Seeding finished.`);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
});