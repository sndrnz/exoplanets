"use client";
import { useEffect, useState } from "react";

export default function useScroll() {
  const [isOnTop, setIsOnTop] = useState(true);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    setDistance(window.scrollY);
    const handleScroll = () => {
      setDistance(window.scrollY);
      if (window.scrollY > 32) {
        setIsOnTop(false);
      } else {
        setIsOnTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isOnTop, distance };
}
