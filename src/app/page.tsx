import Card from "@/components/Card";
import CardGrid from "@/components/CardGrid";
import Wrapper from "@/components/Wrapper";

const items = [
  {
    title: "Planets",
    href: "/planets",
    description:
      "Get to know some of the most interesting and unique planets in the universe.",
  },
  {
    title: "Planet Types",
    href: "/types",
    description:
      "Learn about the different types of planets and how they are classified.",
  },
  {
    title: "Detection Methods",
    href: "/methods",
    description:
      "Discover the different methods used to detect planets outside our solar system.",
  },
  {
    title: "Dictionary",
    href: "/dictionary",
    description:
      "Get familiar with the terminology used on this site and in the field of exoplanets.",
  },
];

export default function Home() {
  return (
    <Wrapper title="Explore">
      <CardGrid>
        {items.map((item) => (
          <Card
            key={item.href}
            title={item.title}
            href={item.href}
            description={item.description}
          />
        ))}
      </CardGrid>
    </Wrapper>
  );
}
