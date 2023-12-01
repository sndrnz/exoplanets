import { Unit } from "@prisma/client";

const units: Unit[] = [
  {
    id: "EarthMasses",
    displayName: "Earth Mass",
    suffix: "Earths",
    explanation:
      "One Earth mass is the mass of our planet Earth, which is 5.97219 × 10^24 kg.",
  },
  {
    id: "JupiterMasses",
    displayName: "Jupiter Mass",
    suffix: "Jupiters",
    explanation:
      "One Jupiter mass is the mass of the planet Jupiter, which is 1.898 × 10^27 kg.",
  },
  {
    id: "EarthRadii",
    displayName: "Earth Radius",
    suffix: "Earths",
    explanation:
      "One Earth radius is the radius of our planet Earth, which is 6,371 km.",
  },
  {
    id: "JupiterRadii",
    displayName: "Jupiter Radius",
    suffix: "Jupiters",
    explanation:
      "One Jupiter radius is the radius of the planet Jupiter, which is 69,911 km.",
  },
  {
    id: "LightYears",
    displayName: "Light Year",
    suffix: "light years",
    explanation:
      "One light year is the distance that light travels in one year, which is 9.461 × 10^12 km.",
  },
  {
    id: "Year",
    displayName: "Year",
    suffix: null,
    explanation: null,
  },
];

export default units;
