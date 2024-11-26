"use client";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Environment } from "@react-three/drei";
import Rig from "./Rig";
import Carousel from "./Carousel";
import Banner from "./Banner";

const My3DCarousel = ({ images, title, logo }) => {
  console.log("Received images:", images);
  console.log("Received title image (logo):", logo);
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 15 }}
      style={{ height: "100vh", width: "100%" }}
      gl={{ antialias: true, alpha: true }}
      dpr={Math.min(window.devicePixelRatio, 2)}
    >
      <group scale={[0.5, 0.5, 0.5]}>
        <ScrollControls pages={4} infinite damping={0.1}>
          <Rig>
            <group>
              <Carousel images={images} radius={5} />
              <Banner position={[0, -1.5, 0]} title={title} image={logo} />
            </group>
          </Rig>
        </ScrollControls>
      </group>
    </Canvas>
  );
};

export default My3DCarousel;
