"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import TextEditor from "./TextEditor";
import ImageUploader from "./ImageUploader";

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

export default function BlogForm({ setTitle, setSections }) {
  const [localTitle, setLocalTitle] = useState("");
  const [localExcerpt, setLocalExcerpt] = useState("");
  const [localSections, setLocalSections] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const addTextSection = () => {
    const updatedSections = [...localSections, { type: "text", content: "" }];
    setLocalSections(updatedSections);
    setSections(updatedSections);
  };

  const addImageSection = () => {
    const updatedSections = [...localSections, { type: "image", content: "" }];
    setLocalSections(updatedSections);
    setSections(updatedSections);
  };

  const handleSectionChange = (index, value) => {
    const updatedSections = [...localSections];
    updatedSections[index].content = value;
    setLocalSections(updatedSections);
    setSections(updatedSections);
  };

  const handleImageUpload = (index, imageUrl) => {
    const updatedSections = [...localSections];
    updatedSections[index].content = imageUrl;
    setLocalSections(updatedSections);
    setSections(updatedSections);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!localTitle || !localExcerpt || localSections.length === 0) {
      toast.error(
        "Bitte Titel, Kurzbeschreibung und mindestens einen Abschnitt hinzufügen."
      );
      return;
    }

    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: localTitle,
          excerpt: localExcerpt,
          sections: localSections,
          categories: selectedCategories,
        }),
      });

      if (response.ok) {
        toast.success("Blogpost erfolgreich erstellt!");
        setLocalTitle("");
        setLocalExcerpt("");
        setLocalSections([]);
        setSelectedCategories([]);
      } else {
        toast.error("Fehler beim Erstellen des Blogposts.");
      }
    } catch (error) {
      toast.error("Etwas ist schief gelaufen!");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">
            Titel
          </label>
          <input
            id="title"
            type="text"
            value={localTitle}
            onChange={(e) => setLocalTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="excerpt" className="block text-sm font-medium">
            Kurzbeschreibung
          </label>
          <textarea
            id="excerpt"
            value={localExcerpt}
            onChange={(e) => setLocalExcerpt(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="categories" className="block text-sm font-medium">
            Kategorien
          </label>
          <div className="flex flex-wrap gap-2">
            {categoriesList.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Abschnitte</label>
          {localSections.map((section, index) => (
            <div key={index} className="mb-4">
              {section.type === "text" ? (
                <TextEditor
                  value={section.content}
                  onChange={(value) => handleSectionChange(index, value)}
                />
              ) : (
                <ImageUploader
                  setImageUrl={(url) => handleImageUpload(index, url)}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mb-4 space-x-10">
          <button
            type="button"
            onClick={addTextSection}
            className="bg-slate-500 text-white px-4 py-2 rounded-md mr-2"
          >
            + Textabschnitt
          </button>
          <button
            type="button"
            onClick={addImageSection}
            className="bg-slate-600 text-white px-4 py-2 rounded-md"
          >
            + Bild
          </button>
        </div>

        <button
          type="submit"
          className="bg-cyan-950 text-white px-4 py-2 rounded-md"
        >
          Blogpost erstellen
        </button>
      </form>
    </div>
  );
}
