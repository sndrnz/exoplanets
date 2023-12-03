import Paragraph from "@/components/Paragraph";
import PlanetList from "@/components/PlanetList";
import Wrapper from "@/components/Wrapper";
import {
  getDetectionMethodBySlug,
  getDetectionMethods,
} from "@/lib/data/detectionMethods";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const detectionMethods = await getDetectionMethods();

  return detectionMethods.map((detectionMethod) => ({
    slug: detectionMethod.slug,
  }));
}

export default async function DetectionMethodPage({
  params: { slug },
}: PageProps) {
  const detectionMethod = await getDetectionMethodBySlug(slug);

  if (!detectionMethod) {
    notFound();
  }

  return (
    <Wrapper title={detectionMethod.displayName}>
      <div className="flex flex-col gap-y-16">
        <Paragraph>{detectionMethod.description}</Paragraph>

        <PlanetList planets={detectionMethod.planets} />
      </div>
    </Wrapper>
  );
}
