"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ReactLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AboutSection from "./_components/AboutSection";
import Roadmap from "./_components/Roadmap";
import StackSection from "./_components/StackSection";
import ResourcesSection from "./_components/ResourcesSection";
import Navigation from "./_components/Navigation";
import ContactForm from "./_components/ContactForm";
import HorizontalScroll from "./_components/HorizontalScroll";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const handContainerRef = useRef(null);
  const handRef = useRef(null);
  const handImageRef = useRef(null);
  const introRef = useRef(null);
  const h1ElementRef = useRef(null);
  const introCopyRef = useRef(null);
  const websiteContentRef = useRef(null);

  const introHeaders = [
    "<span >FULL STACK</span> App Development",
    "<span >FULL STACK</span> Frontend Development",
    "<span >FULL STACK</span> Backend Development",
    "<span >FULL STACK</span> Digital Garden",
    "Localisation & Translation",
  ];

  useGSAP(
    () => {
      let currentCycle = -1;
      let imageRevealed = false;

      const updateHeaderText = () => {
        if (h1ElementRef.current) {
          h1ElementRef.current.innerHTML =
            introHeaders[Math.min(currentCycle, introHeaders.length - 1)];
        }
      };
      const pinnedHeight = window.innerHeight * 8;
      ScrollTrigger.create({
        trigger: stickyRef.current,
        start: "top top",
        end: `+=${pinnedHeight}`,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const rotationProgress = Math.min((progress * 8) / 5, 1);
          const totalRotation = rotationProgress * 1800 - 90;
          const rotationInCycle = ((totalRotation + 90) % 360) - 90;
          gsap.set(handContainerRef.current, { rotationZ: rotationInCycle });
          const newCycle = Math.floor((totalRotation + 90) / 360);
          if (
            newCycle !== currentCycle &&
            newCycle >= 0 &&
            newCycle < introHeaders.length
          ) {
            currentCycle = newCycle;
            updateHeaderText();

            if (newCycle === 3 && !imageRevealed) {
              gsap.to(handImageRef.current, { opacity: 1, duration: 0.3 });
              gsap.to(introCopyRef.current.querySelectorAll("p"), {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
              });
              imageRevealed = true;
            } else if (newCycle !== 3 && imageRevealed) {
              gsap.to(handImageRef.current, { opacity: 0, duration: 0.3 });
              gsap.to(introCopyRef.current.querySelectorAll("p"), {
                x: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
              });
              imageRevealed = false;
            }
          }
          if (progress <= 6 / 8) {
            const animationProgress = Math.max(0, (progress - 5 / 8) / (1 / 8));
            const newHeight = gsap.utils.interpolate(
              52.75,
              100,
              animationProgress
            );
            const newOpacity = gsap.utils.interpolate(1, 0, animationProgress);
            gsap.set(handRef.current, { height: `${newHeight}%` });
            gsap.set(introRef.current, { opacity: 1 });
            gsap.set(h1ElementRef.current.querySelector("span"), {
              opacity: newOpacity,
            });
          } else {
            gsap.set(introRef.current, { opacity: 0 });
          }
          if (progress <= 7 / 8) {
            const scaleProgress = Math.max(0, (progress - 6 / 8) / (1 / 8));
            const newScale = gsap.utils.interpolate(1, 20, scaleProgress);
            gsap.set(handRef.current, { scale: newScale });
          }
          if (progress <= 7.5 / 8) {
            const opacityProgress = Math.max(0, (progress - 7 / 8) / (0.5 / 8));
            const newOpacity = gsap.utils.interpolate(1, 0, opacityProgress);
            gsap.set(handRef.current, { opacity: newOpacity });
          }

          if (progress > 7.5 / 8) {
            const revealProgress = (progress - 7.5 / 8) / (0.5 / 8);
            const newOpacity = gsap.utils.interpolate(0, 1, revealProgress);
            gsap.set(websiteContentRef.current, { opacity: newOpacity });
          } else {
            gsap.set(websiteContentRef.current, { opacity: 0 });
          }
        },
      });
      updateHeaderText();
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerRef.current }
  );

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const title = section.querySelector(".section-title");

      gsap.set(title, { y: -50, opacity: 0 });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "top+=200",
        onEnter: () => {
          gsap.to(title, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        },
        onLeave: () => {
          gsap.to(title, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
          });
        },
        onLeaveBack: () => {
          gsap.to(title, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
          });
        },
        onEnterBack: () => {
          gsap.to(title, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    });
  }, []);

  return (
    <>
      <Navigation />

      <ReactLenis
        root
        options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}
      >
        <div className="container" ref={containerRef}>
          <section className="bg-[#44403c] w-screen h-screen" ref={stickyRef}>
            <div
              ref={handContainerRef}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] flex justify-center items-start origin-center transform-style-3d will-change-transform z-2"
            >
              <div
                ref={handRef}
                className="absolute w-[15.5%] h-[52.75%] bg-[#e7e5e4] rounded-[1000px] will-change-transform overflow-hidden opacity-100"
              >
                <Image
                  src="/img/bg_intro.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="opacity-0"
                  ref={handImageRef}
                />
              </div>
            </div>
            <div
              className="absolute top-1/2 left-1/4 w-[22.5%]"
              style={{ top: "calc(50% - 20px)" }}
              ref={introRef}
            >
              <h1
                ref={h1ElementRef}
                className="text-[30px] font-medium tracking-[-0.01em] text-[#d6d3d1]"
              >
                <span className="text-stone-400">FULL STACK</span> Web
                Development
              </h1>
              <div ref={introCopyRef}>
                <p className="text-[16px] font-medium text-justify text-[#a8a29e] leading-[130%] relative mt-[0.75em] translate-x-[20px] opacity-0">
                  Ich bin Web Entwicklerin....
                </p>
                <p className="text-[16px] font-medium text-justify text-[#a8a29e] leading-[130%] relative mt-[0.75em] translate-x-[20px] opacity-0">
                  Ich kultiviere meine Arbeit in einem Digitalen Garten...
                </p>
              </div>
            </div>
            <div
              ref={websiteContentRef}
              className="absolute top-[50%] left-[50%] text-center opacity-0 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#a8a29e]"
            >
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/logo_side.png"
                  alt="Logo Background"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>

              <h1 className="font-medium text-[5vw] tracking-[-0.03em] text-white relative">
                Miriam Sparbrod
              </h1>
            </div>
          </section>
          <section className="bg-[#fafaf9] w-screen min-h-screen flex justify-center items-center">
            <AboutSection />
          </section>
          <section
            id="bios"
            className="bg-[#44403c] w-screen min-h-screen flex justify-center items-center relative"
          >
            <div className="section-title fixed top-0 left-0 w-full h-[60px] flex items-center justify-center text-[#fafaf9] text-lg opacity-0">
              Über Mich
            </div>
            <Roadmap />
          </section>
          <section
            id="stack"
            className="bg-[#fafaf9] w-screen min-h-screen flex justify-center items-center relative"
          >
            <div className="section-title fixed top-0 left-0 w-full h-[60px] flex items-center justify-center text-[#44403c] text-lg opacity-0">
              Mein Stack
            </div>
            <div className="absolute inset-0 z-0">
              <Image
                src="/img/bgstack.png"
                alt="Background Image"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <StackSection />
          </section>
          <section className="bg-[#44403c] w-screen min-h-screen flex justify-center items-center relative">
            <ResourcesSection />
          </section>
          <section
            id="projects"
            className="bg-[#fafaf9] w-screen min-h-screen flex justify-center items-center relative"
          >
            <div className="section-title fixed top-0 left-0 w-full h-[60px] flex items-center justify-center text-[#44403c] text-lg opacity-0">
              Projekte
            </div>
            <HorizontalScroll />
          </section>
          <section
            id="development"
            className="bg-[#44403c] w-screen h-[300vh] flex justify-center items-center relative"
          >
            <div className="section-title fixed top-0 left-0 w-full h-[60px] flex items-center justify-center bg-[#44403c] text-[#fafaf9] text-lg opacity-0">
              Development - Mode - Projekte
            </div>
            Entwicklungsumgebung
          </section>
          <section
            id="seed"
            className="bg-[#44403c] w-screen min-h-screen flex justify-center items-center relative"
          >
            <div className="bg-opacity-50 section-title fixed top-0 left-0 w-full h-[60px] flex items-center justify-center bg-[#fafaf9] text-[#44403c] text-lg opacity-8">
              Gedanken & Konzeptionelle Ideen
            </div>
            Seedling - Blog
          </section>
          <section
            id="contact"
            className="bg-[#44403c] w-screen min-h-screen flex justify-center items-center relative"
          >
            <div className="section-title fixed top-0 left-0 w-full h-[60px] flex items-center justify-center bg-[#fafaf9] text-[#44403c] bg-opacity-50 text-lg opacity-0">
              Kontaktiere mich für Dein & Unser Projekt
            </div>
            <ContactForm />
          </section>
        </div>
      </ReactLenis>
    </>
  );
}
