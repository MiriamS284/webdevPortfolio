"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GiGreenhouse, GiPlantSeed, GiButterflyFlower } from "react-icons/gi";
import { LiaSeedlingSolid } from "react-icons/lia";
import { PiPathThin } from "react-icons/pi";
import { PiMailboxLight } from "react-icons/pi";
import { useMobile } from "../_context/MobileContext";

export default function Navigation() {
  const { closeSidebar } = useMobile();
  const navItems = [
    {
      href: "/stack",
      label: "Stack",
      icon: <GiGreenhouse size={30} />,
      description: "Tech-Stack, Fähigkeiten & Tools",
    },
    {
      href: "/path",
      label: "Bio",
      icon: <PiPathThin size={30} />,
      description: "Über mich",
    },
    {
      href: "/blossom",
      label: "Projekte",
      icon: <GiButterflyFlower size={30} />,
      description: "Produktionsumgebung",
    },
    {
      href: "/seedling",
      label: "In Entwicklung",
      icon: <LiaSeedlingSolid size={30} />,
      description: "Entwicklungsumgebung",
    },
    {
      href: "/seed",
      label: "Gedanken",
      icon: <GiPlantSeed size={30} />,
      description: "Ideen & konzeptionelle Überlegungen",
    },
    {
      href: "/contact",
      label: "Kontakt",
      icon: <PiMailboxLight size={40} />,
      description: "Kontaktaufnahme für Zusammenarbeit",
    },
  ];

  return (
    <nav className="relative h-full w-full p-4">
      <ul className="space-y-16">
        {navItems.map((item, index) => (
          <motion.li
            key={item.href}
            className="relative flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Link href={item.href} onClick={closeSidebar}>
              <div className="group flex items-center p-2 transition-colors relative">
                <span className="text-slate-700 font-medium group-hover:text-slate-900">
                  {item.label}
                </span>

                <div className="absolute left-full ml-2 flex items-center bg-slate-100 bg-opacity-80 text-slate-400 rounded-md px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.icon}
                  <span className="text-sm ml-2">{item.description}</span>
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

/*


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navigation() {
  const navItems = [
    {
      href: "/seed",
      label: "Samen",
      icon: "/img/seed.png",
      description: "Gedanken, Ideen und konzeptionellen Überlegungen",
      position: "bottom-right",
    },
    {
      href: "/seedling",
      label: "Keimling",
      icon: "/img/seedling.png",
      description: "Einblicke in aktuelle Arbeiten und Fortschritte",
      position: "left-above-seed",
    },
    {
      href: "/blossom",
      label: "Blüte",
      icon: "/img/blossom.png",
      description: "Abgeschlossene Projekte",
      position: "left-above-seedling",
    },
    {
      href: "/greenhouse",
      label: "Gewächshaus",
      icon: "/img/greenhouse.png",
      description: "Tech-Stak: Fähigkeiten und Tools",
      position: "top-center",
    },
  ];

  return (
    <nav className="relative h-full">
      <ul className="relative w-full h-full">
        {navItems.map((item, index) => {
          let positionClasses = "";

          switch (item.position) {
            case "bottom-4 right-4":
              positionClasses = "bottom-4 right-4";
              break;
            case "bottom-24 left-8":
              positionClasses = "bottom-24 left-8";
              break;
            case "bottom-40 left-8":
              positionClasses = "bottom-40 left-8";
              break;
            case "top-4 left-1/2 transform -translate-x-1/2":
              positionClasses = "top-4 left-1/2 transform -translate-x-1/2";
              break;
            case "bottom-28 left-1/2 transform -translate-x-1/2":
              positionClasses = "bottom-28 left-1/2 transform -translate-x-1/2";
              break;
            default:
              positionClasses = "";
          }

          return (
            <motion.li
              key={item.href}
              className={`absolute ${positionClasses} flex items-center gap-2`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link href={item.href}>
                <div className="relative group flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer"
                    aria-label={item.label}
                    role="button"
                  >
                    <Image
                      src={item.icon}
                      alt={`${item.label} Icon`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </motion.div>

                  <span className="text-white hover:text-accent-400 transition-colors">
                    {item.label}
                  </span>

                  <motion.div
                    className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.description}
                  </motion.div>
                </div>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}


*/
