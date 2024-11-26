"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import Pages from "./Pages";
import OverlayText from "./OverlayText";

export default function AppCanvas() {
  const scrollControls = useMemo(
    () => (
      <ScrollControls infinite horizontal damping={4} pages={4} distance={1}>
        <Scroll>
          <Pages />
        </Scroll>
        <Scroll html>
          <OverlayText />
        </Scroll>
      </ScrollControls>
    ),
    []
  );

  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>{scrollControls}</Suspense>
    </Canvas>
  );
}
