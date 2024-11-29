"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiLinkedinLogo, PiGithubLogo } from "react-icons/pi";

function Header({ activeSection }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Header wird sichtbar, wenn eine neue Sektion beginnt
    setIsVisible(true);
    const timeout = setTimeout(() => setIsVisible(false), 1500); // Animation dauert 1,5 Sekunden
    return () => clearTimeout(timeout);
  }, [activeSection]);

  return (
    <header
      className={`fixed top-0 z-30 w-full h-16 transition-transform duration-500 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      } flex items-center justify-between px-4 bg-primary-950 text-white`}
    >
      {/* Name zentriert */}
      <h1 className="text-2xl font-bold text-center flex-1">Miriam Sparbrod</h1>

      {/* Links für LinkedIn, GitHub und Email */}
      <div className="flex space-x-4">
        <Link href="/contact" aria-label="Email">
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
    </header>
  );
}

export default Header;
