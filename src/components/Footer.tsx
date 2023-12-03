import Link from "@/components/Link";
import navigationItems from "@/lib/data/navigation";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 backdrop-blur-xs">
      <ul className="flex h-full flex-col items-center justify-center gap-x-8 gap-y-6 py-6 sm:flex-row sm:py-8">
        {navigationItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
