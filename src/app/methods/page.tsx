import Card from "@/components/Card";
import CardGrid from "@/components/CardGrid";
import Wrapper from "@/components/Wrapper";
import { getDetectionMethods } from "@/lib/data/detectionMethods";

export default async function Page() {
  const detectionMethods = await getDetectionMethods();

  return (
    <Wrapper title="Detection Methods">
      <CardGrid>
        {detectionMethods.map((detectionMethod) => (
          <Card
            key={detectionMethod.id}
            href={`/methods/${detectionMethod.slug}`}
            title={detectionMethod.displayName}
            description={detectionMethod.description}
          />
        ))}
      </CardGrid>
    </Wrapper>
  );
}
