"use client";

import { useState, useEffect } from "react";
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

const EditBlogPostForm = ({ initialData, onRequestClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [sections, setSections] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Aktualisiere den Zustand, wenn sich `initialData` ändert
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setExcerpt(initialData.excerpt || "");
      setSections(initialData.sections || []);
      setSelectedCategories(initialData.categories || []);
    }
  }, [initialData]);

  const handleSectionChange = (index, content) => {
    const updatedSections = [...sections];
    updatedSections[index].content = content;
    setSections(updatedSections);
  };

  const handleImageUpload = (index, imageUrl) => {
    const updatedSections = [...sections];
    updatedSections[index].content = imageUrl;
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

  const addTextSection = () => {
    setSections([...sections, { type: "text", content: "" }]);
  };

  const addImageSection = () => {
    setSections([...sections, { type: "image", content: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...initialData,
      title,
      excerpt,
      sections,
      categories: selectedCategories,
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Blogpost bearbeiten</h2>
      <form onSubmit={handleSubmit}>
        {/* Titel */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">
            Titel
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Kurzbeschreibung */}
        <div className="mb-4">
          <label htmlFor="excerpt" className="block text-sm font-medium">
            Kurzbeschreibung
          </label>
          <textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Kategorien */}
        <div className="mb-4">
          <label htmlFor="categories" className="block text-sm font-medium">
            Kategorien
          </label>
          <div className="flex flex-wrap gap-2 mt-2">
            {categoriesList.map((category) => (
              <label
                key={category}
                className="flex items-center space-x-2 text-sm bg-gray-100 p-2 rounded"
              >
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

        {/* Abschnitte */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Abschnitte</label>
          {sections.map((section, index) => (
            <div key={`${section.type}-${index}`} className="mb-4">
              {section.type === "text" ? (
                <TextEditor
                  value={section.content}
                  onChange={(content) => handleSectionChange(index, content)}
                />
              ) : (
                <ImageUploader
                  setImageUrl={(imageUrl) => handleImageUpload(index, imageUrl)}
                  initialImageUrl={section.content}
                />
              )}
            </div>
          ))}
        </div>

        {/* Buttons zum Hinzufügen */}
        <div className="mb-4">
          <button
            type="button"
            onClick={addTextSection}
            className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Neuen Textabschnitt hinzufügen
          </button>
          <button
            type="button"
            onClick={addImageSection}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Neues Bild hinzufügen
          </button>
        </div>

        {/* Speichern und Abbrechen */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onRequestClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Abbrechen
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Speichern
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlogPostForm;
