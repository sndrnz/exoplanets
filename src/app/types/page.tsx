import List, { ListItem } from "@/components/List";
import Wrapper from "@/components/Wrapper";
import { getPlanetTypes } from "@/lib/data/planetTypes";

export default async function PlanetTypesPage() {
  const planetTypes = await getPlanetTypes();

  return (
    <Wrapper title="Planet Types">
      <List>
        {planetTypes.map((planetType) => (
          <ListItem
            key={planetType.id}
            value={planetType.displayName}
            href={`/types/${planetType.slug}`}
          />
        ))}
      </List>
    </Wrapper>
  );
}
