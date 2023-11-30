"use client";

import { PlanetType } from "@/lib/data/planetTypes";
import { Planet } from "@/lib/data/planets";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { XIcon } from "lucide-react";
import { useQueryState } from "next-usequerystate";
import { useEffect, useState } from "react";
import PlanetCard from "./PlanetCard";

interface PlanetListProps {
  planets: Planet[];
  planetTypes: PlanetType[];
}

export default function PlanetList({ planets, planetTypes }: PlanetListProps) {
  const allPlanets = planets;

  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>(allPlanets);

  // const [nameInput, setNameInput] = useState("");
  // const [typeSelection, setTypeSelection] = useState<Selection>(new Set([]));

  const [nameQuery, setNameQuery] = useQueryState("name");
  const [typeQuery, setTypeQuery] = useQueryState("type");

  function clearFilters() {
    setNameQuery(null);
    setTypeQuery(null);
  }

  useEffect(() => {
    const name = nameQuery?.toLowerCase() ?? "";
    const type = typeQuery ?? "";

    const filteredPlanets = allPlanets.filter((planet) => {
      const nameMatches =
        name === "" || planet.name.toLowerCase().includes(name);
      const typeMatches = type === "" || planet.type.slug === type;
      return nameMatches && typeMatches;
    });

    setFilteredPlanets(filteredPlanets);
  }, [nameQuery, typeQuery, allPlanets]);

  return (
    <div className="flex flex-col gap-y-8">
      <div className="relative z-40 mx-auto flex h-full w-full max-w-xl items-center gap-x-4">
        <Input
          aria-label="Name"
          placeholder="Name"
          name="name"
          variant="bordered"
          color="primary"
          value={nameQuery ?? ""}
          onValueChange={setNameQuery}
        />
        <Select
          aria-label="Type"
          placeholder="Type"
          name="type"
          variant="bordered"
          color="primary"
          classNames={{
            base: "bg-transparent backdrop-blur-sm rounded-xl",
            popoverContent: "bg-black/50 backdrop-blur-md",
          }}
          selectedKeys={typeQuery ? [typeQuery] : []}
          onSelectionChange={(value) =>
            setTypeQuery((Array.from(value)[0] ?? "").toString())
          }
        >
          {planetTypes.map((planetType) => (
            <SelectItem key={planetType.slug} value={planetType.slug}>
              {planetType.name}
            </SelectItem>
          ))}
        </Select>
        <button
          aria-label="clear"
          className="rounded-xl border-2 border-white/20 px-2 py-1 hover:opacity-80 active:opacity-70"
          onClick={clearFilters}
        >
          <XIcon className="h-6 w-6 text-gray-400" />
        </button>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPlanets.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
    </div>
  );
}
