"use client";

import navigationItems from "@/data/navigation";
import { Link, Navbar, NavbarContent, NavbarItem, cn } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();

  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 32) {
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
      className={cn(
        "transition-colors duration-700",
        isOnTop
          ? "bg-transparent backdrop-blur-none"
          : "bg-white/50 backdrop-blur-none",
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
