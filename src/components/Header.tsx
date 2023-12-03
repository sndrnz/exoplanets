"use client";

import icon from "@/assets/icon.webp";
import navigationItems from "@/lib/data/navigation";
import { cn } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();

  const [isOnTop, setIsOnTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header>
      <nav
        className={cn(
          "fixed left-0 right-0 top-0 z-50 h-20 shadow-white/20 transition-all",
          {
            "bg-transparent shadow-none": isOnTop,
            "bg-black/50 shadow-sm backdrop-blur-md": !isOnTop && !isMenuOpen,
            "delay-200": isMenuOpen,
          },
        )}
      >
        <div className="mx-auto h-full max-w-screen-xl">
          <div className="absolute bottom-0 top-0 z-50 flex items-center pl-8 ">
            <Link
              className="flex items-center gap-x-2"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                alt="Planet icon"
                src={icon}
                width={256}
                height={256}
                className="h-7 w-7"
              />
              <div
                className={cn(
                  "text-2xl",
                  pathname === "/"
                    ? "text-primary"
                    : "text-foreground hover:opacity-80",
                )}
              >
                Exoplanets
              </div>
            </Link>
          </div>
          <ul className="z-50 hidden h-full items-center justify-center gap-8 md:flex">
            {navigationItems.map((item) => (
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
                      : "text-foreground hover:opacity-80",
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-0 right-0 top-0 z-50 flex items-center pr-8 md:hidden ">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuIcon className="h-8 w-8" />
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key={0}
            initial={{
              y: "-100%",
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: "-100%",
            }}
            transition={{
              duration: 0.5,
              ease: "anticipate",
            }}
            layout
            className="fixed left-0 right-0 z-20 bg-black/50 shadow-sm shadow-white/20"
          >
            <ul className="-mt-8 flex flex-col items-start gap-y-4 px-8 pb-8 pt-28">
              {navigationItems.map((item) => (
                <li key={item.path} className="w-full">
                  <Link
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block w-full text-lg",
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
          </motion.div>
        )}
        {isMenuOpen && (
          <motion.div
            key={1}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="fixed inset-0 z-10 bg-black/50 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
