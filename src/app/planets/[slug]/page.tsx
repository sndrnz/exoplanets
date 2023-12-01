import Link from "@/components/Link";
import { AttributeRow, Table, TableRow } from "@/components/Table";
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
        <div className="mx-auto flex flex-col items-center">
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

          <div className="mx-auto mt-16 w-full max-w-2xl">
            <Table>
              <TableRow label="Name" value={planet.name} />
              <TableRow label="Type">
                <Link
                  className="text-primary-400"
                  href={`/types/${planet.type.slug}`}
                >
                  {planet.type.displayName}
                  <ArrowUpRightIcon className="h-6 w-6" />
                </Link>
              </TableRow>
              {planet.attributes.map((attribute) => (
                <AttributeRow key={attribute.type.id} attribute={attribute} />
              ))}

              <TableRow label="Source">
                <Link
                  className="text-blue-400"
                  target="_blank"
                  href={planet.source}
                >
                  <span className="block w-48 truncate sm:w-56">NASA</span>
                </Link>
              </TableRow>
            </Table>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
