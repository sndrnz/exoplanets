"use client";
import { PropsWithChildren } from "react";
import Tilt from "react-parallax-tilt";

export default function TiltEffect({ children }: PropsWithChildren) {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glareEnable={true}
      glareMaxOpacity={0.15}
      glarePosition="all"
      glareColor="#4dffea"
      transitionSpeed={2000}
    >
      {children}
    </Tilt>
  );
}
