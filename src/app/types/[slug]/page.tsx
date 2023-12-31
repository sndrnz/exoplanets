import Paragraph from "@/components/Paragraph";
import PlanetList from "@/components/PlanetList";
import Wrapper from "@/components/Wrapper";
import { getPlanetTypeBySlug, getPlanetTypes } from "@/lib/data/planetTypes";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const planetTypes = await getPlanetTypes();

  return planetTypes.map((planetType) => ({
    slug: planetType.slug,
  }));
}

export default async function Page({ params: { slug } }: PageProps) {
  const planetType = await getPlanetTypeBySlug(slug);

  if (!planetType) {
    notFound();
  }

  return (
    <Wrapper title={planetType.displayName}>
      <div className="flex flex-col gap-y-16">
        <Paragraph>{planetType.description}</Paragraph>

        <PlanetList planets={planetType.planets} />
      </div>
    </Wrapper>
  );
}
