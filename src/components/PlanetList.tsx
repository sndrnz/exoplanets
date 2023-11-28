"use client";

import { PlanetType } from "@/lib/data/planetTypes";
import { Planet } from "@/lib/data/planets";
import { Input, Select, SelectItem, Selection } from "@nextui-org/react";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import PlanetCard from "./PlanetCard";

interface PlanetListProps {
  planets: Planet[];
  planetTypes: PlanetType[];
}

export default function PlanetList({ planets, planetTypes }: PlanetListProps) {
  const allPlanets = planets;

  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>(allPlanets);

  const [nameInput, setNameInput] = useState("");
  const [typeSelection, setTypeSelection] = useState<Selection>(new Set([]));

  function clearFilters() {
    setNameInput("");
    setTypeSelection(new Set([]));
  }

  useEffect(() => {
    const name = nameInput.toLowerCase();
    const type = Array.from(typeSelection)[0] ?? "";

    const filteredPlanets = allPlanets.filter((planet) => {
      const nameMatches =
        name === "" || planet.name.toLowerCase().includes(name);
      const typeMatches = type === "" || planet.type.slug === type;

      return nameMatches && typeMatches;
    });

    setFilteredPlanets(filteredPlanets);
  }, [nameInput, typeSelection, allPlanets]);

  return (
    <div className="flex flex-col gap-y-8">
      <div className="relative z-50 mx-auto flex h-full w-full max-w-xl items-center gap-x-4">
        <Input
          aria-label="Name"
          placeholder="Name"
          name="name"
          variant="bordered"
          color="primary"
          value={nameInput}
          onValueChange={setNameInput}
        />
        <Select
          aria-label="Type"
          placeholder="Type"
          name="type"
          variant="bordered"
          color="primary"
          selectedKeys={typeSelection}
          onSelectionChange={setTypeSelection}
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
