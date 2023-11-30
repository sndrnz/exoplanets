"use client";

import { PlanetType } from "@/lib/data/planetTypes";
import { Planet, PlanetWithType } from "@/lib/data/planets";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { XIcon } from "lucide-react";
import { useQueryState } from "next-usequerystate";
import { useEffect, useState } from "react";
import PlanetList from "./PlanetList";

interface PlanetsProps {
  planets: PlanetWithType[];
  planetTypes: PlanetType[];
}

export default function Planets({ planets, planetTypes }: PlanetsProps) {
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
    <div className="flex flex-col gap-y-16">
      <div className="relative z-40 mx-auto flex h-full w-full max-w-4xl flex-col items-center gap-x-4 gap-y-4 sm:flex-row">
        <h3 className="text-xl">Filter:</h3>
        <Input
          aria-label="Name"
          placeholder="Name"
          name="name"
          variant="bordered"
          color="primary"
          value={nameQuery ?? ""}
          onValueChange={setNameQuery}
          classNames={{
            base: "bg-transparent backdrop-blur-xs rounded-xl",
          }}
        />
        <Select
          aria-label="Type"
          placeholder="Type"
          name="type"
          variant="bordered"
          color="primary"
          classNames={{
            base: "bg-transparent backdrop-blur-xs rounded-xl",
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
          className="flex items-center gap-x-1 rounded-xl text-gray-400 hover:opacity-80 active:opacity-70"
          onClick={clearFilters}
        >
          Clear
          <XIcon className="h-6 w-6 " />
        </button>
      </div>
      <PlanetList planets={filteredPlanets} />
    </div>
  );
}
