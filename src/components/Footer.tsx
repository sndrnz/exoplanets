import Link from "@/components/Link";
import navigationItems from "@/lib/data/navigation";
import NextLink from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 backdrop-blur-xs">
      <div className="mx-auto flex max-w-screen-xl flex-row justify-between px-8 py-6 md:py-8">
        <ul className="flex h-full flex-col items-start justify-center gap-x-8 gap-y-4 md:flex-row md:items-center ">
          <li key="/">
            <Link href="/">Home</Link>
          </li>
          {navigationItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-end gap-x-6 gap-y-2 md:flex-row">
          <div>© Sandro Darnuzer</div>
          <NextLink target="_blank" href="https://sndrnz.io">
            sndrnz.io
          </NextLink>
        </div>
      </div>
    </footer>
  );
}
