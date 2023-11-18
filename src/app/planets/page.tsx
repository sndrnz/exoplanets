import PlanetCard from "@/components/PlanetCard";
import Wrapper from "@/components/Wrapper";
import { getPlanets } from "@/lib/data/planets";

export default async function Home() {
  const planets = await getPlanets();

  return (
    <Wrapper title="Planets">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {planets.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
    </Wrapper>
  );
}
