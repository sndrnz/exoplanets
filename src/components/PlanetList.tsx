import { Planet } from "@/lib/data/planets";
import PlanetCard from "./PlanetCard";

interface PlanetListProps {
  planets: Planet[];
}

export default function PlanetList({ planets }: PlanetListProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {planets.map((planet) => (
        <PlanetCard key={planet.name} planet={planet} />
      ))}
    </div>
  );
}
