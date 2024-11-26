"use client";

import { toast } from "react-toastify";
import Image from "next/image";

const LayoutImagesUploader = ({ onImageUpload }) => {
  const handleUploadWidget = () => {
    if (typeof window !== "undefined" && window.cloudinary) {
      const myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
          uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
          sources: ["local", "url", "camera"],
          multiple: true,
          cropping: false,
          showUploadMoreButton: true,
          defaultSource: "local",
        },
        (error, result) => {
          if (error) {
            console.error("Upload error:", error);
            toast.error("Upload-Fehler: " + error.message);
          } else if (result && result.event === "success") {
            const secureUrl = result.info.secure_url;
            onImageUpload(secureUrl); // URL an ProjectForm übergeben
            toast.success("Bild erfolgreich hochgeladen");
          }
        }
      );

      myWidget.open();
    }
  };

  return (
    <button
      type="button"
      onClick={handleUploadWidget}
      className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-500"
    >
      Layout-Bilder hinzufügen
    </button>
  );
};

export default LayoutImagesUploader;
