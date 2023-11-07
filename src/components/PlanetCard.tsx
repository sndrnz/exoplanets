import { Planet } from "@/data/planets";
import { Card, CardFooter, Image } from "@nextui-org/react";

type Props = {
  planet: Planet;
};

export default function PlanetCard({ planet }: Props) {
  return (
    <>
      <Card
        radius="lg"
        className="border-2 border-white/20 bg-transparent bg-gradient-to-b from-black/10 to-black hover:border-white/30"
      >
        <div className="p-8">
          <Image
            alt="Earth"
            src={`/images/planets/${planet.image}`}
            className=""
          />
        </div>
        <CardFooter className="block space-y-2">
          <h2 className="text-2xl font-bold">{planet.name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            consequuntur amet vitae recusandae ratione officia sapiente deleniti
            quas iste placeat.
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
