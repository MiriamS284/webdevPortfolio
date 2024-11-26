"use client";

import { useState, useEffect } from "react";

export default function HouseCanvas() {
  const [visibleLines, setVisibleLines] = useState([]);

  const lines = [
    { x1: 1428, y1: 317, x2: 1430, y2: 875 }, // Line 1
    { x1: 821, y1: 317, x2: 1430, y2: 317 }, // Line 2
    { x1: 81, y1: 317, x2: 821, y2: 317 }, // Line 3
    { x1: 1201, y1: 36, x2: 1430, y2: 317 }, // Line 4
    { x1: 460, y1: 36, x2: 1200, y2: 36 }, // Line 5
    { x1: 80, y1: 984, x2: 80, y2: 318 }, // Line 6
    { x1: 80, y1: 317, x2: 459, y2: 36 }, // Line 7
    { x1: 820, y1: 317, x2: 1199, y2: 36 }, // Line 8
    { x1: 822, y1: 318, x2: 822, y2: 984 }, // Line 9
  ];

  useEffect(() => {
    lines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, index * 500);
    });
  }, []);

  return (
    <svg
      className="hidden md:block absolute top-0 left-0 w-full h-full"
      width="1440"
      height="1024"
      viewBox="0 0 1440 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1440" height="1024" fill="white" />
      {visibleLines.map((line, index) => (
        <line
          key={index}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="rgba(30, 30, 30, 0.5)"
          strokeOpacity={0.5}
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}
