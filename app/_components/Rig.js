"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

const Rig = (props) => {
  const ref = useRef();
  const scroll = useScroll();

  useFrame((state) => {
    ref.current.rotation.y = -scroll.offset * Math.PI * 2;
    state.camera.lookAt(0, 0, 0);
  });

  return <group ref={ref} {...props} />;
};

export default Rig;
