import { Attribute, Planet } from "@prisma/client";
import { getPlaceholderForImage } from "./placeholders";

type PlanetWithAttributes = Planet & {
  attributes: Omit<Attribute, "planetId">[];
};

const planets: PlanetWithAttributes[] = [
  {
    id: 1,
    name: "55 Cancri b",
    description: "A giant planet composed mainly of gas.",
    image: "55_Cancri_b.webp",
    imagePlaceholder: getPlaceholderForImage("55_Cancri_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "1996",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "0.8306",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "1.24",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "41",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/55_Cnc_b/",
    slug: "55-cancri-b",
    typeId: "GasGiant",
    methodId: "RadialVelocity",
  },
  {
    id: 2,
    name: "55 Cancri c",
    description: "A giant planet composed mainly of gas.",
    image: "55_Cancri_c.webp",
    imagePlaceholder: getPlaceholderForImage("55_Cancri_c.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2004",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "0.1714",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "0.76",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "41",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/55_Cnc_c/",
    slug: "55-cancri-c",
    typeId: "GasGiant",
    methodId: "RadialVelocity",
  },
  {
    id: 3,
    name: "55 Cancri d",
    description: "A giant planet composed mainly of gas.",
    image: "55_Cancri_d.webp",
    imagePlaceholder: getPlaceholderForImage("55_Cancri_d.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2002",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "3.878",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "1.16",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "459",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/55_Cnc_d/",
    slug: "55-cancri-d",
    typeId: "GasGiant",
    methodId: "RadialVelocity",
  },
  {
    id: 4,
    name: "55 Cancri e",
    description: "A lava world with sparkling skies.",
    image: "55_Cancri_e.webp",
    imagePlaceholder: getPlaceholderForImage("55_Cancri_e.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2004",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "7.99",
      },
      {
        typeId: "Radius",
        unitId: "EarthRadii",
        value: "1.875",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "41",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/55_Cnc_e/",
    slug: "55-cancri-e",
    typeId: "SuperEarth",
    methodId: "RadialVelocity",
  },
  {
    id: 5,
    name: "55 Cancri f",
    description: "A giant planet composed mainly of gas.",
    image: "55_Cancri_f.webp",
    imagePlaceholder: getPlaceholderForImage("55_Cancri_f.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2007",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "0.141",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "0.677",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "41",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/55_Cnc_f/",
    slug: "55-cancri-f",
    typeId: "GasGiant",
    methodId: "RadialVelocity",
  },
  {
    id: 6,
    name: "AU Microscopii b",
    description: "A young planet blasted by its angry young star.",
    image: "AU_Microscopii_b.webp",
    imagePlaceholder: getPlaceholderForImage("AU_Microscopii_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2020",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "20.12",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "0.353",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "32",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/AU_Mic_b/",
    slug: "au-microscopii-b",
    typeId: "Neptunian",
    methodId: "Transit",
  },
  {
    id: 7,
    name: "AU Microscopii c",
    description: "A Neptune-like gas giant planet.",
    image: "AU_Microscopii_c.webp",
    imagePlaceholder: getPlaceholderForImage("AU_Microscopii_c.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2021",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "9.6",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "0.289",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "32",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/AU_Mic_c/",
    slug: "au-microscopii-c",
    typeId: "Neptunian",
    methodId: "Transit",
  },
  {
    id: 8,
    name: "GJ 15 A b",
    description: "A neighboring world with an abundance of strange properties.",
    image: "GJ_15_A_b.webp",
    imagePlaceholder: getPlaceholderForImage("GJ_15_A_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2014",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "3.03",
      },
      {
        typeId: "Radius",
        unitId: "EarthRadii",
        value: "1.55",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "12",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/GJ_15_A_b/",
    slug: "gj-15-a-b",
    typeId: "SuperEarth",
    methodId: "RadialVelocity",
  },
  {
    id: 9,
    name: "GJ 15 A c",
    description: "Part of the closest planetary system to Earth.",
    image: "GJ_15_A_c.webp",
    imagePlaceholder: getPlaceholderForImage("GJ_15_A_c.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2018",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "36",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "0.595",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "12",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/GJ_15_A_c/",
    slug: "gj-15-a-c",
    typeId: "Neptunian",
    methodId: "RadialVelocity",
  },
  {
    id: 10,
    name: "GJ 436 b",
    description:
      "A close exoplanet with a secret: a lack of methane on this hot world.",
    image: "GJ_436_b.webp",
    imagePlaceholder: getPlaceholderForImage("GJ_436_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2004",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "22.1",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "0.372",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "32",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/GJ_436_b/",
    slug: "gj-436-b",
    typeId: "Neptunian",
    methodId: "RadialVelocity",
  },
  {
    id: 11,
    name: "GJ 504 b",
    description: "A puffy pink planet.",
    image: "GJ_504_b.webp",
    imagePlaceholder: getPlaceholderForImage("GJ_504_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2013",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "4",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "1.16",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "57",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/GJ_504_b/",
    slug: "gj-504-b",
    typeId: "GasGiant",
    methodId: "Imaging",
  },
  {
    id: 12,
    name: "GJ 1132 b",
    description: "A World on its Second Atmosphere.",
    image: "GJ_1132_b.webp",
    imagePlaceholder: getPlaceholderForImage("GJ_1132_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2015",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "1.66",
      },
      {
        typeId: "Radius",
        unitId: "EarthRadii",
        value: "1.13",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "41",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/GJ_1132_b/",
    slug: "gj-1132-b",
    typeId: "SuperEarth",
    methodId: "Transit",
  },
  {
    id: 13,
    name: "GJ 1132 c",
    description: "A potentially rocky world, larger than Earth.",
    image: "GJ_1132_c.webp",
    imagePlaceholder: getPlaceholderForImage("GJ_1132_c.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2018",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "2.64",
      },
      {
        typeId: "Radius",
        unitId: "EarthRadii",
        value: "1.43",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "41",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/GJ_1132_c/",
    slug: "gj-1132-c",
    typeId: "SuperEarth",
    methodId: "RadialVelocity",
  },
  {
    id: 14,
    name: "HD 17156 b",
    description:
      "A giant planet composed mostly of gas; named for Alaskan river.",
    image: "HD_17156_b.webp",
    imagePlaceholder: getPlaceholderForImage("HD_17156_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2007",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "3.51",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "1.1",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "255",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/HD_17156_b/",
    slug: "hd-17156-b",
    typeId: "GasGiant",
    methodId: "RadialVelocity",
  },
  {
    id: 15,
    name: "HD 189733 b",
    description: "A giant planet where it rains glass.",
    image: "HD_189733_b.webp",
    imagePlaceholder: getPlaceholderForImage("HD_189733_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2005",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "1.13",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "1.13",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "65",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/HD_189733_b/",
    slug: "hd-189733-b",
    typeId: "GasGiant",
    methodId: "RadialVelocity",
  },
  {
    id: 16,
    name: "KELT-9 b",
    description: "An ultrahot world hotter than some stars.",
    image: "KELT-9_b.webp",
    imagePlaceholder: getPlaceholderForImage("KELT-9_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2017",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "2.88",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "1.891",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "667",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/KELT-9_b/",
    slug: "kelt-9-b",
    typeId: "GasGiant",
    methodId: "Transit",
  },
  {
    id: 17,
    name: "Kepler-7 b",
    description: "A giant planet composed mainly of gas.",
    image: "Kepler-7_b.webp",
    imagePlaceholder: getPlaceholderForImage("Kepler-7_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2009",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "0.441",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "1.622",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "3000",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/Kepler-7_b/",
    slug: "kepler-7-b",
    typeId: "GasGiant",
    methodId: "Transit",
  },
  {
    id: 18,
    name: "Kepler-16 b",
    description: "A giant planet composed mainly of gas.",
    image: "Kepler-16_b.webp",
    imagePlaceholder: getPlaceholderForImage("Kepler-16_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2011",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "0.333",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "0.754",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "245",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/Kepler-16_b/",
    slug: "kepler-16-b",
    typeId: "GasGiant",
    methodId: "Transit",
  },
  {
    id: 19,
    name: "Kepler-22 b",
    description: "A potentially rocky world, larger than Earth.",
    image: "Kepler-22_b.webp",
    imagePlaceholder: getPlaceholderForImage("Kepler-22_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2011",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "9.1",
      },
      {
        typeId: "Radius",
        unitId: "EarthRadii",
        value: "2.1",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "635",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/Kepler-22_b/",
    slug: "kepler-22-b",
    typeId: "SuperEarth",
    methodId: "Transit",
  },
  {
    id: 20,
    name: "Kepler-36 b",
    description: "A super-Earth with a super-close neighbor.",
    image: "Kepler-36_b.webp",
    imagePlaceholder: getPlaceholderForImage("Kepler-36_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2012",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "3.83",
      },
      {
        typeId: "Radius",
        unitId: "EarthRadii",
        value: "1.498",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "2000",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/Kepler-36_b/",
    slug: "kepler-36-b",
    typeId: "SuperEarth",
    methodId: "Transit",
  },
  {
    id: 21,
    name: "Kepler-36 c",
    description: "A Neptune-like gas giant planet.",
    image: "Kepler-36_c.webp",
    imagePlaceholder: getPlaceholderForImage("Kepler-36_c.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2012",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "7.13",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "0.328",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "2000",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/Kepler-36_c/",
    slug: "kepler-36-c",
    typeId: "Neptunian",
    methodId: "Transit",
  },
  {
    id: 22,
    name: "Kepler-452 b",
    description: "A potentially rocky world, larger than Earth.",
    image: "Kepler-452_b.webp",
    imagePlaceholder: getPlaceholderForImage("Kepler-452_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2015",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "3.29",
      },
      {
        typeId: "Radius",
        unitId: "EarthRadii",
        value: "1.63",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "2000",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/Kepler-452_b/",
    slug: "kepler-452-b",
    typeId: "SuperEarth",
    methodId: "Transit",
  },
  {
    id: 23,
    name: "KOI-55 b",
    description: "A rocky world hotter than the Sun.",
    image: "KOI-55_b.webp",
    imagePlaceholder: getPlaceholderForImage("KOI-55_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2011",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "0.44",
      },
      {
        typeId: "Radius",
        unitId: "EarthRadii",
        value: "0.759",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "4000",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/KOI-55_b/",
    slug: "koi-55-b",
    typeId: "Terrestrial",
    methodId: "OrbitalBrightnessModulation",
  },
  {
    id: 24,
    name: "KOI-55 c",
    description: "A rocky world outside our solar system.",
    image: "KOI-55_c.webp",
    imagePlaceholder: getPlaceholderForImage("KOI-55_c.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2011",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "0.655",
      },
      {
        typeId: "Radius",
        unitId: "EarthRadii",
        value: "0.867",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "4000",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/KOI-55_c/",
    slug: "koi-55-c",
    typeId: "Terrestrial",
    methodId: "OrbitalBrightnessModulation",
  },
  {
    id: 25,
    name: "PSR B1257+12 b",
    description: "A rocky world bathed in radiation.",
    image: "PSR_B1257+12_b.webp",
    imagePlaceholder: getPlaceholderForImage("PSR_B1257+12_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "1994",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "0.02",
      },
      {
        typeId: "Radius",
        unitId: "EarthRadii",
        value: "0.338",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "2000",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/PSR_B1257+12_b/",
    slug: "psr-b1257-12-b",
    typeId: "Terrestrial",
    methodId: "PulsarTiming",
  },
  {
    id: 26,
    name: "PSR B1257+12 c",
    description: "A potentially rocky world, larger than Earth.",
    image: "PSR_B1257+12_c.webp",
    imagePlaceholder: getPlaceholderForImage("PSR_B1257+12_c.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "1992",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "4.3",
      },
      {
        typeId: "Radius",
        unitId: "EarthRadii",
        value: "1.91",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "2000",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/PSR_B1257+12_c/",
    slug: "psr-b1257-12-c",
    typeId: "SuperEarth",
    methodId: "PulsarTiming",
  },
  {
    id: 27,
    name: "PSR B1257+12 d",
    description: "A potentially rocky world, larger than Earth.",
    image: "PSR_B1257+12_d.webp",
    imagePlaceholder: getPlaceholderForImage("PSR_B1257+12_d.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "1992",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "3.9",
      },
      {
        typeId: "Radius",
        unitId: "EarthRadii",
        value: "1.8",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "2000",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/PSR_B1257+12_d/",
    slug: "psr-b1257-12-d",
    typeId: "SuperEarth",
    methodId: "PulsarTiming",
  },
  {
    id: 28,
    name: "TIC 172900988 b",
    description: "A giant that sees three eclipses.",
    image: "TIC_172900988_b.webp",
    imagePlaceholder: getPlaceholderForImage("TIC_172900988_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2021",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "2.96386",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "1.004",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "819",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/TIC_172900988_b/",
    slug: "tic-172900988-b",
    typeId: "GasGiant",
    methodId: "Transit",
  },

  {
    id: 29,
    name: "TOI-849 b",
    description: "A battered, blasted world.",
    image: "TOI-849_b.webp",
    imagePlaceholder: getPlaceholderForImage("TOI-849_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2020",
      },
      {
        typeId: "Mass",
        unitId: "EarthMasses",
        value: "39.09",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "0.307",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "737",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/TOI-849_b/",
    slug: "toi-849-b",
    typeId: "GasGiant",
    methodId: "Transit",
  },
  {
    id: 30,
    name: "TOI-3757 b",
    description: "A giant planet with the density of a marshmallow.",
    image: "TOI-3757_b.webp",
    imagePlaceholder: getPlaceholderForImage("TOI-3757_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2022",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "0.26838",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "1.071",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "591",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/TOI-3757_b/",
    slug: "toi-3757-b",
    typeId: "GasGiant",
    methodId: "Transit",
  },
  {
    id: 31,
    name: "TrES-2 b",
    description: "A world of eternal darkness.",
    image: "TrES-2_b.webp",
    imagePlaceholder: getPlaceholderForImage("TrES-2_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2006",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "1.49",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "1.36",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "703",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/TrES-2_b/",
    slug: "tres-2-b",
    typeId: "GasGiant",
    methodId: "Transit",
  },
  {
    id: 32,
    name: "TYC 8998-760-1 b",
    description: "This object is on the border of planet and failed star.",
    image: "TYC_8998-760-1_b.webp",
    imagePlaceholder: getPlaceholderForImage("TYC_8998-760-1_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2020",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "14",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "1.1",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "309",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/TYC_8998-760-1_b/",
    slug: "tyc-8998-760-1-b",
    typeId: "GasGiant",
    methodId: "Imaging",
  },
  {
    id: 33,
    name: "TYC 8998-760-1 c",
    description: "A giant planet composed mainly of gas.",
    image: "TYC_8998-760-1_c.webp",
    imagePlaceholder: getPlaceholderForImage("TYC_8998-760-1_c.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2020",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "6",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "1.1",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "309",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/TYC_8998-760-1_c/",
    slug: "tyc-8998-760-1-c",
    typeId: "GasGiant",
    methodId: "Imaging",
  },
  {
    id: 34,
    name: "WASP-12 b",
    description: "An egg-shaped world being devoured by its star.",
    image: "WASP-12_b.webp",
    imagePlaceholder: getPlaceholderForImage("WASP-12_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2008",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "1.465",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "1.937",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "1000",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/WASP-12_b/",
    slug: "wasp-12-b",
    typeId: "GasGiant",
    methodId: "Transit",
  },
  {
    id: 35,
    name: "WASP-96 b",
    description:
      "Webb Telescope provides first full spectrum of this hot, puffy gas giant planet.",
    image: "WASP-96_b.webp",
    imagePlaceholder: getPlaceholderForImage("WASP-96_b.webp"),
    attributes: [
      {
        typeId: "Discovery",
        unitId: "Year",
        value: "2014",
      },
      {
        typeId: "Mass",
        unitId: "JupiterMasses",
        value: "0.48",
      },
      {
        typeId: "Radius",
        unitId: "JupiterRadii",
        value: "1.2",
      },
      {
        typeId: "Distance",
        unitId: "LightYears",
        value: "1000",
      },
    ],
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/WASP-96_b/",
    slug: "wasp-96-b",
    typeId: "GasGiant",
    methodId: "Transit",
  },
];

export default planets;
