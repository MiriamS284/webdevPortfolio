"use client";

import { useEffect, useState } from "react";

export default function InfiniteTextScroll() {
  // Dynamische Texte
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    // Texte dynamisch laden
    const dynamicTexts = [
      "Let's work together!",
      "Arbeiten wir Zusammen!",
      "Colaboramos!",
      "Trabalhamos juntos!",
      "Collaborons!",
      "Let's work together!",
    ];
    setTexts(dynamicTexts);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 bg-[#44403c]">
      <div className="flex animate-marquee gap-16">
        {texts.map((text, index) => (
          <span
            key={index}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a8a29e] via-[#d6d3d1] to-[#fafaf9] whitespace-nowrap"
          >
            {text} {!index === texts.length - 1 && "!"}
          </span>
        ))}
        {texts.map((text, index) => (
          <span
            key={`repeat-${index}`}
            className="text-[6vw] md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a8a29e] via-[#d6d3d1] to-[#fafaf9] whitespace-nowrap"
          >
            {text} {!index === texts.length - 1 && "!"}
          </span>
        ))}
      </div>
    </div>
  );
}
