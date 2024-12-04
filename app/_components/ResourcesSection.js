"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  FaGoogle,
  FaNodeJs,
  FaFontAwesome,
  FaIcons,
  FaRegImages,
  FaMedium,
  FaGalacticRepublic,
  FaFontAwesomeAlt,
  FaConnectdevelop,
  FaNode,
} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiTailwindcss,
  SiUnsplash,
  SiPexels,
  SiMongodb,
  SiExpress,
  SiNetlify,
  SiMdnwebdocs,
  SiMozilla,
  SiGooglefonts,
  SiFlat,
  SiMaterialdesign,
  SiPixabay,
  SiAwwwards,
  SiMyanimelist,
  SiMongoosedotws,
} from "react-icons/si";
import { FiCodepen } from "react-icons/fi";
import { FcHeatMap } from "react-icons/fc";
import {
  TbBrandCss3,
  TbBrandFramerMotion,
  TbBrandGoogleAnalytics,
  TbBrandHtml5,
  TbBrandThreejs,
  TbGradienter,
  TbTypography,
} from "react-icons/tb";
import { PiFileCssDuotone, PiGradientFill } from "react-icons/pi";
import { DiCodrops, DiW3C } from "react-icons/di";
import { VscClippy } from "react-icons/vsc";
import { RiCompassDiscoverLine, RiContrastDropLine } from "react-icons/ri";

import {
  MdDraw,
  MdFiberManualRecord,
  MdFunctions,
  MdJavascript,
  MdOutlineColorLens,
  MdOutlineDraw,
  MdOutlineJavascript,
  MdOutlineSettingsApplications,
} from "react-icons/md";
import { IoLogoDesignernews } from "react-icons/io5";
import { BiFontSize } from "react-icons/bi";
import { IoIosColorPalette, IoMdColorFilter } from "react-icons/io";
import { BsFiles, BsPalette2 } from "react-icons/bs";
import { LiaDribbbleSquare, LiaTintSolid, LiaUikit } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { CgScrollV } from "react-icons/cg";

import { useEffect, useRef } from "react";
import { GiSteamLocomotive } from "react-icons/gi";

const sections = [
  {
    title: "Development",
    resources: [
      {
        name: "Visual Studio Code",
        link: "https://code.visualstudio.com/",
        icon: <SiVisualstudiocode />,
      },
      { name: "Code Pen", link: "https://codepen.io/", icon: <FiCodepen /> },
      {
        name: "Emmet Cheat Sheet",
        link: "https://docs.emmet.io/cheat-sheet/",
        icon: <FcHeatMap />,
      },
    ],
  },
  {
    title: "HTML5",
    resources: [
      {
        name: "HTML5 Reference by MDN",
        link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        icon: <TbBrandHtml5 />,
      },
      {
        name: "HTML Entity Reference by CSS-Tricks",
        link: "https://css-tricks.com/snippets/html/glyphs/",
        icon: <PiFileCssDuotone />,
      },
    ],
  },
  {
    title: "CSS3",
    resources: [
      {
        name: "CSS3 Reference by MDN",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
        icon: <SiMdnwebdocs />,
      },
      {
        name: "CSS3 Reference by Codrops",
        link: "https://tympanus.net/codrops/css_reference/",
        icon: <DiCodrops />,
      },
      {
        name: "30 CSS Selectors by Tutplus",
        link: "https://tutsplus.com/",
        icon: <TbBrandCss3 />,
      },
      {
        name: "CSS for People Who Hate CSS",
        link: "https://paulcpederson.com/articles/css-for-people-who-hate-css/",
        icon: <TbBrandCss3 />,
      },
      {
        name: "Clippy",
        link: "https://bennettfeely.com/clippy/",
        icon: <VscClippy />,
      },
      {
        name: "CSS easing functions",
        link: "https://easings.net/",
        icon: <MdFunctions />,
      },
    ],
  },
  {
    title: "JavaScript",
    resources: [
      {
        name: "JavaScript Reference by MDN",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
        icon: <SiMdnwebdocs />,
      },
      {
        name: "JavaScript Operator Precedence Table",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence",
        icon: <SiMdnwebdocs />,
      },
      {
        name: "JavaScript Event Reference",
        link: "https://developer.mozilla.org/en-US/docs/Web/Events",
        icon: <SiMdnwebdocs />,
      },
      {
        name: "ES6+ Browser Compatibility Table",
        link: "https://kangax.github.io/compat-table/es6/",
        icon: <MdJavascript />,
      },
      {
        name: "DOM Manipulation Reference",
        link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
        icon: <SiMozilla />,
      },
      {
        name: "JavaScript KeyCodes Reference",
        link: "https://keycode.info/",
        icon: <MdOutlineJavascript />,
      },
      {
        name: "Principles of Writing Good JavaScript",
        link: "https://medium.com/@addyosmani/writing-clean-javascript-variables-functions-conditionals-6d9b6c02f4b3",
        icon: <FaMedium />,
      },
      {
        name: "JavaScript Design Patterns",
        link: "https://addyosmani.com/resources/essentialjsdesignpatterns/book/",
        icon: <IoLogoDesignernews />,
      },
    ],
  },
  {
    title: "Fonts & Typography",
    resources: [
      {
        name: "Google Fonts",
        link: "https://fonts.google.com/",
        icon: <SiGooglefonts />,
      },
      {
        name: "Fontsquirrel",
        link: "https://www.fontsquirrel.com/",
        icon: <BiFontSize />,
      },
      {
        name: "The 100 best free fonts by Creative Bloq",
        link: "https://www.creativebloq.com/inspiration/the-100-best-free-fonts-for-designers",
        icon: <FaFontAwesome />,
      },
      {
        name: "MyFonts",
        link: "https://www.myfonts.com/",
        icon: <FaFontAwesome />,
      },
      {
        name: "A Pocket Guide to Typography",
        link: "https://www.typography.com/blog/a-pocket-guide-to-typography",
        icon: <TbTypography />,
      },
    ],
  },
  {
    title: "Colors",
    resources: [
      {
        name: "Open Color",
        link: "https://yeun.github.io/open-color/",
        icon: <IoIosColorPalette />,
      },
      {
        name: "Tailwind Colors",
        link: "https://tailwindcss.com/docs/customizing-colors",
        icon: <SiTailwindcss />,
      },
      {
        name: "Flat UI Colors",
        link: "https://flatuicolors.com/",
        icon: <SiFlat />,
      },
      {
        name: "Material Palette",
        link: "https://www.materialpalette.com/",
        icon: <SiMaterialdesign />,
      },
      {
        name: "Colorhunt Palettes",
        link: "https://colorhunt.co/",
        icon: <IoMdColorFilter />,
      },
      {
        name: "LOL Colors Palettes",
        link: "https://lolcolors.com/",
        icon: <MdOutlineColorLens />,
      },
      {
        name: "UI Gradients",
        link: "https://uigradients.com/",
        icon: <PiGradientFill />,
      },
      {
        name: "Paletton",
        link: "https://paletton.com/",
        icon: <BsPalette2 />,
      },
      {
        name: "Tint and Shade Generator",
        link: "https://maketintsandshades.com/",
        icon: <LiaTintSolid />,
      },
      {
        name: "0to255",
        link: "https://www.0to255.com/",
        icon: <TbGradienter />,
      },
      {
        name: "Coolors Contrast Checker",
        link: "https://coolors.co/contrast-checker",
        icon: <RiContrastDropLine />,
      },
    ],
  },
  {
    title: "Images & Videos",
    resources: [
      {
        name: "Unsplash",
        link: "https://unsplash.com/",
        icon: <SiUnsplash />,
      },
      { name: "Pexels", link: "https://www.pexels.com/", icon: <SiPexels /> },
      {
        name: "ISO Republic",
        link: "https://isorepublic.com/",
        icon: <FaGalacticRepublic />,
      },
      {
        name: "Pixabay",
        link: "https://pixabay.com/",
        icon: <SiPixabay />,
      },
      { name: "unDraw", link: "https://undraw.co/", icon: <MdOutlineDraw /> },
      {
        name: "DrawKit",
        link: "https://www.drawkit.io/",
        icon: <MdDraw />,
      },
      {
        name: "UI Faces",
        link: "https://uifaces.co/",
        icon: <LiaUikit />,
      },
      {
        name: "Random User Generator",
        link: "https://randomuser.me/",
        icon: <CiUser />,
      },
      {
        name: "Coverr",
        link: "https://coverr.co/",
        icon: <RiCompassDiscoverLine />,
      },
    ],
  },
  {
    title: "Icons",
    resources: [
      {
        name: "Ionicons",
        link: "https://ionic.io/ionicons",
        icon: <FaIcons />,
      },
      {
        name: "Hero Icons",
        link: "https://heroicons.com/",
        icon: <FaIcons />,
      },
      {
        name: "Phosphor Icons",
        link: "https://phosphoricons.com/",
        icon: <FaIcons />,
      },
      {
        name: "Font Awesome",
        link: "https://fontawesome.com/",
        icon: <FaFontAwesomeAlt />,
      },
      {
        name: "Line Awesome",
        link: "https://icons8.com/line-awesome",
        icon: <FaFontAwesome />,
      },
      {
        name: "Iconmonstr",
        link: "https://iconmonstr.com/",
        icon: <FaIcons />,
      },
      { name: "Icons8", link: "https://icons8.com/", icon: <FaIcons /> },
      { name: "Icon 54", link: "https://icon54.com/", icon: <FaIcons /> },
      { name: "Icomoon", link: "https://icomoon.io/", icon: <FaIcons /> },
      { name: "Iconjar", link: "https://geticonjar.com/", icon: <FaIcons /> },
    ],
  },
  {
    title: "Design & Inspiration",
    resources: [
      {
        name: "Land Book",
        link: "https://land-book.com/",
        icon: <LiaDribbbleSquare />,
      },
      {
        name: "One Page Love",
        link: "https://onepagelove.com/",
        icon: <LiaDribbbleSquare />,
      },
      {
        name: "Awwwards",
        link: "https://www.awwwards.com/",
        icon: <SiAwwwards />,
      },
      {
        name: "Screelane",
        link: "https://screelane.com/",
        icon: <LiaDribbbleSquare />,
      },
      {
        name: "Dribbble",
        link: "https://dribbble.com/",
        icon: <LiaDribbbleSquare />,
      },
    ],
  },
  {
    title: "3D & Scroll",
    resources: [
      {
        name: "Threejs",
        link: "https://threejs.org/",
        icon: <TbBrandThreejs />,
      },
      {
        name: "Anime.js",
        link: "https://animejs.com/",
        icon: <SiMyanimelist />,
      },
      {
        name: "Lottie",
        link: "https://lottiefiles.com/",
        icon: <BsFiles />,
      },
      {
        name: "ScrollReveal",
        link: "https://scrollrevealjs.org/",
        icon: <CgScrollV />,
      },
      {
        name: "ScrollMagic",
        link: "https://scrollmagic.io/",
        icon: <CgScrollV />,
      },
      {
        name: "React Three Fiber",
        link: "https://docs.pmnd.rs/react-three-fiber/getting-started/introduction",
        icon: <MdFiberManualRecord />,
      },
      {
        name: "GSAP",
        link: "https://gsap.com/resources/React/",
        icon: <MdOutlineSettingsApplications />,
      },
      {
        name: "Framer Motion",
        link: "https://motion.dev/",
        icon: <TbBrandFramerMotion />,
      },
      {
        name: "Locomotive Scroll",
        link: "https://locomotivemtl.github.io/locomotive-scroll/",
        icon: <GiSteamLocomotive />,
      },
    ],
  },
  {
    title: "Testing & Optimization ",
    resources: [
      {
        name: "HTML Validator by W3C",
        link: "https://validator.w3.org/",
        icon: <DiW3C />,
      },
      {
        name: "Google PageSpeed Insights",
        link: "https://pagespeed.web.dev/",
        icon: <FaGoogle />,
      },
      {
        name: "Squoosh",
        link: "https://squoosh.app/",
        icon: <FaRegImages />,
      },
      {
        name: "Optimizilla",
        link: "https://imagecompressor.com/",
        icon: <FaRegImages />,
      },
      {
        name: "Real favicon Generator",
        link: "https://realfavicongenerator.net/",
        icon: <FaIcons />,
      },
      {
        name: "The Front-End Checklist",
        link: "https://frontendchecklist.io/",
        icon: <FaIcons />,
      },
      {
        name: "Web Usability Checklist",
        link: "https://usabilitygeek.com/",
        icon: <FaIcons />,
      },
      {
        name: "Website Speed Optimization Guide",
        link: "https://web.dev/fast/",
        icon: <FaConnectdevelop />,
      },
      {
        name: "Woorank",
        link: "https://www.woorank.com/",
        icon: <FaGoogle />,
      },
      {
        name: "Google Analytics",
        link: "https://analytics.google.com/",
        icon: <TbBrandGoogleAnalytics />,
      },
      {
        name: "Netlify",
        link: "https://www.netlify.com/",
        icon: <SiNetlify />,
      },
    ],
  },
  {
    title: "Node.js",
    resources: [
      {
        name: "Node.js Documentation",
        link: "https://nodejs.org/en/docs/",
        icon: <FaNodeJs />,
      },
      {
        name: "Express Reference",
        link: "https://expressjs.com/en/starter/basic-routing.html",
        icon: <SiExpress />,
      },
      {
        name: "The MongoDB Manual",
        link: "https://www.mongodb.com/docs/",
        icon: <SiMongodb />,
      },
      {
        name: "Mongoose Documentation",
        link: "https://mongoosejs.com/docs/guide.html",
        icon: <SiMongoosedotws />,
      },
      {
        name: "Node.js Best Practices",
        link: "https://github.com/goldbergyoni/nodebestpractices",
        icon: <FaNodeJs />,
      },
      {
        name: "Awesome Node.js",
        link: "https://github.com/sindresorhus/awesome-nodejs",
        icon: <FaNodeJs />,
      },
      {
        name: "Node Weekly Newsletter",
        link: "https://nodeweekly.com/",
        icon: <FaNode />,
      },
    ],
  },
];

const CircleLayout = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const radius = 300;
  const circleSize = 150;

  return (
    <div className="relative flex items-center justify-center w-full h-[700px]">
      <h2 className="absolute text-3xl font-bold text-stone-300 text-center">
        Tools & Ressourcen
      </h2>
      {sections.map((section, index) => {
        const angle = (index / sections.length) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="absolute flex items-center justify-center"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              width: isHovered ? "250px" : `${circleSize}px`,
              height: isHovered ? "250px" : `${circleSize}px`,
              borderRadius: "50%",
              backgroundColor: isHovered ? "#e5e7eb" : "#57534e",
              transition: "all 0.4s ease-in-out",
              boxShadow: isHovered
                ? "0px 10px 20px rgba(0, 0, 0, 0.4)"
                : "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {!isHovered ? (
              <h3 className="text-white text-lg font-semibold text-center">
                {section.title}
              </h3>
            ) : (
              <motion.div
                className="flex flex-col items-center justify-center space-y-2 text-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.resources.map((resource, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-center space-x-2"
                    >
                      <span className="text-gray-600 text-lg">
                        {resource.icon}
                      </span>
                      <Link
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-gray-800"
                      >
                        {resource.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default function ResourcesSection() {
  return (
    <section className="py-16 bg-[#44403c]">
      <div className="container mx-auto px-4">
        <CircleLayout />
      </div>
    </section>
  );
}
