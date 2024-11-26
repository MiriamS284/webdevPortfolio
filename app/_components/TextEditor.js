"use client";

import { useEffect, useState, forwardRef } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const modules = {
  toolbar: [
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline"],
    [{ link: "link" }],
  ],
};

const formats = ["bold", "italic", "underline", "link"];

const TextEditor = forwardRef(function TextEditor({ value, onChange }, ref) {
  // Verwende den useQuill Hook von react-quilljs
  const { quill, quillRef } = useQuill({
    theme: "snow",
    modules,
    formats,
  });

  // Zustand, um zu prüfen, ob der initiale Inhalt geladen wurde
  const [hasLoadedInitialContent, setHasLoadedInitialContent] = useState(false);

  // Setze den initialen Inhalt nur einmal, wenn Quill geladen ist
  useEffect(() => {
    if (quill && value && !hasLoadedInitialContent) {
      quill.clipboard.dangerouslyPasteHTML(value);
      setHasLoadedInitialContent(true); // Markiere, dass der Inhalt geladen wurde
    }
  }, [quill, value, hasLoadedInitialContent]);

  // Event-Listener für text-change
  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        const html = quill.root.innerHTML;
        onChange(html);
      });
    }

    // Bereinigen des Event-Listeners beim Unmount
    return () => {
      if (quill) quill.off("text-change");
    };
  }, [quill, onChange]);

  return <div ref={quillRef} style={{ minHeight: "300px" }} />;
});

// Funktion für das sichere Rendern von HTML
export const sanitizeAndParse = (content) => {
  const cleanContent = DOMPurify.sanitize(content);
  return parse(cleanContent);
};

export default TextEditor;
