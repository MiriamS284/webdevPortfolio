"use client";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { Image } from "@react-three/drei";
import * as THREE from "three";

const CarouselCard = ({ url, ...props }) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (ref.current) {
      const scaleValue = hovered ? 2.2 : 2; // Passe die Größe für Hover und Normalzustand an
      ref.current.scale.set(scaleValue, scaleValue, 1);
    }
  });

  const pointerOver = () => setHovered(true);
  const pointerOut = () => setHovered(false);

  return (
    <Image
      alt={"Image"}
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      scale={[1.5, 1, 1]}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      {...props}
    >
      <planeGeometry args={[1.5, 1]} />
    </Image>
  );
};

export default CarouselCard;
