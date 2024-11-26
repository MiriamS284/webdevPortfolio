// app/_components/Nature.js

"use client";
import { useMemo } from "react";
import { Sphere, Box } from "@react-three/drei";
import * as THREE from "three";

export default function Nature() {
  const trees = useMemo(() => {
    return [
      new THREE.Vector3(-8, 1, -8),
      new THREE.Vector3(8, 1, 8),
      new THREE.Vector3(5, 1, 2),
      new THREE.Vector3(-5, 1, -5),
    ];
  }, []);

  return (
    <>
      {trees.map((pos, i) => (
        <Tree key={i} position={pos} />
      ))}

      {/* Weitere Pflanzen können hier hinzugefügt werden */}
    </>
  );
}

function Tree({ position }) {
  return (
    <group position={position}>
      {/* Stamm */}
      <Box args={[0.2, 2, 0.2]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      {/* Blätter */}
      <Sphere args={[1, 16, 16]} position={[0, 2, 0]}>
        <meshStandardMaterial color="green" />
      </Sphere>
    </group>
  );
}
