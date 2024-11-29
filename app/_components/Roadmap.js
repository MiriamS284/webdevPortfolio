"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const roadmapPhases = [
  {
    phase: "STUDIUM",
    events: [
      "BA Romanistik (Hispanistik, Lusitanistik) /Interkulturelle Wirtschaftskommunikation - FSU Jena",
      "BA Kommunikationswissenschaft, UVIC-UCC Vic",
      "MA Lateinamerikanistik (Literatur - & Sprachwissenschaft), FSU Jena",
      "Forschungsaufenthalt 'Transnationaler Wandel am Beispiel Patagoniens' UACH, Valdivia",
    ],
  },
  {
    phase: "Qualifikationen",
    events: [
      "Staatlich geprüfter Übersezter SP/DEU - AKAD",
      "Online - Fortbildung Web Entwicklung (Frontend - & Backendentwicklung)",
    ],
  },
  {
    phase: "Berufserfahrung",
    events: [
      "Wiss. Hilfskraft Romanistik Institut Jena",
      "PR & Übersetzung Deutsch - Uruguayische Industrie - Handelskammer ",
      "Selbständigkeit Lokalisierungs- & Übersetzungdienstleistung",
      "Selbständigkeit Web Development",
    ],
  },
  {
    phase: "Sprachen",
    events: [
      "Deutsch (Muttersprache",
      "Englisch (C1)",
      "Spanisch (C2)",
      "Portugiesisch (C1)",
      "Programmiersprachen (HTML, CSS, Javascript, PHP)",
    ],
  },
  {
    phase: "Fertigkeiten",
    events: [
      "MS Office Suite (Word, Excel, PowerPoint)",
      "Projektmanagement-Software (Trello, Asana, Microsoft Project)",
      "Datenanalyse- und Visualisierungstools (Tableau)",
      "Content-Management-Systeme (WordPress, Contentful)",
      "SEO-Grundlagen",
      "Design- und Multimedia-Tools (Adobe Creative Suite, Figma, Canva)",
      "Buchhaltung oder Verwaltungssoftware (MS Excel, Xero)",
    ],
  },
  {
    phase: "Zertifikate",
    events: [
      "Cerificate of Intercultural Competence",
      "PHP - Object Oriented Programming (Rob Percival)",
      "Full Stack Web Programmierung (Colt Steel)",
      "REACT - NEXTJS (Jonas Schmedtmann)",
    ],
  },
  {
    phase: "Soft- & Hardskills",
    events: [
      "Problemlösungskompetenz: Fähigkeit, komplexe Herausforderungen zu analysieren und effektive Lösungen zu finden.",
      "Kommunikation: Effektive Kommunikation mit Kunden und Teammitgliedern, um Anforderungen und Lösungen zu besprechen.",
      "Teamarbeit: Erfahrung in der Zusammenarbeit mit Designern, Entwicklern und anderen Stakeholdern.",
      "Kreativität und Innovation: Fähigkeit, originelle Ideen in Projekte einzubringen.",
      "Zeitmanagement: Effiziente Planung und Umsetzung von Projekten innerhalb von Deadlines.",
      "Kundenorientierung: Verständnis für die Bedürfnisse des Kunden und Anpassung der Entwicklung entsprechend.",
      "Lernbereitschaft: Bereitschaft zur kontinuierlichen Weiterbildung, um auf dem neuesten Stand der Technik zu bleiben.",
    ],
  },
];

export default function Roadmap() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const phaseRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      phaseRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setCurrentPhase(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="py-16" id="roadmap">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-stone-500">BIO</h2>
        </div>
        <div className="relative">
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1"
            style={{
              background: `linear-gradient(to bottom, #C5D9C7 ${
                ((currentPhase + 1) / roadmapPhases.length) * 100
              }%, #F0F0F0 0%)`,
            }}
          ></div>

          {roadmapPhases.map((phase, index) => (
            <div
              key={index}
              ref={(el) => (phaseRefs.current[index] = el)}
              className={`relative mb-16 flex items-center ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <motion.div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-stone-200 shadow-lg p-6 rounded-lg">
                  <h4 className="text-stone-600 font-bold text-lg mb-2">
                    {phase.phase}
                  </h4>
                  {phase.events.map((event, i) => (
                    <p key={i} className="text-stone-500 text-sm">
                      {event}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Knotenpunkt mit Effekt */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full transition-all duration-500 ${
                  index <= currentPhase
                    ? "bg-[#C5D9C7] scale-125"
                    : "bg-stone-200"
                }`}
              ></div>

              <div
                className={`hidden md:block absolute ${
                  index % 2 === 0 ? "left-1/2 -ml-4" : "right-1/2 -mr-4"
                } w-16 h-1 transition-all duration-500 ${
                  index <= currentPhase ? "bg-[#C5D9C7]" : "bg-stone-200"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
