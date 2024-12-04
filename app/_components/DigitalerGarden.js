"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { sanitizeAndParse } from "../_lib/helpers";
import styles from "../_styles/DynamicSlider.module.css";

const categoriesList = [
  "Technologien und Tools",
  "Best Practices",
  "UI/UX-Innovationen",
  "Open Source & Community",
  "Web-Entwicklung & Wissensarchitektur",
  "Case Studies",
  "Inspiration & Trends",
  "Tools & Ressourcen",
  "Wissensmanagement und Kreativität",
];

const DigitalGarden = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredExcerpt, setHoveredExcerpt] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  // Fetch BlogPosts
  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch("/api/blog");
        if (!response.ok) throw new Error("Fehler beim Abrufen der Blogposts.");
        const data = await response.json();

        setBlogPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error("Fehler beim Abrufen der Blogposts:", error);
      }
    }

    fetchBlogPosts();
  }, []);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    if (category === "") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(
        blogPosts.filter(
          (post) =>
            Array.isArray(post.categories) && post.categories.includes(category)
        )
      );
    }
  };

  const openModal = (post) => {
    setModalData(post);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalData(null);
  };

  const handleMouseEnter = (excerpt, event) => {
    setHoverPosition({
      x: event.clientX,
      y: event.clientY,
    });
    setHoveredExcerpt(excerpt);
  };

  const handleMouseLeave = () => {
    setHoveredExcerpt(null);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      {/* Kategorien Dropdown */}
      <div className="flex justify-end mb-6 relative">
        <button
          className="p-2 text-sm text-gray-700 bg-stone-200 rounded-md border border-none"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          {selectedCategory || "Seed"}
        </button>
        {isDropdownOpen && (
          <ul className="absolute right-0 mt-1 w-48 text-stone-500 bg-stone-300 border border-gray-200 shadow-lg rounded-md text-sm z-10">
            <li
              className="p-2 hover:bg-stone-200 cursor-pointer"
              onClick={() => handleFilterChange("")}
            >
              Seed
            </li>
            {categoriesList.map((category) => (
              <li
                key={category}
                className="p-2 hover:bg-stone-200 cursor-pointer"
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post._id}
              className="relative mb-4"
              onMouseEnter={(e) => handleMouseEnter(post.excerpt, e)}
              onMouseLeave={handleMouseLeave}
            >
              <p
                className="italic text-stone-200 cursor-pointer"
                onClick={() => openModal(post)}
              >
                &quot;{post.title}&quot;
              </p>
              <hr className="border-t border-stone-400 mt-2 w-2/3" />
            </div>
          ))
        ) : (
          <p className="text-stone-500">Keine Blogposts gefunden.</p>
        )}

        {hoveredExcerpt && (
          <div
            className="fixed p-4 bg-stone-200 shadow-lg border border-none rounded-md text-sm text-stone-700 z-10"
            style={{
              top: hoverPosition.y + 10,
              left: hoverPosition.x + 10,
              width: "600px",
              height: "auto",
            }}
          >
            {hoveredExcerpt}
          </div>
        )}
      </div>

      {modalVisible && modalData && (
        <motion.div
          className="fixed inset-0 bg-stone-800 bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={closeModal}
        >
          <div
            className={`bg-stone-300 rounded-lg w-[90%] h-[90vh] overflow-y-auto p-6 relative ${styles["scrollable-content"]}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-medium text-stone-700 mb-4">
              {modalData.title}
            </h2>
            {modalData.sections && modalData.sections.length > 0 ? (
              modalData.sections.map((section, index) => (
                <div key={index} className="mb-6">
                  {(section.type === "paragraph" ||
                    section.type === "text") && (
                    <div className="text-stone-600">
                      {sanitizeAndParse(section.content)}
                    </div>
                  )}

                  {section.type === "image" && (
                    <Image
                      src={section.content}
                      alt={`Section ${index + 1}`}
                      width={600}
                      height={400}
                      className="rounded-md"
                      style={{ objectFit: "contain" }}
                    />
                  )}

                  {/* Fallback für unbekannte Typen */}
                  {!["paragraph", "text", "image"].includes(section.type) && (
                    <p className="text-red-900">
                      Unbekannter Abschnittstyp: {section.type}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p>Keine Inhalte verfügbar</p>
            )}

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
};

export default DigitalGarden;
