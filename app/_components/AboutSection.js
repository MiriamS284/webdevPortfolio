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
              Herzlich willkommen! Als Sprachwissenschaftlerin, Übersetzerin und
              Full-Stack-Entwicklerin vereine ich die Welten von Sprache und
              Technologie und schaffe Verbindungen zwischen dem Analogen und
              Digitalen. Meine Leidenschaft galt schon immer der Sprache – ihrer
              Nuancen, ihrer Bedeutungsvielfalt und ihrer einzigartigen
              Fähigkeit, Menschen und Kulturen näherzubringen. Mit der
              Entdeckung der Programmierung hat sich dieser Fokus erweitert: In
              der Entwicklung digitaler Lösungen finde ich einen kreativen
              Prozess, bei dem Ideen in funktionale und ästhetische Anwendungen
              übersetzt werden. Mit fundierter Expertise im MERN-Stack (MongoDB,
              Express, React, Node.js) realisiere ich moderne Webapplikationen,
              die intuitive Bedienbarkeit, visuelle Ästhetik und technische
              Exzellenz vereinen. Wenn Sie nach einer Partnerin suchen, die
              Sprache und Technologie zu einer Symbiose verbindet, um Ihre
              Vision mit Präzision, Leidenschaft und Weitblick Wirklichkeit
              werden zu lassen, stehe ich Ihnen gerne zur Seite. Lassen Sie uns
              gemeinsam innovative Projekte gestalten!
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
              Ich lade Sie ein, meine Arbeit in einem Digitalen Garten zu
              entdecken – einem Raum, in dem Ideen, Gedanken und Projekte
              sichtbar wachsen und gedeihen. Dieser Garten ist mehr als eine
              Metapher: Er verkörpert ein lebendiges System, in dem Sprache,
              Technologie und Kreativität nahtlos ineinandergreifen. Hier teile
              ich nicht nur abgeschlossene Werke, sondern auch Entwürfe und
              Reflexionen, die den Schaffensprozess prägen. Transparenz steht im
              Mittelpunkt: Wie ein Text, der durch Revisionen an Präzision
              gewinnt, oder eine Anwendung, die mit jeder Iteration wächst,
              entfaltet sich auch meine Arbeit in klar nachvollziehbaren
              Schritten. Betrachten Sie diesen Garten als Ort der Begegnung und
              des Austauschs, wo Sprache und Technologie Brücken schlagen –
              zwischen Menschen, Ideen und neuen Möglichkeiten. Treten Sie ein,
              lassen Sie sich inspirieren und gestalten Sie mit. Gemeinsam wagen
              wir Neues und lassen Visionen Wirklichkeit werden.
            </p>
          </div>
        </motion.div>
      </div>
    </Element>
  );
}
