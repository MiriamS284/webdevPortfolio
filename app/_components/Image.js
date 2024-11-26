"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Image as ImageImpl } from "@react-three/drei";
import { MathUtils } from "three";
import { useScroll } from "@react-three/drei";

function Image({ url, ...props }) {
  const ref = useRef();
  const group = useRef();
  const data = useScroll();

  useFrame((state, delta) => {
    group.current.position.z = MathUtils.damp(
      group.current.position.z,
      Math.max(0, data.delta * 50),
      4,
      delta
    );
    ref.current.material.grayscale = MathUtils.damp(
      ref.current.material.grayscale,
      Math.max(0, 1 - data.delta * 1000),
      4,
      delta
    );
  });

  return (
    <group ref={group}>
      <ImageImpl ref={ref} url={url} {...props} />
    </group>
  );
}

export default Image;
