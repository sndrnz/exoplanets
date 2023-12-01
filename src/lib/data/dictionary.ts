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
    term: "Astronomical Unit (AU)",
    definition:
      "An astronomical unit is the average distance between Earth and the Sun, about 150 million kilometers (93 million miles).",
  },
  {
    term: "Light-Year",
    definition:
      "A light-year is the distance light travels in one year, about 9.5 trillion kilometers (6 trillion miles).",
  },
  {
    term: "Terrestrial Planet",
    definition:
      "A terrestrial planet is a dense planet made of mostly solids. Mercury, Venus, Earth, and Mars are terrestrial planets.",
  },
  {
    term: "Gas Giant",
    definition:
      "A gas giant is a large planet made mostly of gases. Jupiter, Saturn, Uranus, and Neptune are gas giants.",
  },
  {
    term: "Dwarf Planet",
    definition:
      "A dwarf planet is a small planet. It orbits the Sun just like other planets, but it is smaller. Pluto is a dwarf planet.",
  },
  {
    term: "Asteroid",
    definition:
      "An asteroid is a rocky object that orbits the Sun. Most asteroids are found in a belt between the orbits of Mars and Jupiter.",
  },
  {
    term: "Comet",
    definition:
      "A comet is a ball of ice and dust in space. It orbits the Sun. When a comet passes near the Sun, gas and dust stream out from it.",
  },
  {
    term: "Meteor",
    definition:
      "A meteor is a bright streak of light in the sky. It is made when a meteoroid hits the atmosphere of Earth.",
  },
  {
    term: "Meteoroid",
    definition:
      "A meteoroid is a small rock or particle of debris in our solar system. They range in size from dust to around 10 meters (33 feet) in diameter.",
  },
  {
    term: "Meteorite",
    definition:
      "A meteorite is a meteoroid that survives falling through Earth’s atmosphere and colliding with the ground.",
  },
  {
    term: "Galaxy",
    definition:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems.",
  },
  {
    term: "Milky Way Galaxy",
    definition:
      "The Milky Way Galaxy is the spiral galaxy we call home. It is about 100,000 light-years across and contains gas, dust, and roughly 400 billion stars.",
  },
  {
    term: "Universe",
    definition:
      "The universe is all of the galaxies, stars, planets, and other things in space.",
  },
  {
    term: "Cosmology",
    definition:
      "Cosmology is the study of the origin, current state, and future of our universe.",
  },
  {
    term: "Big Bang",
    definition:
      "The Big Bang is the name of the event that started the universe. It happened about 13.8 billion years ago.",
  },
  {
    term: "Dark Matter",
    definition:
      "Dark matter is a type of matter that does not interact with light or other electromagnetic radiation. Scientists think dark matter makes up about 85 percent of the matter in the universe.",
  },
  {
    term: "Dark Energy",
    definition:
      "Dark energy is a type of energy that makes up about 68 percent of the universe. It is pushing the universe to expand faster and faster.",
  },
  {
    term: "Black Hole",
    definition:
      "A black hole is an object with such strong gravity that nothing can escape from it. Not even light can escape from it.",
  },
  {
    term: "Supernova",
    definition:
      "A supernova is the explosion of a star. It is the largest explosion that takes place in space.",
  },
  {
    term: "Nebula",
    definition:
      "A nebula is a cloud of gas and dust in space. Some nebulae (more than one nebula) are regions where new stars are being formed, while others are the remains of dead or dying stars.",
  },
  {
    term: "Pulsar",
    definition:
      "A pulsar is a spinning neutron star that emits a beam of electromagnetic radiation. The radiation can only be observed when the beam of emission is pointing toward Earth.",
  },
  {
    term: "Quasar",
    definition:
      "A quasar is a very bright, distant, and active supermassive black hole at the center of a galaxy.",
  },
];

export default dictionary.toSorted((a, b) => a.term.localeCompare(b.term));
