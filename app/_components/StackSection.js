"use client";

import { useState, useRef, useEffect } from "react";
import GreenhouseLine from "./HouseCanvas";
import Stack from "./Stack";

export default function StackSection() {
  const [startStacks, setStartStacks] = useState(false);
  const sectionRef = useRef(null);

  const handleDrawingComplete = () => {
    setStartStacks(true);
  };

  return (
    <section
      ref={sectionRef}
      className="w-screen min-h-screen flex justify-center items-center relative"
    >
      <GreenhouseLine onComplete={handleDrawingComplete} />

      {startStacks && (
        <div className="absolute inset-0 grid grid-cols-2 gap-4 p-3">
          <div
            className="relative col-span-2 text-center text-stone-700"
            style={{ top: "5%", left: "25%", width: "50%" }}
          >
            <Stack />
          </div>
        </div>
      )}
    </section>
  );
}
