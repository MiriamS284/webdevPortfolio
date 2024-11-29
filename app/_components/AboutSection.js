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
              HERZLICH WILLKOMMEN! Ich bin eine leidenschaftliche
              Sprachübersetzerin und Full-Stack-Entwicklerin, die die digitale
              und analoge Welt miteinander verbindet. Sprache war schon immer
              meine erste Liebe, das Spiel mit Nuancen und Bedeutungen – eine
              Welt, in der Worte Brücken zwischen Kulturen und Menschen bauen.
              Doch irgendwann hat mich eine neue Dimension angezogen: die
              Programmierung. Der kreative Prozess, Ideen in lebendige digitale
              Anwendungen zu verwandeln, hat mich fasziniert und schließlich
              dazu geführt, den MERN Stack (MongoDB, Express, React, Node.js) zu
              meistern. Heute entwickle ich mit Hingabe und Präzision
              Full-Stack-Webapplikationen, die nicht nur funktionieren, sondern
              auch ästhetisch ansprechend und intuitiv nutzbar sind. Wenn Sie
              auf der Suche nach einer Partnerin sind, die Ihr Projekt mit
              Leidenschaft, Tiefgang und technischer Expertise umsetzt, lade ich
              Sie herzlich ein, gemeinsam mit mir etwas Einzigartiges zu
              schaffen.
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
              In meinem digitalen Garten wächst und gedeiht alles, was mich
              inspiriert – Gedanken, Ideen, Projekte. Diese Webseite ist Teil
              davon, ein Ort, an dem ich meine Arbeit transparent mache und Raum
              schaffe, um gemeinsam zu wachsen. Hier finden Sie Notizen und
              Projekte, an denen ich arbeite, unfertige Entwürfe und ausgereifte
              Ideen. Es ist eine Einladung an Sie, in meinem Garten zu
              verweilen, mitzudenken, zu diskutieren und vielleicht sogar
              gemeinsam Neues zu erschaffen. Denn ich glaube, dass Wissen und
              Kreativität lebendig bleiben, wenn sie geteilt werden. Ich lade
              Sie herzlich ein, diesen Raum mit mir zu gestalten und an meiner
              Entwicklung teilzuhaben – und wer weiß, vielleicht auch eigene
              Wurzeln in diesem Garten zu schlagen.
            </p>
          </div>
        </motion.div>
      </div>
    </Element>
  );
}
