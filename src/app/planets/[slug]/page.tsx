import { InfoTable, InfoTableRow } from "@/components/InfoTable";
import Link from "@/components/Link";
import Wrapper from "@/components/Wrapper";
import { getPlanetBySlug, getPlanets } from "@/lib/data/planets";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const planets = await getPlanets();

  return planets.map((planet) => ({
    slug: planet.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  const planet = await getPlanetBySlug(slug);

  if (!planet) {
    notFound();
  }

  return (
    <>
      <Wrapper title={planet.name}>
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <div className="max-w-xl">
            <Image
              className="rounded-full"
              loading="lazy"
              placeholder="blur"
              blurDataURL={planet.imagePlaceholder ?? undefined}
              width={680}
              height={680}
              alt={planet.name}
              sizes="680px"
              src={`/images/planets/${planet.image}`}
            />
          </div>

          <div className="mx-auto mt-16 w-full max-w-xl">
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
              <InfoTableRow label="Type">
                <Link
                  className="text-primary-400"
                  href={`/types/${planet.type.slug}`}
                >
                  {planet.type.name}
                  <ArrowUpRightIcon className="h-6 w-6" />
                </Link>
              </InfoTableRow>
              <InfoTableRow label="Source">
                <Link
                  className="text-blue-400"
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
    </>
  );
}
