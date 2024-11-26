"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import ImageUploader from "./ImageUploader";
import TextEditor from "./TextEditor";
import LayoutImagesUploader from "./LayoutImageUploader";

const ProjectForm = ({ initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      description: "",
      category: "",
      environment: "",
      techStack: [],
      features: "",
      challenges: "",
      learnings: "",
      designPatterns: "",
      liveLink: "",
      repoLink: "",
      titleImage: "",
      layoutImages: [],
    }
  );
  const [showImageUploader, setShowImageUploader] = useState(false);

  // Setzt das Titelbild (einzelnes Bild)
  const handleTitleImageUpload = (url) => {
    setFormData((prevData) => ({ ...prevData, titleImage: url }));
  };

  // Fügt ein Bild zum Array der Layout-Bilder hinzu
  const handleLayoutImageUpload = (url) => {
    setFormData((prevData) => ({
      ...prevData,
      layoutImages: [...prevData.layoutImages, url],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTechStackChange = (e) => {
    const tech = e.target.value.split(",").map((tech) => tech.trim());
    setFormData((prevData) => ({ ...prevData, techStack: tech }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Speichern des Projekts");
      }

      await response.json();
      toast.success("Projekt erfolgreich gespeichert!");

      setFormData({
        title: "",
        description: "",
        category: "",
        environment: "",
        techStack: [],
        features: "",
        challenges: "",
        learnings: "",
        designPatterns: "",
        liveLink: "",
        repoLink: "",
        titleImage: "",
        layoutImages: [],
      });
    } catch (error) {
      console.error(error);
      toast.error(
        "Fehler beim Speichern des Projekts. Bitte versuchen Sie es erneut."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Projekt hinzufügen
      </h2>

      <div className="form-group mb-4">
        <label className="block font-semibold mb-2">Projekttitel:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="form-group mb-4">
        <label className="block font-semibold mb-2">Projektbeschreibung:</label>
        <TextEditor
          value={formData.description}
          onChange={(content) =>
            setFormData((prevData) => ({ ...prevData, description: content }))
          }
        />
      </div>

      <div className="form-group mb-4">
        <label className="block font-semibold mb-2">Kategorie:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="z.B. Web App, Backend Service"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="form-group mb-4">
        <label className="block font-semibold mb-2">Umgebung:</label>
        <select
          name="environment"
          value={formData.environment}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Bitte wählen</option>
          <option value="Development">Development</option>
          <option value="Production">Production</option>
        </select>
      </div>

      <div className="form-group mb-4">
        <label className="block font-semibold mb-2">
          Tech Stack (Komma-getrennt):
        </label>
        <input
          type="text"
          name="techStack"
          value={formData.techStack.join(", ")}
          onChange={handleTechStackChange}
          placeholder="React, Node.js, MongoDB, etc."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="form-group mb-4">
        <label className="block font-semibold mb-2">Funktionen:</label>
        <TextEditor
          value={formData.features}
          onChange={(content) =>
            setFormData((prevData) => ({ ...prevData, features: content }))
          }
        />
      </div>

      <div className="form-group mb-4">
        <label className="block font-semibold mb-2">
          Herausforderungen und Lösungen:
        </label>
        <TextEditor
          value={formData.challenges}
          onChange={(content) =>
            setFormData((prevData) => ({ ...prevData, challenges: content }))
          }
        />
      </div>

      <div className="form-group mb-4">
        <label className="block font-semibold mb-2">
          Lerninhalte und Verbesserungen:
        </label>
        <TextEditor
          value={formData.learnings}
          onChange={(content) =>
            setFormData((prevData) => ({ ...prevData, learnings: content }))
          }
        />
      </div>

      <div className="form-group mb-4">
        <label className="block font-semibold mb-2">Design Patterns:</label>
        <TextEditor
          value={formData.designPatterns}
          onChange={(content) =>
            setFormData((prevData) => ({
              ...prevData,
              designPatterns: content,
            }))
          }
        />
      </div>

      <div className="form-group mb-4">
        <label className="block font-semibold mb-2">Live-Demo Link:</label>
        <input
          type="url"
          name="liveLink"
          value={formData.liveLink}
          onChange={handleChange}
          placeholder="https://..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="form-group mb-4">
        <label className="block font-semibold mb-2">Repository Link:</label>
        <input
          type="url"
          name="repoLink"
          value={formData.repoLink}
          onChange={handleChange}
          placeholder="https://github.com/username/project"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="form-group mb-4">
        <label className="block font-semibold mb-2">Titelbild:</label>
        <ImageUploader setImageUrl={handleTitleImageUpload} />
        {formData.titleImage && (
          <Image
            src={formData.titleImage}
            alt="Titelbild Vorschau"
            width={200}
            height={150}
            className="mt-2 rounded-md"
            layout="responsive"
            objectFit="cover"
          />
        )}
      </div>
      <div className="form-group mb-4">
        <label className="block font-semibold mb-2">
          Weitere Layout-Bilder:
        </label>
        <LayoutImagesUploader onImageUpload={handleLayoutImageUpload} />
        <div className="layout-images-preview flex flex-wrap gap-4 mt-4">
          {formData.layoutImages.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={`Layout Bild ${index + 1}`}
              width={200}
              height={150}
              className="rounded-md"
              layout="responsive"
              objectFit="cover"
            />
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Projekt speichern
      </button>
    </form>
  );
};

export default ProjectForm;
