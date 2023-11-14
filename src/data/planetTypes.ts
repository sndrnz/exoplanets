const planetTypes = [
  {
    name: "Gas Giant",
    description:
      "Gas giants are enormous planets, similar in size to Saturn or Jupiter, sometimes even larger. They often have thick atmospheres composed primarily of hydrogen and helium.",
  },
  {
    name: "Neptunian",
    description:
      "Neptunians are about the same size as Neptune or Uranus in our solar system. They have a variety of internal compositions, but all have an outer atmosphere made up mostly of hydrogen and helium and a rocky core.",
  },
  {
    name: "Super Earth",
    description:
      "Super-Earths are typically Earth-like planets that may or may not have an atmosphere. They have a greater mass than Earth, but are lighter than Neptune and fall in an intermediate region",
  },
  {
    name: "Terrestrial",
    description:
      "Terrestrials are similar in size to Earth or smaller and are composed primarily of rock, silicates, water or carbon. At best, it is possible that some of these planets may have atmospheres, oceans, or signs of habitability.",
  },
] as const;

export default planetTypes;
