"use client";

import { useEffect, useCallback } from "react";
import { toast } from "react-toastify";

const ImageUploader = ({ setImageUrl }) => {
  const initializeWidget = useCallback(() => {
    if (typeof window !== "undefined" && window.cloudinary) {
      const myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
          uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
          sources: ["local", "url", "camera"],
          multiple: false,
          cropping: true,
          showUploadMoreButton: false,
          defaultSource: "local",
        },
        (error, result) => {
          if (error) {
            console.error("Upload error:", error);
            toast.error("Upload-Fehler: " + error.message);
          } else if (result && result.event === "success") {
            const secureUrl = result.info.secure_url;
            setImageUrl(secureUrl);
            toast.success("Upload erfolgreich");

            myWidget.close();
          }
        }
      );

      document
        .getElementById("upload_widget")
        .addEventListener("click", () => myWidget.open(), false);
    }
  }, [setImageUrl]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.cloudinary) {
        const script = document.createElement("script");
        script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => initializeWidget();

        // Cleanup-Funktion
        return () => {
          document
            .getElementById("upload_widget")
            ?.removeEventListener("click", initializeWidget);
          document.body.removeChild(script);
        };
      } else {
        initializeWidget();
      }
    }
  }, [initializeWidget]);

  return (
    <div>
      <button
        id="upload_widget"
        type="button"
        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-500"
      >
        Bild hochladen
      </button>
    </div>
  );
};

export default ImageUploader;
