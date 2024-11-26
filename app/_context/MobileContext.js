"use client";

import { createContext, useContext, useEffect, useState } from "react";

const MobileContext = createContext();

export function useMobile() {
  return useContext(MobileContext);
}

export function MobileProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <MobileContext.Provider
      value={{
        isMobile,
        isSidebarOpen,
        toggleSidebar,
        closeSidebar,
        isScrolled,
      }}
    >
      {children}
    </MobileContext.Provider>
  );
}
