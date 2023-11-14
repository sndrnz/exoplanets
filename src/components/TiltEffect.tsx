"use client";
import { PropsWithChildren } from "react";
import Tilt from "react-parallax-tilt";

export default function TiltEffect({ children }: PropsWithChildren) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareMaxOpacity={0.15}
      glarePosition="bottom"
      glareColor="#ffffff"
      transitionSpeed={2000}
    >
      {children}
    </Tilt>
  );
}