import { Planet } from "@/lib/data/planets";
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import TiltEffect from "./TiltEffect";

interface PlanetCardProps {
  planet: Planet;
}

export default function PlanetCard({ planet }: PlanetCardProps) {
  return (
    <TiltEffect>
      <Link href={`/planets/${planet.slug}`}>
        <Card
          radius="md"
          className="group cursor-pointer border-2 border-white/10 bg-transparent backdrop-blur-xs"
          disableRipple
        >
          <div className="relative mb-2 p-8">
            <Image
              className="rounded-full"
              loading="lazy"
              placeholder="blur"
              blurDataURL={planet.imagePlaceholder ?? undefined}
              width={640}
              height={640}
              alt={planet.name}
              sizes="(max-width: 768px) 640px, (max-width: 1024px) 400px, 320px"
              src={`/images/planets/${planet.image}`}
            />
          </div>
          <CardFooter className="block space-y-2 px-8 pb-8">
            <h2 className="text-4xl font-bold">{planet.name}</h2>
            <p className="line-clamp-2 min-h-[3em] text-base text-white/50">
              {planet.description}
            </p>
          </CardFooter>
        </Card>
      </Link>
    </TiltEffect>
  );
}
