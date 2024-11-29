"use client";
import { Link as ScrollLink, Element } from "react-scroll";
import { LuChevronsDown } from "react-icons/lu";

export default function IntroSection() {
  return (
    <Element name="intro-section">
      <section className="h-screen flex flex-col justify-center items-center bg-primary-800 relative">
        {/* Container für Inhalt */}
        <div className="flex w-full h-full">
          {/* Linke Spalte mit Text */}
          <div className="w-full md:w-1/2 flex items-center justify-start p-8 z-20 bg-black/60 md:bg-transparent">
            <div className="p-4 bg-black/60 rounded-md md:bg-transparent">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in">
                Full - Stack
                <br />
                <span className="text-3xl md:text-5xl mt-2 block">
                  Web Development by Miriam Sparbrod
                </span>
              </h1>
            </div>
          </div>

          {/* Rechte Spalte mit Video */}
          <div className="w-full md:w-1/2 h-full relative overflow-hidden">
            <video
              autoPlay
              muted
              loop
              className="absolute right-0 w-full h-full object-cover"
              style={{ zIndex: 1 }}
            >
              <source src="/media/intro_2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Scroll-Icon */}
        <div className="absolute bottom-8 z-30">
          <ScrollLink to="about-section" smooth={true} duration={800}>
            <LuChevronsDown
              size={40}
              className="text-gray-600 animate-bounce cursor-pointer"
            />
          </ScrollLink>
        </div>
      </section>
    </Element>
  );
}
