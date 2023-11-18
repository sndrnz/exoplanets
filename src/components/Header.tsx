"use client";

import navigationItems from "@/lib/data/navigation";
import { Link, Navbar, NavbarContent, NavbarItem, cn } from "@nextui-org/react";
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
    <Navbar
      classNames={{
        wrapper: "max-w-7xl",
        content: "flex gap-8",
      }}
      isBlurred={false}
      className={cn(
        "transition-all duration-700",
        isOnTop ? "bg-transparent" : "bg-black",
      )}
    >
      <NavbarContent>
        {navigationItems.map((item) => (
          <NavbarItem key={item.path}>
            <Link
              href={item.path}
              color={pathname === item.path ? "primary" : "foreground"}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
