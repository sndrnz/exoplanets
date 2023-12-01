"use client";

import { headerItems } from "@/lib/data/navigation";
import { cn } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();

  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsOnTop(false);
      } else {
        setIsOnTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <Navbar
    //   classNames={{
    //     wrapper: "max-w-7xl",
    //     content: "flex gap-8 justify-center bg-blue-500",
    //   }}
    //   isBlurred={false}
    //   className={cn(
    //     "transition-all duration-700",
    //     isOnTop ? "bg-transparent" : "bg-black/50 backdrop-blur-md",
    //   )}
    // >
    //   <NavbarContent>
    //     {navigationItems.map((item) => (
    //       <NavbarItem key={item.path}>
    //         <Link
    //           href={item.path}
    //           color={pathname === item.path ? "primary" : "foreground"}
    //         >
    //           {item.name}
    //         </Link>
    //       </NavbarItem>
    //     ))}
    //   </NavbarContent>
    // </Navbar>
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 h-20 shadow-white/20",
        isOnTop
          ? "bg-transparent shadow-none"
          : "bg-black/50 shadow-sm backdrop-blur-md",
      )}
    >
      <ul className="flex h-full items-center justify-center gap-8">
        {headerItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={cn(
                "text-lg",
                (
                  item.path === "/"
                    ? item.path === pathname
                    : pathname.includes(item.path)
                )
                  ? "text-primary"
                  : "text-foreground",
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
