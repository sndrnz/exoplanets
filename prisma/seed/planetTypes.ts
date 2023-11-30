import { PlanetType } from "@prisma/client";

const types = ["Gas Giant", "Neptunian", "Super Earth", "Terrestrial"] as const;

export function getPlanetTypeId(name: (typeof types)[number]) {
  return planetTypes.find((planetType) => planetType.name === name)!.id;
}

const planetTypes: PlanetType[] = [
  {
    id: 1,
    name: "Gas Giant",
    description:
      "Gas giants are enormous planets, similar in size to Saturn or Jupiter, sometimes even larger. They often have thick atmospheres composed primarily of hydrogen and helium.",
    slug: "gas-giant",
  },
  {
    id: 2,
    name: "Neptunian",
    description:
      "Neptunians are about the same size as Neptune or Uranus in our solar system. They have a variety of internal compositions, but all have an outer atmosphere made up mostly of hydrogen and helium and a rocky core.",
    slug: "neptunian",
  },
  {
    id: 3,
    name: "Super Earth",
    description:
      "Super-Earths are typically Earth-like planets that may or may not have an atmosphere. They have a greater mass than Earth, but are lighter than Neptune and fall in an intermediate region.",
    slug: "super-earth",
  },
  {
    id: 4,
    name: "Terrestrial",
    description:
      "Terrestrials are similar in size to Earth or smaller and are composed primarily of rock, silicates, water or carbon. At best, it is possible that some of these planets may have atmospheres, oceans, or signs of habitability.",
    slug: "terrestrial",
  },
] satisfies (PlanetType & {
  name: (typeof types)[number];
})[];

export default planetTypes;
