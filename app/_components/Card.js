"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const Card = ({ card, index, offsetY, zIndex, size }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      style={{
        transform: `translateY(${offsetY}px) scale(${size})`, // Größe anwenden
        zIndex: zIndex,
        width: "300px", // Basisbreite
        height: "400px", // Basishöhe
        transition: "transform 0.3s ease", // Sanfter Übergang für Hover
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={card.url}
        alt={card.title}
        layout="fill" // Füllt die gesamte Größe des Containers
        objectFit="cover" // Zuschneiden des Bilds, um den Container zu füllen
        className="rounded-lg shadow-lg"
        style={{
          filter: isHovered ? "none" : "grayscale(100%)", // Farbfilter entfernen bei Hover
          transition: "filter 0.3s ease", // Sanfter Übergang für den Filter
        }}
        priority={index < 2} // Priorität für die ersten zwei Bilder setzen
      />
      {card.title && (
        <div className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-2 rounded">
          {card.title}
        </div>
      )}
    </motion.div>
  );
};

export default Card;
