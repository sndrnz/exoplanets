import PlanetCard from "@/components/PlanetCard";
import planets from "@/data/planets";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Exoplanets</h1>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {planets.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
    </div>
  );
}
