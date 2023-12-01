import Wrapper from "@/components/Wrapper";
import { getPlanets } from "@/lib/data/planets";
import Link from "next/link";
import { PropsWithChildren } from "react";

const sources = [
  "https://exoplanets.nasa.gov/alien-worlds/strange-new-worlds/",
  "https://exoplanets.nasa.gov/what-is-an-exoplanet/planet-types/overview/",
];

function Section({ children }: PropsWithChildren) {
  return <div className="flex flex-col items-center gap-y-2">{children}</div>;
}

function SectionHeader({ children }: PropsWithChildren) {
  return <h2 className="mb-4 text-3xl sm:text-4xl">{children}</h2>;
}

function Paragraph({ children }: PropsWithChildren) {
  return <p className="text-lg">{children}</p>;
}

function List({ children }: PropsWithChildren) {
  return (
    <ul className="mb-4 flex list-disc grid-cols-2 flex-col items-center gap-x-4 gap-y-3 px-8 py-4 sm:grid">
      {children}
    </ul>
  );
}

function ListItem({ children }: PropsWithChildren) {
  return <li className="list-item text-start">{children}</li>;
}

export default async function AboutPage() {
  const planets = await getPlanets();

  return (
    <Wrapper title="About">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-y-12 text-center sm:gap-y-16">
        <Section>
          <SectionHeader>Author</SectionHeader>
          <Paragraph>
            This website was created by{" "}
            <Link
              target="_blank"
              href="https://sndrnz.io"
              className="text-blue-400 hover:underline hover:underline-offset-4 hover:opacity-90"
            >
              Sandro Darnuzer
            </Link>
            .
          </Paragraph>
        </Section>
        <Section>
          <SectionHeader>Sources</SectionHeader>
          <Paragraph>
            The information displayed on this website was collected from the
            following sources:
          </Paragraph>
          <List>
            {sources.map((source) => (
              <ListItem key={source}>
                <Link
                  target="_blank"
                  href={source}
                  className="text-blue-400 hover:underline hover:underline-offset-4 hover:opacity-90"
                >
                  {source}
                </Link>
              </ListItem>
            ))}
          </List>
          <Paragraph>
            The images and detailed information for the planets were taken from
            the following sources:
          </Paragraph>
          <List>
            {planets.map((planet) => (
              <ListItem key={planet.name}>
                <Link
                  target="_blank"
                  href={planet.source}
                  className="text-blue-400 hover:underline hover:underline-offset-4 hover:opacity-90"
                >
                  {planet.source}
                </Link>
              </ListItem>
            ))}
          </List>
        </Section>
      </div>
    </Wrapper>
  );
}
