import List, { ListItem } from "@/components/List";
import Wrapper from "@/components/Wrapper";
import { getDetectionMethods } from "@/lib/data/detectionMethods";

export default async function Page() {
  const detectionMethods = await getDetectionMethods();

  return (
    <Wrapper title="Detection Methods">
      <List>
        {detectionMethods.map((detectionMethod) => (
          <ListItem
            key={detectionMethod.id}
            value={detectionMethod.displayName}
            href={`/methods/${detectionMethod.slug}`}
          />
        ))}
      </List>
    </Wrapper>
  );
}
