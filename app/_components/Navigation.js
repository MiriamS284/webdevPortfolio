"use client";

import { useEffect, useRef, useState } from "react";
import { GiGreenhouse, GiPlantSeed, GiButterflyFlower } from "react-icons/gi";
import {
  PiPathThin,
  PiMailboxLight,
  PiLinkedinLogo,
  PiGithubLogo,
} from "react-icons/pi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Navigation() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/logo_side.png");

  const navItems = [
    { id: "bios", label: "Bio", icon: <PiPathThin size={20} /> },
    { id: "stack", label: "Stack", icon: <GiGreenhouse size={20} /> },
    {
      id: "projects",
      label: "Projekte",
      icon: <GiButterflyFlower size={20} />,
    },
    { id: "seed", label: "Gedanken", icon: <GiPlantSeed size={20} /> },
    { id: "contact", label: "Kontakt", icon: <PiMailboxLight size={20} /> },
  ];

  const handleMouseEnterNav = () => {
    gsap.to(navRef.current, { x: "0%", duration: 0.5, ease: "power3.out" });
  };

  const handleMouseLeaveNav = () => {
    gsap.to(navRef.current, { x: "-100%", duration: 0.5, ease: "power3.in" });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const bgColor = window.getComputedStyle(section).backgroundColor;

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          if (bgColor === "rgb(68, 64, 60)") {
            setLogoSrc("/logo_light.png");
          } else if (bgColor === "rgb(250, 250, 249)") {
            setLogoSrc("/logo_side.png");
          }
        },
        onLeaveBack: () => {
          if (bgColor === "rgb(68, 64, 60)") {
            setLogoSrc("/logo_light.png");
          } else if (bgColor === "rgb(250, 250, 249)") {
            setLogoSrc("/logo_side.png");
          }
        },
      });
    });

    const trigger = document.getElementById("bios");
    if (trigger) {
      ScrollTrigger.create({
        trigger: trigger,
        start: "top center",
        onEnter: () => setIsNavVisible(true),
        onLeaveBack: () => setIsNavVisible(false),
      });
    }
  }, []);

  return (
    <>
      {isNavVisible && (
        <>
          <div
            ref={logoRef}
            className="fixed top-4 left-4 z-50 cursor-pointer"
            onMouseEnter={handleMouseEnterNav}
          >
            <Image src={logoSrc} alt="Logo" width={160} height={160} />
          </div>

          <nav
            ref={navRef}
            className="fixed left-0 top-0 h-full bg-stone-950 bg-opacity-50 w-64 z-40 flex flex-col justify-center items-center overflow-hidden transform -translate-x-full transition-transform duration-300 ease-in-out"
            onMouseLeave={handleMouseLeaveNav}
          >
            <ul className="flex flex-col items-center justify-center space-y-6">
              {navItems.map((item) => (
                <li key={item.id} className="w-full text-center group">
                  <a
                    href={`#${item.id}`}
                    className="inline-block w-full text-left text-[#a8a29e] hover:text-[#e7e5e4] px-4 py-2"
                  >
                    <span className="flex items-center space-x-2">
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="fixed bottom-10 left-4 z-50 flex flex-col items-center space-y-4">
            <Link
              href="https://www.linkedin.com/in/miriam-sparbrod-8562791a9/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-[#d6d3d1] hover:text-[#e7e5e4]"
            >
              <PiLinkedinLogo size={24} />
            </Link>
            <Link
              href="https://github.com/MiriamS284"
              target="_blank"
              aria-label="GitHub"
              className="text-[#d6d3d1] hover:text-[#e7e5e4]"
            >
              <PiGithubLogo size={24} />
            </Link>
          </div>
        </>
      )}
    </>
  );
}
/*
"use client";
import { useEffect, useRef } from "react";
import { GiGreenhouse, GiPlantSeed, GiButterflyFlower } from "react-icons/gi";
import {
  PiPathThin,
  PiMailboxLight,
  PiLinkedinLogo,
  PiGithubLogo,
} from "react-icons/pi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Navigation() {
  const navRef = useRef(null);
  const labelRefs = useRef([]);
  const lenis = useLenis();

  const navItems = [
    { id: "bios", label: "Bio", icon: <PiPathThin size={20} /> },
    { id: "stack", label: "Stack", icon: <GiGreenhouse size={20} /> },
    {
      id: "projects",
      label: "Projekte",
      icon: <GiButterflyFlower size={20} />,
    },

    { id: "seed", label: "Gedanken", icon: <GiPlantSeed size={20} /> },
    { id: "contact", label: "Kontakt", icon: <PiMailboxLight size={20} /> },
  ];

  const handleNavigationClick = (id) => {
    const target = document.getElementById(id);
    if (target && lenis) {
      lenis.scrollTo(target, { duration: 1.5, easing: (t) => t });
    }
  };

  useEffect(() => {
    // Navigation initial versteckt
    gsap.set(navRef.current, { x: "-100%" });
    ScrollTrigger.create({
      trigger: "#bios",
      start: "top top",
      onEnter: () => gsap.to(navRef.current, { x: 0, duration: 0.5 }),
      onLeaveBack: () => gsap.to(navRef.current, { x: "-100%", duration: 0.5 }),
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(navRef.current, { width: "200px", duration: 0.3 });
    labelRefs.current.forEach((label) => {
      gsap.to(label, { opacity: 1, x: 0, duration: 0.3 });
    });
  };

  const handleMouseLeave = () => {
    gsap.to(navRef.current, { width: "70px", duration: 0.3 });
    labelRefs.current.forEach((label) => {
      gsap.to(label, { opacity: 0, x: -20, duration: 0.3 });
    });
  };

  return (
    <nav
      ref={navRef}
      className="fixed left-0 top-0 h-full bg-stone-950 bg-opacity-50 w-[70px] z-50 flex flex-col items-start pt-10 overflow-hidden transition-all"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full flex justify-center items-center mb-6">
        <Image src="/logo_side.png" alt="Logo" width={80} height={80} />
      </div>
      <ul className="flex flex-col space-y-6 w-full">
        {navItems.map((item, index) => (
          <li
            key={item.id}
            onClick={() => handleNavigationClick(item.id)}
            className="flex items-center space-x-2 w-full group"
          >
            <a
              href={`#${item.id}`}
              className="flex items-center text-[#a8a29e] hover:text-[#e7e5e4] pl-4"
            >
              <span className="flex-shrink-0">{item.icon}</span>

              <span
                ref={(el) => (labelRefs.current[index] = el)}
                className="opacity-0 whitespace-nowrap transform -translate-x-5 transition-opacity duration-300 ml-2"
              >
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center space-y-4 mt-auto pb-10 pl-4">
        <Link
          href="https://www.linkedin.com/in/miriam-sparbrod-8562791a9/"
          target="_blank"
          aria-label="LinkedIn"
          className="text-[#d6d3d1] hover:text-[#e7e5e4]"
        >
          <PiLinkedinLogo size={24} />
        </Link>
        <Link
          href="https://github.com/MiriamS284"
          target="_blank"
          aria-label="GitHub"
          className="text-[#d6d3d1] hover:text-[#e7e5e4]"
        >
          <PiGithubLogo size={24} />
        </Link>
      </div>
    </nav>
  );
}


*/
