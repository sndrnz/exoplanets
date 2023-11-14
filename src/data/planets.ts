import planetTypes from "./planetTypes";

export type Planet = {
  name: string;
  image: string;
  type: (typeof planetTypes)[number]["name"];
  discovered: number;
  distance: number;
  source: string;
};

const planets: Planet[] = [
  {
    name: "55 Cancri b",
    image: "55_Cancri_b.webp",
    discovered: 1996,
    type: "Gas Giant",
    distance: 41,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/55_Cnc_b/",
  },
  {
    name: "55 Cancri c",
    image: "55_Cancri_c.webp",
    discovered: 2004,
    type: "Gas Giant",
    distance: 41,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/55_Cnc_c/",
  },
  {
    name: "55 Cancri d",
    image: "55_Cancri_d.webp",
    discovered: 2002,
    type: "Gas Giant",
    distance: 459,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/55_Cnc_d/",
  },
  {
    name: "55 Cancri e",
    image: "55_Cancri_e.webp",
    discovered: 2004,
    type: "Super Earth",
    distance: 41,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/55_Cnc_e/",
  },
  {
    name: "55 Cancri f",
    image: "55_Cancri_f.webp",
    discovered: 2007,
    type: "Gas Giant",
    distance: 41,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/55_Cnc_f/",
  },
  {
    name: "AU Microscopii b",
    image: "AU_Microscopii_b.webp",
    discovered: 2020,
    type: "Neptunian",
    distance: 32,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/AU_Mic_b/",
  },
  {
    name: "AU Microscopii c",
    image: "AU_Microscopii_c.webp",
    discovered: 2021,
    type: "Neptunian",
    distance: 32,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/AU_Mic_c/",
  },
  {
    name: "GJ 15 A b",
    image: "GJ_15_A_b.webp",
    discovered: 2014,
    type: "Super Earth",
    distance: 12,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/GJ_15_A_b/",
  },
  {
    name: "GJ 15 A c",
    image: "GJ_15_A_c.webp",
    discovered: 2018,
    type: "Neptunian",
    distance: 12,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/GJ_15_A_c/",
  },
  {
    name: "GJ 436 b",
    image: "GJ_436_b.webp",
    discovered: 2004,
    type: "Neptunian",
    distance: 32,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/GJ_436_b/",
  },
  {
    name: "GJ 504 b",
    image: "GJ_504_b.webp",
    discovered: 2013,
    type: "Gas Giant",
    distance: 57,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/GJ_504_b/",
  },
  {
    name: "GJ 1132 b",
    image: "GJ_1132_b.webp",
    discovered: 2015,
    type: "Super Earth",
    distance: 41,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/GJ_1132_b/",
  },
  {
    name: "GJ 1132 c",
    image: "GJ_1132_c.webp",
    discovered: 2018,
    type: "Super Earth",
    distance: 41,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/GJ_1132_c/",
  },
  {
    name: "HD 17156 b",
    image: "HD_17156_b.webp",
    discovered: 2007,
    type: "Gas Giant",
    distance: 255,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/HD_17156_b/",
  },
  {
    name: "HD 189733 b",
    image: "HD_189733_b.webp",
    discovered: 2005,
    type: "Gas Giant",
    distance: 65,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/HD_189733_b/",
  },
  {
    name: "KELT-9 b",
    image: "KELT-9_b.webp",
    discovered: 2017,
    type: "Gas Giant",
    distance: 667,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/KELT-9_b/",
  },
  {
    name: "Kepler-7 b",
    image: "Kepler-7_b.webp",
    discovered: 2009,
    type: "Gas Giant",
    distance: 3000,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/Kepler-7_b/",
  },
  {
    name: "Kepler-16 b",
    image: "Kepler-16_b.webp",
    discovered: 2011,
    type: "Gas Giant",
    distance: 245,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/Kepler-16_b/",
  },
  {
    name: "Kepler-22 b",
    image: "Kepler-22_b.webp",
    discovered: 2011,
    type: "Super Earth",
    distance: 635,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/Kepler-22_b/",
  },
  {
    name: "Kepler-36 b",
    image: "Kepler-36_b.webp",
    discovered: 2012,
    type: "Super Earth",
    distance: 2000,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/Kepler-36_b/",
  },
  {
    name: "Kepler-36 c",
    image: "Kepler-36_c.webp",
    discovered: 2012,
    type: "Neptunian",
    distance: 2000,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/Kepler-36_c/",
  },
  {
    name: "Kepler-452 b",
    image: "Kepler-452_b.webp",
    discovered: 2015,
    type: "Super Earth",
    distance: 2000,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/Kepler-452_b/",
  },
  {
    name: "KOI-55 b",
    image: "KOI-55_b.webp",
    discovered: 2011,
    type: "Terrestrial",
    distance: 4000,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/KOI-55_b/",
  },
  {
    name: "KOI-55 c",
    image: "KOI-55_c.webp",
    discovered: 2011,
    type: "Terrestrial",
    distance: 4000,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/KOI-55_c/",
  },
  {
    name: "PSR B1257+12 b",
    image: "PSR_B1257+12_b.webp",
    discovered: 1994,
    type: "Terrestrial",
    distance: 2000,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/PSR_B1257+12_b/",
  },
  {
    name: "PSR B1257+12 c",
    image: "PSR_B1257+12_c.webp",
    discovered: 1992,
    type: "Super Earth",
    distance: 2000,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/PSR_B1257+12_c/",
  },
  {
    name: "PSR B1257+12 d",
    image: "PSR_B1257+12_d.webp",
    discovered: 1992,
    type: "Super Earth",
    distance: 2000,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/PSR_B1257+12_d/",
  },
  {
    name: "TIC 172900988 b",
    image: "TIC_172900988_b.webp",
    discovered: 2021,
    type: "Gas Giant",
    distance: 819,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/TIC_172900988_b/",
  },
  {
    name: "TOI-849 b",
    image: "TOI-849_b.webp",
    discovered: 2020,
    type: "Gas Giant",
    distance: 737,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/TOI-849_b/",
  },
  {
    name: "TOI-3757 b",
    image: "TOI-3757_b.webp",
    discovered: 2022,
    type: "Gas Giant",
    distance: 591,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/TOI-3757_b/",
  },
  {
    name: "TrES-2 b",
    image: "TrES-2_b.webp",
    discovered: 2006,
    type: "Gas Giant",
    distance: 703,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/TrES-2_b/",
  },
  {
    name: "TYC 8998-760-1 b",
    image: "TYC_8998-760-1_b.webp",
    discovered: 2020,
    type: "Gas Giant",
    distance: 309,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/TYC_8998-760-1_b/",
  },
  {
    name: "TYC 8998-760-1 c",
    image: "TYC_8998-760-1_c.webp",
    discovered: 2020,
    type: "Gas Giant",
    distance: 309,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/TYC_8998-760-1_c/",
  },
  {
    name: "WASP-12 b",
    image: "WASP-12_b.webp",
    discovered: 2008,
    type: "Gas Giant",
    distance: 1000,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/WASP-12_b/",
  },
  {
    name: "WASP-96 b",
    image: "WASP-96_b.webp",
    discovered: 2014,
    type: "Gas Giant",
    distance: 1000,
    source:
      "https://exoplanets.nasa.gov/eyes-on-exoplanets/?destinations=/alien-worlds/strange-new-worlds/#/planet/WASP-96_b/",
  },
];

export default planets;
