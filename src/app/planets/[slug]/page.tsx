import Wrapper from "@/components/Wrapper";
import { getPlanetBySlug, getPlanets } from "@/lib/data/planets";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const planets = await getPlanets();

  return planets.map((planet) => ({
    slug: planet.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = params;

  const planet = await getPlanetBySlug(slug);

  return (
    <>
      {planet ? (
        <Wrapper title={planet.name}></Wrapper>
      ) : (
        <h1>Planet not found</h1>
      )}
    </>
  );
}
