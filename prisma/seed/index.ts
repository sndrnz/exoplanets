import { PrismaClient } from "@prisma/client";
import attributeTypes from "./attributeTypes";
import planetTypes from "./planetTypes";
import planets from "./planets";
import units from "./units";

const prisma = new PrismaClient();

async function main() {
  await prisma.planetType.createMany({
    data: planetTypes,
  });

  await prisma.unit.createMany({
    data: units,
  });

  await prisma.attributeType.createMany({
    data: attributeTypes,
  });

  // await prisma.$transaction(
  //   async (tx) => {

  //   },
  //   { maxWait: 100_000 },
  // );

  const promises: Promise<any>[] = [];

  for (const planetWithAttributes of planets) {
    const { attributes, ...planet } = planetWithAttributes;

    const promise = prisma.planet.create({
      data: {
        ...planet,
        attributes: {
          createMany: {
            data: [
              ...attributes?.map((attribute) => ({
                value: attribute.value,
                typeId: attribute.typeId,
                unitId: attribute.unitId,
              })),
            ],
          },
        },
      },
    });

    promises.push(promise);
  }

  await Promise.all(promises);
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
