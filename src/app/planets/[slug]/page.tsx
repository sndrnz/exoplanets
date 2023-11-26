import { InfoTable, InfoTableRow } from "@/components/InfoTable";
import Link from "@/components/Link";
import Wrapper from "@/components/Wrapper";
import { getPlanetBySlug, getPlanets } from "@/lib/data/planets";
import Image from "next/image";

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
        <Wrapper title={planet.name}>
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <div className="max-w-xl">
              <Image
                loading="lazy"
                width={680}
                height={680}
                alt={planet.name}
                sizes="680px"
                src={`/images/planets/${planet.image}`}
              />
            </div>

            <div className="mx-auto mt-16 w-full max-w-xl rounded-lg border-2 border-white/20 bg-white/5 backdrop-blur-sm">
              <InfoTable>
                <InfoTableRow label="Name" value={planet.name} />
                <InfoTableRow
                  label="Discovered"
                  value={planet.discovered.toString()}
                />
                <InfoTableRow
                  label="Distance to earth"
                  value={`${planet.distance} light years`}
                />
                <InfoTableRow label="Type" value={planet.type.name} />
                <InfoTableRow label="Source">
                  <Link
                    className="text-gray-400"
                    target="_blank"
                    href={planet.source}
                  >
                    <span
                      title={planet.source}
                      className="block w-48 truncate sm:w-56"
                    >
                      {planet.source}
                    </span>
                  </Link>
                </InfoTableRow>
              </InfoTable>
            </div>
          </div>
        </Wrapper>
      ) : (
        <h1>Planet not found</h1>
      )}
    </>
  );
}
