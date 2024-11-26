"use client";
import { memo } from "react";
import CarouselCard from "./CarouselCard";

const Carousel = memo(({ images = [], radius = 2 }) => {
  console.log("Carousel received images:", images);

  // Rückgabewert muss korrekt formatiert sein
  return (
    <>
      {images && images.length > 0 ? (
        <group>
          {images.map((url, i) => {
            const angle = (i / images.length) * Math.PI * 2;
            return (
              <CarouselCard
                key={i}
                url={url}
                position={[
                  Math.sin(angle) * radius,
                  0,
                  Math.cos(angle) * radius,
                ]}
                rotation={[0, -angle, 0]}
              />
            );
          })}
        </group>
      ) : (
        <p>Keine Bilder verfügbar</p> // Optional: Eine Fallback-Nachricht
      )}
    </>
  );
});

Carousel.displayName = "Carousel";

export default Carousel;
