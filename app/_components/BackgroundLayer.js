"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const floralElements = [
  { url: "/img/flower/flower1.png", id: 1 },
  { url: "/img/flower/flower2.png", id: 2 },
  { url: "/img/flower/flower3.png", id: 3 },
  { url: "/img/flower/flower4.png", id: 4 },
  { url: "/img/flower/flower6.png", id: 5 },
];

const BackgroundLayer = ({ x }) => {
  const totalElements = 15;
  const [backgroundItems, setBackgroundItems] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: totalElements }, (_, index) => {
      const element =
        floralElements[Math.floor(Math.random() * floralElements.length)];
      const offsetX = index * 500 + Math.random() * 300;
      const offsetY = Math.random() * 200 - 100;
      const zIndex = Math.random() > 0.5 ? 5 : 10;
      const scale = 0.5 + Math.random();
      const rotate = Math.random() * 20 - 10;

      return {
        ...element,
        offsetX,
        offsetY,
        zIndex,
        scale,
        rotate,
      };
    });
    setBackgroundItems(items);
  }, []); // useEffect ensures these values are only set client-side

  return (
    <motion.div
      style={{
        x,
        scale: 0.9,
      }}
      className="absolute inset-0 flex items-center z-0 pointer-events-none"
    >
      {backgroundItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: item.offsetX,
            top: `50%`,
            transform: `translateY(${item.offsetY}px) scale(${item.scale}) rotate(${item.rotate}deg)`,
            zIndex: item.zIndex,
            backgroundImage: `url(${item.url})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "150px",
            height: "150px",
            opacity: 0.5,
          }}
        />
      ))}
    </motion.div>
  );
};

export default BackgroundLayer;
