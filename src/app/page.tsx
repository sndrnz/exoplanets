import PlanetCard from "@/components/PlanetCard";
import planets from "@/data/planets";

export default function Home() {
  return (
    <div>
      <h1 className="bg-gradient-to-b from-primary to-white/5 bg-clip-text text-center text-6xl font-bold text-transparent sm:text-8xl md:text-9xl">
        Exoplanets
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {planets.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
    </div>
  );
}
