import { Planet } from "@/data/planets";
import { Card, CardFooter, Image } from "@nextui-org/react";
import TiltEffect from "./TiltEffect";

type Props = {
  planet: Planet;
};

export default function PlanetCard({ planet }: Props) {
  return (
    <TiltEffect>
      <Card
        radius="lg"
        className="group border-2 border-white/20 bg-transparent bg-gradient-to-b from-white/5 to-black backdrop-blur-sm transition-background hover:border-primary hover:from-primary/20"
      >
        <div className="relative mb-2 p-8">
          <Image
            loading="lazy"
            alt="Earth"
            src={`/images/planets/${planet.image}`}
          />
          <div className="absolute bottom-4 left-1/2 h-2 w-36 -translate-x-1/2 rounded-full bg-white/80 blur-xl"></div>
        </div>
        <CardFooter className="block space-y-2">
          <h2 className="text-center text-2xl font-bold">{planet.name}</h2>
          <p className="text-start opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            consequuntur amet vitae recusandae ratione officia sapiente deleniti
            quas iste placeat.
          </p>
        </CardFooter>
      </Card>
    </TiltEffect>
  );
}
