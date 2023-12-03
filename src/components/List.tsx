import Link from "next/link";
import { PropsWithChildren } from "react";

interface ListItemProps {
  value: string;
  href: string;
}

export function ListItem({
  children,
  value,
  href,
}: PropsWithChildren<ListItemProps>) {
  return (
    <li className="w-full py-12 text-center text-white first:pt-0 last:pb-0">
      <Link href={href}>
        <h2 className="text-3xl leading-relaxed hover:opacity-80">{value}</h2>
      </Link>
    </li>
  );
}

export default function List({ children }: PropsWithChildren) {
  return (
    <ul className="mx-auto flex max-w-sm flex-col items-center divide-y divide-white/20">
      {children}
    </ul>
  );
}
