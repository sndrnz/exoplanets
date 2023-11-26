import { Planet } from "@/lib/data/planets";
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import TiltEffect from "./TiltEffect";

type Props = {
  planet: Planet;
};

export default function PlanetCard({ planet }: Props) {
  return (
    <TiltEffect>
      <Link href={`/planets/${planet.slug}`}>
        <Card
          radius="lg"
          className="group cursor-pointer border-2 border-white/20 bg-transparent bg-gradient-to-b from-white/5 to-black backdrop-blur-sm transition-background hover:border-primary hover:from-primary/20"
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
          <CardFooter className="block space-y-2 pb-8">
            <h2 className="text-center text-4xl font-bold">{planet.name}</h2>
            {/* <p className="text-start opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            consequuntur amet vitae recusandae ratione officia sapiente deleniti
            quas iste placeat.
          </p> */}
          </CardFooter>
        </Card>
      </Link>
    </TiltEffect>
  );
}
