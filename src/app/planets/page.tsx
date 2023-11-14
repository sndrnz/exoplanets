import PlanetCard from "@/components/PlanetCard";
import Wrapper from "@/components/Wrapper";
import planets from "@/data/planets";

export default function Home() {
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
