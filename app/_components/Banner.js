"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import "../_lib/utils";

function Banner({ radius = 5, title, image, ...props }) {
  const ref = useRef();
  const texture = useTexture(image || "/logo.png");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[radius, radius, 0.2, 64, 1, true]} />
      <meshSineMaterial
        map={texture}
        map-anisotropy={16}
        map-repeat={[20, 1]}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
}

export default Banner;
