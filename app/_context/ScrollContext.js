"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ScrollContext = createContext();

export function useScroll() {
  return useContext(ScrollContext);
}

export function ScrollProvider({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // Beispiel: Automatisches Navigieren bei bestimmten Scrollhöhen
      if (position > window.innerHeight * 0.9 && router.pathname === "/") {
        router.push("/miriamsparbrod");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);

  return (
    <ScrollContext.Provider value={{ scrollPosition }}>
      {children}
    </ScrollContext.Provider>
  );
}
