"use client";

import useScroll from "@/lib/hooks/useScroll";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

interface WrapperProps {
  title: string;
}

export default function Wrapper({
  title,
  children,
}: PropsWithChildren<WrapperProps>) {
  const { distance } = useScroll();

  const titleRef = useRef<HTMLHeadingElement>(null);

  const [titleTop, setTitleTop] = useState(0);

  const opacity = 1 - (distance / 100) * 0.75;
  const scale = Math.max(1 - (distance / 100) * 0.05, 0);

  useEffect(() => {
    const top = titleRef.current?.getBoundingClientRect().top ?? 0;

    const totalTop = top == 0 ? 96 : top + window.scrollY;
    setTitleTop(totalTop);
  }, []);

  return (
    <div className="relative">
      <h1
        ref={titleRef}
        className="sticky left-0 right-0 mb-16 bg-gradient-to-b from-primary to-white/5 bg-clip-text text-center text-6xl font-bold text-transparent sm:text-8xl md:text-9xl"
        style={{
          top: titleTop,
          opacity,
          scale,
        }}
      >
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
}
