import { PrismaClient } from "@prisma/client";
import planetTypes from "./planetTypes";
import planets from "./planets";

const prisma = new PrismaClient();

async function main() {
  await prisma.planetType.createMany({
    data: planetTypes,
  });

  await prisma.planet.createMany({
    data: planets,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
