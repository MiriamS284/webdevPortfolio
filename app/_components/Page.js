"use client";
import { useThree } from "@react-three/fiber";
import Image from "./Image";

function Page({ m = 0.4, urls, ...props }) {
  const { width } = useThree((state) => state.viewport);
  const w = width < 10 ? 1.5 / 3 : 1 / 3;

  return (
    <group {...props}>
      {urls.map((url, i) => (
        <Image
          key={i}
          position={[(i - 1) * width * w, 0, i]}
          scale={[width * w - m * 2, 3, 1]}
          url={url}
        />
      ))}
    </group>
  );
}

export default Page;
