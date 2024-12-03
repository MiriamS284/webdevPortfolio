"use client";

import { Element } from "react-scroll";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <Element name="about-section">
      <div className="text-[#44403c] min-h-screen flex flex-col justify-center items-center p-8 space-y-12">
        <motion.div
          className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="md:w-3/5 order-2 md:order-1 text-center md:text-left">
            <p className="text-lg leading-relaxed">
              Herzlich willkommen! Ich bin Sprachwissenschaftlerin, Übersetzerin
              und Full-Stack-Entwicklerin – eine Brückenbauerin zwischen der
              analogen und digitalen Welt. Schon immer war Sprache meine
              Leidenschaft: die feinen Nuancen, die tiefen Bedeutungen und die
              Kraft, Menschen und Kulturen miteinander zu verbinden. Diese
              Faszination hat sich erweitert, als ich die Welt der
              Programmierung entdeckte – ein kreativer Prozess, bei dem Ideen in
              funktionale und ansprechende digitale Anwendungen übersetzt
              werden. Mit fundierter Expertise im MERN-Stack (MongoDB, Express,
              React, Node.js) entwickle ich moderne Full-Stack-Webapplikationen,
              die nicht nur ästhetisch überzeugen, sondern auch intuitiv nutzbar
              sind und höchste technische Standards erfüllen. Wenn Sie eine
              Partnerin suchen, die Sprache und Technologie auf einzigartige
              Weise kombiniert, um Ihr Projekt mit Leidenschaft, Präzision und
              Weitblick zum Leben zu erwecken, freue ich mich darauf, gemeinsam
              mit Ihnen Großes zu schaffen.
            </p>
          </div>
          <div className="md:w-2/5 order-1 md:order-2 flex justify-center md:justify-start">
            <Image
              src="/profil.jpg"
              alt="Profil Miriam Sparbrod"
              width={300}
              height={300}
              className="rounded-full"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <Image
              src="/sign_2.png"
              alt="Dein Bild"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
          <div className="md:w-3/5 text-center md:text-left">
            <p className="text-lg leading-relaxed">
              Willkommen in meinem Digitalen Garten – einem Ort des Wachstums
              und der Inspiration. Hier wurzeln meine Ideen, Projekte und
              Technologien in fruchtbarem Boden und gedeihen zu etwas Neuem.
              Dieser Garten ist nicht nur eine Metapher, sondern ein lebendiges
              System, in dem Sprache, Code und Kreativität miteinander
              verflochten sind. Ich teile hier nicht nur fertige Werke, sondern
              auch Entwürfe, Gedanken und Herausforderungen – alles, was die
              Entwicklung vorantreibt. Transparenz steht im Mittelpunkt: Meine
              Arbeit wächst sichtbar, wie ein Text, der mit jeder Revision
              präziser wird, oder eine Anwendung, die durch Iterationen an Tiefe
              gewinnt. Es ist ein Raum für Austausch und Kollaboration, in dem
              wir gemeinsam wachsen können. Sprache und Technologie sind für
              mich Werkzeuge, um komplexe Systeme zu formen und gleichzeitig
              Verbindungen zu schaffen – zwischen Menschen, Ideen und neuen
              Möglichkeiten. Ich lade Sie ein, diesen Garten mit mir zu
              betreten: Mitzugestalten, mitzudenken und vielleicht auch eigene
              Wurzeln in diesem System zu schlagen. Denn wie in der Natur
              entsteht auch hier Großes, wenn wir teilen, reflektieren und
              gemeinsam Neues wagen.
            </p>
          </div>
        </motion.div>
      </div>
    </Element>
  );
}
