import { AttributeType } from "@prisma/client";

const attributeTypes: AttributeType[] = [
  {
    id: "Discovery",
    displayName: "Discovery",
    explanation: "The year the exoplanet was discovered.",
  },
  {
    id: "Mass",
    displayName: "Mass",
    explanation: "The mass of the exoplanet.",
  },
  {
    id: "Radius",
    displayName: "Radius",
    explanation: "The radius of the exoplanet.",
  },
  {
    id: "Distance",
    displayName: "Distance",
    explanation: "The distance of the exoplanet from Earth.",
  },
];

export default attributeTypes;
