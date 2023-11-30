import { db } from "../db";

export type PlanetType = Awaited<ReturnType<typeof getPlanetTypes>>[number];

export async function getPlanetTypes() {
  return await db.planetType.findMany();
}

export async function getPlanetTypeBySlug(slug: string) {
  return await db.planetType.findUnique({
    where: {
      slug,
    },
    include: {
      planets: true,
    },
  });
}
