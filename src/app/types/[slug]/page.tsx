import Wrapper from "@/components/Wrapper";
import { getPlanetTypeBySlug, getPlanetTypes } from "@/lib/data/planetTypes";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const planetTypes = await getPlanetTypes();

  return planetTypes.map((planetType) => ({
    slug: planetType.slug,
  }));
}

export default async function Page({ params: { slug } }: Props) {
  const planetType = await getPlanetTypeBySlug(slug);

  if (!planetType) {
    notFound();
  }

  return (
    <Wrapper title={planetType.name}>
      <div className="mx-auto mt-16 w-full max-w-xl">
        <p className="text-justify text-xl sm:text-2xl">
          {planetType.description}
        </p>
      </div>
    </Wrapper>
  );
}
