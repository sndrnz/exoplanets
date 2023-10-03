"use client";

import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Planet() {
  return (
    <Canvas className="">
      <Float floatIntensity={2} speed={5} rotationIntensity={2}>
        <mesh scale={2}>
          <sphereGeometry />
          <meshStandardMaterial roughness={0.7} flatShading color="green" />
        </mesh>
      </Float>
      <pointLight position={[1, 2, 3]} intensity={70} />
      <ambientLight intensity={2} />
    </Canvas>
  );
}
