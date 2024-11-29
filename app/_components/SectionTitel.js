"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionTitles() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const title = section.querySelector(".section-title");

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(title, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        },
        onLeave: () => {
          gsap.to(title, {
            opacity: 0,
            y: -20, // Leicht nach oben verschieben
            duration: 0.5,
            ease: "power2.in",
          });
        },
        onEnterBack: () => {
          gsap.to(title, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(title, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.in",
          });
        },
      });
    });
  }, []);

  return null;
}
