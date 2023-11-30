import Planets from "@/components/Planets";
import Wrapper from "@/components/Wrapper";
import { getPlanetTypes } from "@/lib/data/planetTypes";
import { getPlanetsWithType } from "@/lib/data/planets";

export default async function Home() {
  const planets = await getPlanetsWithType();
  const planetTypes = await getPlanetTypes();

  return (
    <Wrapper title="Planets">
      <Planets planets={planets} planetTypes={planetTypes} />
    </Wrapper>
  );
}
