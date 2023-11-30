import PlanetList from "@/components/PlanetList";
import Wrapper from "@/components/Wrapper";
import { getPlanetTypeBySlug, getPlanetTypes } from "@/lib/data/planetTypes";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

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
    <Wrapper title={planetType.name}>
      <div className="flex flex-col gap-y-16">
        <div className="mx-auto w-full max-w-4xl">
          <p className="text-center text-xl !leading-loose sm:text-2xl">
            {planetType.description}
          </p>
        </div>

        <PlanetList planets={planetType.planets} />
      </div>
    </Wrapper>
  );
}
