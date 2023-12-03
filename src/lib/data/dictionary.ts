const dictionary = [
  {
    term: "Planet",
    definition:
      "A planet is a large object that orbits a star and does not produce light of its own.",
  },
  {
    term: "Exoplanet",
    definition:
      "A planet that orbits a star outside the solar system. Also called extrasolar planet.",
  },
  {
    term: "Star",
    definition:
      "A star is a large, glowing ball of gas that generates heat and light through nuclear fusion.",
  },
  {
    term: "Solar System",
    definition:
      "A solar system is a star and all the objects that travel in orbit around it.",
  },
  {
    term: "Atmosphere",
    definition:
      "An atmosphere is a layer of gases that surround a planet or moon.",
  },
  {
    term: "Radiation",
    definition:
      "Radiation is energy that travels in the form of waves or particles.",
  },
  {
    term: "Eclipse",
    definition:
      "An eclipse is an event in which one object in space blocks another from view.",
  },
  {
    term: "Light-Year (ly)",
    definition:
      "A light-year is the distance light travels in one year, about 9.5 trillion kilometers.",
  },
  {
    term: "Astronomical Unit (AU)",
    definition:
      "An astronomical unit (AU) is the average distance between Earth and the Sun, about 150 million kilometers.",
  },
  {
    term: "Terrestrial",
    definition: "Something that is terrestrial is related to Earth or land.",
  },
  {
    term: "Gas",
    definition:
      "In context of planets, gas refers mostly to hydrogen and helium.",
  },
  {
    term: "Orbit",
    definition:
      "An orbit is the path one object in space takes around another.",
  },
  {
    term: "Doppler Effect",
    definition:
      "The Doppler effect is the change in frequency or wavelength of a wave for an observer who is moving relative to the wave source.",
  },
  {
    term: "Mass",
    definition:
      "Mass is the amount of matter in an object. In the solar system, mass is often measured in terms of Earth's, Jupiter's, or the Sun's mass.",
  },
  {
    term: "Radius",
    definition:
      "Radius is the distance from the center of a sphere or circle to its edge.",
  },
  {
    term: "Distance",
    definition:
      "Distance is the amount of space between two objects or points. In the solar system, distance is often measured in terms of astronomical units (AU) or light-years (ly).",
  },
  {
    term: "Coronagraphy",
    definition:
      "Coronagraphy is a technique used to block out the bright light of a star so that dimmer objects nearby can be observed.",
  },
  {
    term: "Starshade",
    definition:
      "A starshade is a large, specially shaped screen that can be used to block out the light of a star so that dimmer objects nearby can be observed.",
  },
  {
    term: "Pulsar",
    definition:
      "A pulsar is a spinning neutron star that emits a beam of electromagnetic radiation. The radiation can only be observed when the beam of emission is pointing toward Earth.",
  },
  {
    term: "Fluctuation",
    definition:
      "A fluctuation is a change in something that is not stable, especially in an irregular way.",
  },
  {
    term: "Cosmic Clock",
    definition:
      "A cosmic clock is a natural phenomenon that can be used to measure time.",
  },
  {
    term: "Gravitational Pull",
    definition:
      "Gravitational pull is the force of gravity acting between two objects.",
  },
];

export default dictionary.toSorted((a, b) => a.term.localeCompare(b.term));
