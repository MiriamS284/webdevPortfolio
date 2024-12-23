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
import DynamicSlider from "./_components/ProjectSlider";
import DigitalGarden from "./_components/DigitalerGarden";
import Footer from "./_components/Footer";

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
    "<span>FULL STACK</span> Web Development",
    "<span className='text-stone-400' >FULL STACK</span> App Development",
    "<span className='text-stone-400' >FULL STACK</span> Front & Back Development",
    "<span className='text-stone-400' >FULL STACK</span> Lokalisieren, Übersetzen & Entwickeln",
    "<span className='text-stone-400' >FREELANCE</span> Developer & Translator",
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

      ScrollTrigger.create({
        trigger: "#contact",
        start: "top center",
        onEnter: () => {
          gsap.to("#footer", {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
          });
        },
        onLeaveBack: () => {
          gsap.to("#footer", {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.3,
          });
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

      gsap.set(title, {
        y: -50,
        opacity: 0,
        visibility: "hidden",
        zIndex: -1,
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 40%",
        end: "bottom 60%",
        onEnter: () => {
          title.classList.remove("hidden");
          gsap.to(title, {
            y: 0,
            opacity: 1,
            visibility: "visible",
            zIndex: 50,
            duration: 0.8,
            ease: "power2.out",
          });

          gsap.to(title, {
            delay: 3,
            opacity: 0,
            visibility: "hidden",
            zIndex: -1,
            duration: 1,
            ease: "power2.in",
          });
        },
        onLeaveBack: () => {
          gsap.set(title, {
            y: -50,
            opacity: 0,
            visibility: "hidden",
            zIndex: -1,
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
                  src="/img/bg_intro_1.jpg"
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
                  Ich bin Web-Entwicklerin mit dem Fokus auf funktionale und
                  moderne Web-Applikationen. Dabei fasziniert mich besonders das
                  Zusammenspiel im Front- und Backend-Bereich – ein kreatives
                  Spiel, das Schnittstellen verständlich und effizient macht.
                  Mit technischem Know-how und einer Leidenschaft für klare
                  Strukturen schaffe ich digitale Lösungen, die nicht nur
                  zuverlässig funktionieren, sondern auch einen echten Mehrwert
                  bieten.
                </p>
                <p className="text-[16px] font-bold text-justify text-[#a8a29e] leading-[130%] relative mt-[0.75em] translate-x-[20px] opacity-0">
                  Ihre Vision - Mein Code. Gemeinsam gestalten wir Ihre digitale
                  Zukunft!
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
            <div className="section-title absolute z-50 text-[#fafaf9] font-extrabold text-[8vw] tracking-wide">
              Über Mich
            </div>
            <Roadmap />
          </section>
          <section
            id="stack"
            className="bg-[#fafaf9] w-screen min-h-screen flex relative px-8 py-16"
          >
            <div className="section-title absolute z-50 text-[#44403c] font-extrabold text-[8vw] tracking-wide">
              Tech Stack
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
            <div className="w-full z-10">
              <StackSection />
            </div>
          </section>
          <section className="bg-[#44403c] w-screen min-h-screen flex justify-center items-center relative">
            <ResourcesSection />
          </section>
          <section
            id="projects"
            className="bg-[#fafaf9] w-screen min-h-screen flex justify-center items-center relative"
          >
            <div className="section-title-vertical">
              <div className="title-word">Production</div>
              <div className="title-word">Projects</div>
              <div className="title-word">Development</div>
            </div>

            <DynamicSlider />
          </section>

          <section
            id="seed"
            className="bg-[#44403c] w-screen min-h-screen flex justify-center items-center relative"
          >
            <div className="section-title absolute z-50 text-[#fafaf9] font-bold text-[5vw] tracking-wide">
              Gedanken - Ideen - Konzepte
            </div>
            <DigitalGarden />
          </section>
          <section
            id="contact"
            className="relative bg-[#fafaf9] w-screen min-h-screen flex flex-col justify-center items-center overflow-hidden"
          >
            <div className="section-title absolute z-50 text-[#44403c] font-bold text-[8vw]">
              Let&apos;s work together!
            </div>
            <div className="relative z-10 w-full max-w-4xl mx-auto p-8 text-stone-200">
              <ContactForm />
            </div>
            <div className="w-screen" id="footer">
              <Footer />
            </div>
          </section>
        </div>
      </ReactLenis>
    </>
  );
}
