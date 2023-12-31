import { db } from "../db";

export type Planet = PlanetWithoutType | PlanetWithType;
export type PlanetWithoutType = Awaited<ReturnType<typeof getPlanets>>[number];
export type PlanetWithType = Awaited<
  ReturnType<typeof getPlanetsWithType>
>[number];

export async function getPlanets() {
  return await db.planet.findMany({
    orderBy: {
      id: "asc",
    },
  });
}

export async function getPlanetsWithType() {
  return await db.planet.findMany({
    orderBy: {
      id: "asc",
    },
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
      method: true,
      attributes: {
        include: {
          type: true,
          unit: true,
        },
      },
    },
  });
}
