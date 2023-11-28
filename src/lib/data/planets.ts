import { db } from "../db";

export type Planet = Awaited<ReturnType<typeof getPlanets>>[number];

export async function getPlanets() {
  return await db.planet.findMany({
    include: {
      type: true,
    },
  });
}

export async function getPlanetBySlug(slug: string) {
  return await db.planet.findUnique({
    where: {
      slug,
    },
    include: {
      type: true,
    },
  });
}
