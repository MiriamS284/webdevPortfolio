"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { sanitizeAndParse } from "../_lib/helpers";
import Image from "next/image";

export default function HorizontalCarousel() {
  const containerRef = useRef(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Fehler beim Abrufen der Projekte:", error);
      }
    };

    fetchProjects();
  }, []);

  if (projects.length === 0) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <p className="text-gray-500">Projekte werden geladen...</p>
      </div>
    );
  }

  return (
    <section className="relative w-full" ref={containerRef}>
      <HorizontalScrollCarousel projects={projects} />
    </section>
  );
}

const HorizontalScrollCarousel = ({ projects }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const scrollHeight = projects.length * 50; // Dynamische Höhe in vh
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${projects.length * 600}px`] // 450px: Breite der Karte + Gap
  );

  return (
    <section
      ref={targetRef}
      className="relative"
      style={{ height: `${scrollHeight}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-[100px] px-16 justify-center items-center"
        >
          {projects.map((project, index) => (
            <Card key={project.id || index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ project }) => {
  return (
    <div className="group relative h-[700px] w-[400px] flex-shrink-0 flex flex-col gap-4 overflow-hidden shadow-lg rounded-lg p-4 bg-opacity-50">
      <div className="relative w-full h-[250px] overflow-hidden rounded-md">
        <Image
          src={project.titleImage}
          alt={project.title}
          layout="fill"
          objectFit="contain"
          quality={100}
          className="rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-between text-center">
        <h2 className="text-xl text-[#44403c] font-bold">{project.title}</h2>
        <div className="text-sm text-[#44403c] mt-2 leading-relaxed">
          {sanitizeAndParse(project.description)}
        </div>
      </div>
    </div>
  );
};

/*
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fetchProductionProjects, sanitizeAndParse } from "../_lib/helpers";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalCarousel() {
  const containerRef = useRef(null);
  const [projects, setProjects] = useState([]);

  useLayoutEffect(() => {
    if (projects.length === 0) return;

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const projectItems = gsap.utils.toArray(".project-item");

      if (!container || projectItems.length === 0) return;

      const totalWidth = container.scrollWidth - window.innerWidth;

      gsap.to(projectItems, {
        x: () => -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          start: "top top",
          end: () => "+=" + totalWidth,
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true, // Optional: Zum Debuggen
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [projects]);

  useEffect(() => {
    const fetchProjects = async () => {
      const apiUrl = "/api/projects";
      const data = await fetchProductionProjects(apiUrl);
      setProjects(data);
    };

    fetchProjects();
  }, []);

  if (projects.length === 0) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <p className="text-gray-500">Projekte werden geladen...</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen relative overflow-hidden bg-transparent"
    >
      <div
        className="img-carousel flex gap-6 px-12"
        style={{ willChange: "transform" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-item flex-shrink-0 w-[70vw] h-[60vh] flex items-center gap-4"
          >
          
            <div className="w-[25%] h-[50%]">
              <img
                src={project.titleImage}
                alt={project.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

        
            <div className="w-[65%] max-w-[500px]">
              <h2 className="text-xl font-semibold text-stone-600">
                {project.title}
              </h2>
              <div className="mt-2 text-sm text-stone-400 leading-relaxed">
                {sanitizeAndParse(project.description)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


*/
