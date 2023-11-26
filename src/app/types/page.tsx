import Wrapper from "@/components/Wrapper";
import { getPlanetTypes } from "@/lib/data/planetTypes";
import Link from "next/link";

export default async function Page() {
  const planetTypes = await getPlanetTypes();

  return (
    <Wrapper title="Planet Types">
      <ul className="mx-auto flex max-w-xl flex-col items-center divide-y divide-white/50">
        {planetTypes.map((planetType) => (
          <li
            key={planetType.id}
            className="w-full py-14 text-center first:pt-0 last:pb-0"
          >
            <Link href={`/types/${planetType.slug}`}>
              <h2 className="text-5xl hover:opacity-80">{planetType.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
