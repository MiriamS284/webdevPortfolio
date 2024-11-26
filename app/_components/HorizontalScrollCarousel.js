"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Card from "./Card";
import BackgroundLayer from "./BackgroundLayer";
import { fetchProjectsData } from "../_lib/helpers";
import Link from "next/link";

const staticCards = [
  { url: "/img/flower/flower1.png", id: 201 },
  { url: "/img/flower/flower2.png", id: 202 },
  { url: "/img/flower/flower3.png", id: 203 },
  { url: "/img/flower/flower4.png", id: 204 },
  { url: "/img/flower/flower6.png", id: 205 },
];

const HorizontalScrollCarousel = () => {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({
    container: scrollRef,
    axis: "x",
  });

  const xMain = useTransform(scrollXProgress, [0, 1], [0, -5000]);
  const xBackground = useTransform(scrollXProgress, [0, 1], [0, -2000]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadCards() {
      const projectData = await fetchProjectsData();
      const combinedCards = [];

      projectData.forEach((project, index) => {
        combinedCards.push({
          url: project.titleImage,
          title: project.title,
          id: project._id || index,
          link: `/projects/${project._id}`,
          size: Math.random() * 0.3 + 0.7,
        });

        if (index < staticCards.length) {
          combinedCards.push(staticCards[index]);
        }
      });

      setCards(combinedCards);
    }

    loadCards();
  }, []);

  useEffect(() => {
    const handleWheel = (event) => {
      if (scrollRef.current) {
        event.preventDefault();
        scrollRef.current.scrollLeft += event.deltaY;
      }
    };

    const container = scrollRef.current;
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="relative w-full h-screen overflow-x-scroll overflow-y-hidden py-10"
      style={{ whiteSpace: "nowrap" }}
    >
      <BackgroundLayer x={xBackground} />

      <motion.div
        style={{ x: xMain }}
        className="flex gap-32 w-max items-center z-20 relative"
      >
        {cards.map((card, index) =>
          card.link ? (
            <Link
              href={`/blossom/${encodeURIComponent(card.title)}`}
              key={card.id}
              passHref
            >
              <div className="block">
                <Card
                  card={card}
                  index={index}
                  size={card.size}
                  offsetY={index % 2 === 0 ? -20 : 40}
                  zIndex={index % 3 === 0 ? 30 : 10}
                />
              </div>
            </Link>
          ) : (
            <motion.div
              key={card.id}
              className="flex items-center justify-center"
              style={{
                backgroundImage: `url(${card.url})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "100px",
                height: "100px",
                zIndex: 10,
                opacity: 0.8,
              }}
            />
          )
        )}
      </motion.div>
    </div>
  );
};

export default HorizontalScrollCarousel;
