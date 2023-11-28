import PlanetList from "@/components/PlanetList";
import Wrapper from "@/components/Wrapper";
import { getPlanetTypes } from "@/lib/data/planetTypes";
import { getPlanets } from "@/lib/data/planets";

export default async function Home() {
  const planets = await getPlanets();
  const planetTypes = await getPlanetTypes();

  return (
    <Wrapper title="Planets">
      <PlanetList planets={planets} planetTypes={planetTypes} />
    </Wrapper>
  );
}
