import Link from "next/link";
import TiltEffect from "./TiltEffect";

interface CardProps {
  title: string;
  href: string;
  description?: string;
}

export default function Card({ title, href, description }: CardProps) {
  return (
    <TiltEffect>
      <Link
        href={href}
        className="flex w-full flex-col gap-y-4 rounded-xl border-2 border-white/10 p-8 backdrop-blur-xs"
      >
        <h2 className="text-3xl sm:text-4xl">{title}</h2>
        {description && (
          <p className="line-clamp-2 text-white/50">{description}</p>
        )}
      </Link>
    </TiltEffect>
  );
}
