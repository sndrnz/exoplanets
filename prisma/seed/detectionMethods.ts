import { DetectionMethod } from "@prisma/client";

const detectionMethods: DetectionMethod[] = [
  {
    id: "Transit",
    displayName: "Transit",
    description:
      "When a planet passes in front of a star, it blocks some of the star's light. This makes the star appear to get dimmer. Scientists can use special instruments to measure how much the star's brightness changes. This information can be used to learn about the planet's size and orbit.",
    slug: "transit",
  },
  {
    id: "RadialVelocity",
    displayName: "Radial Velocity",
    description:
      "The radial velocity method uses the Doppler effect to measure the motion of a star caused by the gravitational pull of a planet. By measuring the frequency shifts of the star's light, astronomers can calculate the planet's mass and orbit.",
    slug: "radial-velocity",
  },
  {
    id: "Imaging",
    displayName: "Imaging",
    description:
      "Taking pictures of exoplanets is challenging due to the brightness of their host stars. Scientists use special techniques, like coronagraphy and starshade, to block out the starlight and image these dim planets. These techniques are still being developed but have already produced stunning images of exoplanets. With future advancements, scientists hope to capture even clearer pictures of these distant worlds.",
    slug: "imaging",
  },
  {
    id: "OrbitalBrightnessModulation",
    displayName: "Orbital Brightness Modulation",
    description:
      "This method looks for changes in the brightness of a star caused by the gravitational pull of an exoplanet. The exoplanet's gravity can distort the shape of the star, causing it to appear brighter or dimmer. It has the potential to detect exoplanets that are too close to their stars to be detected by other methods.",
    slug: "orbital-brightness-modulation",
  },
  {
    id: "PulsarTiming",
    displayName: "Pulsar Timing",
    description:
      "Pulsar timing uses pulsars to detect exoplanets. The pulsar acts as a cosmic clock, and the presence of an exoplanet causes the pulsar to wobble. This wobble causes fluctuations in the timing of the pulsar's pulses. By measuring these fluctuations, astronomers can determine the mass and orbit of the exoplanet.",
    slug: "pulsar-timing",
  },
];

export default detectionMethods;
