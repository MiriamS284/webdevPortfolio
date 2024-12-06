"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import styles from "../_styles/DynamicSlider.module.css";
import { sanitizeAndParse } from "../_lib/helpers";
import { FiGithub } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import ImageSlider from "./ImageSlider";

export default function DynamicSlider() {
  const [productionProjects, setProductionProjects] = useState([]);
  const [developmentProjects, setDevelopmentProjects] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const container = useRef(null);

  // Scroll-Animationen
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const productionRes = await fetch("/api/getProjects");
        const productionData = await productionRes.json();
        setProductionProjects(productionData);

        const developmentRes = await fetch("/api/getDevelopments");
        const developmentData = await developmentRes.json();
        setDevelopmentProjects(developmentData);
      } catch (error) {
        console.error("Fehler beim Laden der Projekte:", error.message);
      }
    };

    fetchProjects();
  }, []);

  const openModal = (project) => {
    setModalData(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalData(null);
  };

  return (
    <div
      ref={container}
      className="flex flex-col gap-20 relative mt-20 z-10 px-2 min-h-[100vh] max-w-[1400px] mx-auto"
    >
      <motion.div
        style={{ x: x1 }}
        className="flex gap-16 w-full overflow-hidden"
      >
        {productionProjects.map((project) => (
          <div
            key={project._id}
            onClick={() => openModal(project)}
            className="group flex flex-col items-center gap-4 p-4 rounded-md shadow-md min-w-[300px] max-w-[400px] cursor-pointer"
          >
            <Image
              alt={project.title}
              src={project.titleImage}
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>

      <motion.div
        style={{ x: x2 }}
        className="flex gap-16 w-full overflow-hidden"
      >
        {developmentProjects.map((project) => (
          <div
            key={project._id}
            onClick={() => openModal(project)}
            className="group flex flex-col items-center gap-4 p-4 rounded-md shadow-md min-w-[300px] max-w-[400px] cursor-pointer"
          >
            <Image
              alt={project.title}
              src={project.titleImage}
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>

      {modalVisible && modalData && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={closeModal}
        >
          <div
            className="bg-stone-100 rounded-lg max-w-[900px] w-full max-h-[100vh] overflow-hidden relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`overflow-y-auto p-6 ${styles["scrollable-content"]}`}
            >
              <div className="flex flex-row gap-6">
                <div className="flex-shrink-0 w-1/3 flex flex-col gap-4">
                  <Image
                    alt={modalData.title}
                    src={modalData.titleImage}
                    width={200}
                    height={200}
                    className="object-cover rounded-md"
                  />

                  <div className="flex flex-row gap-4 mt-4">
                    {modalData.repoLink && (
                      <a
                        href={modalData.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900 flex items-center gap-2"
                      >
                        <FiGithub className="text-2xl" />
                      </a>
                    )}
                    {modalData.liveLink && (
                      <a
                        href={modalData.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900 flex items-center gap-2"
                      >
                        <CgWebsite className="text-2xl" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold">
                    {sanitizeAndParse(modalData.title)}
                  </h2>
                  <div className="mt-2 text-sm text-gray-700">
                    {sanitizeAndParse(modalData.description)}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Kategorie
                      </h3>
                      <siv className="text-sm text-gray-700">
                        {sanitizeAndParse(modalData.category)}
                      </siv>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Tech Stack
                      </h3>
                      <ul className="text-sm text-gray-700 list-disc pl-4">
                        {modalData.techStack.map((tech, index) => (
                          <li key={index}>{sanitizeAndParse(tech)}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <ImageSlider images={modalData.layoutImages} />
              </div>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-sm font-medium text-stone-500">
                    Features
                  </h3>
                  <div className="text-sm text-stone-500">
                    {sanitizeAndParse(modalData.features) || "N/A"}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-stone-500">
                    Challenges
                  </h3>
                  <div className="text-sm text-stone-500">
                    {sanitizeAndParse(modalData.challenges) || "N/A"}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-stone-500">
                    Learnings
                  </h3>
                  <div className="text-sm text-stone-500">
                    {sanitizeAndParse(modalData.learnings) || "N/A"}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-stone-500">
                    Design Patterns
                  </h3>
                  <div className="text-sm text-stone-500">
                    {sanitizeAndParse(modalData.designPatterns) || "N/A"}
                  </div>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-2 right-3 text-stone-500 hover:text-stone-800"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
