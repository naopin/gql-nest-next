import { PrismaClient } from '@prisma/client';
import { prismaCreateTodo } from './post';


const prisma = new PrismaClient();

const main = async () => {
  console.log(`Start seeding ...`);
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