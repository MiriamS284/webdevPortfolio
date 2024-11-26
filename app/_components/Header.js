"use client";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiLinkedinLogo, PiGithubLogo } from "react-icons/pi";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { useMobile } from "../_context/MobileContext";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const { isMobile, isSidebarOpen, toggleSidebar } = useMobile();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Header wird nur sichtbar, wenn nach oben gescrollt wird
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    // Event-Listener für Scroll hinzufügen
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Event-Listener beim Unmount entfernen
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-16 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isVisible ? "bg-primary-950" : "bg-transparent"}
      flex items-center justify-between px-4 fixed top-0 z-30 transition-transform duration-300 ease-in-out`}
    >
      {isMobile && (
        <button onClick={toggleSidebar} className="text-primary-100">
          {isSidebarOpen ? (
            <HiOutlineArrowCircleLeft size={30} />
          ) : (
            <HiOutlineArrowRightCircle size={30} />
          )}
        </button>
      )}

      <h1 className="text-lg font-bold text-stone-500 leading-none text-center flex-1">
        Miriam Sparbrod
      </h1>

      {isMobile ? (
        <div style={{ width: "30px" }}></div>
      ) : (
        <div className="flex space-x-4 text-stone-500 hidden lg:flex">
          <Link href="mailto:sparbrod.webdev@gmail.com" aria-label="Email">
            <MdOutlineAlternateEmail size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/miriam-sparbrod-8562791a9/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <PiLinkedinLogo size={24} />
          </Link>
          <Link
            href="https://github.com/MiriamS284"
            target="_blank"
            aria-label="GitHub"
          >
            <PiGithubLogo size={24} />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
