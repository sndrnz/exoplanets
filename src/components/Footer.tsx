import Link from "@/components/Link";
import { footerItems } from "@/lib/data/navigation";

export default function Footer() {
  return (
    <footer className="mt-auto h-20 border-t border-white/20 bg-black/50 backdrop-blur-md">
      <ul className="flex h-full items-center justify-center gap-8">
        {footerItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
