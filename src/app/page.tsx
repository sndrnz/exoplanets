import TiltEffect from "@/components/TiltEffect";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

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
      "Learn the meaning of the most important terms used in the study of exoplanets.",
  },
];

export default function Home() {
  return (
    <Wrapper title="Explore">
      <div className="mx-auto flex max-w-4xl grid-cols-2 flex-col gap-8 sm:grid">
        {items.map((item, index) => (
          <TiltEffect key={index}>
            <Link
              href={item.href}
              className="flex w-full flex-col gap-y-4 rounded-xl border-2 border-white/10 p-8 backdrop-blur-xs"
            >
              <h2 className="text-3xl sm:text-4xl">{item.title}</h2>
              <p className="text-white/50">{item.description}</p>
            </Link>
          </TiltEffect>
        ))}
      </div>
    </Wrapper>
  );
}
