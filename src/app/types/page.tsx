import Card from "@/components/Card";
import CardGrid from "@/components/CardGrid";
import Wrapper from "@/components/Wrapper";
import { getPlanetTypes } from "@/lib/data/planetTypes";

export default async function PlanetTypesPage() {
  const planetTypes = await getPlanetTypes();

  return (
    <Wrapper title="Planet Types">
      <CardGrid>
        {planetTypes.map((planetType) => (
          <Card
            key={planetType.id}
            href={`/types/${planetType.slug}`}
            title={planetType.displayName}
            description={planetType.description}
          />
        ))}
      </CardGrid>
    </Wrapper>
  );
}
