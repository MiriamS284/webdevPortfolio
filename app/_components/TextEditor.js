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
  const { quill, quillRef } = useQuill({
    theme: "snow",
    modules,
    formats,
  });

  const [hasLoadedInitialContent, setHasLoadedInitialContent] = useState(false);

  useEffect(() => {
    if (quill && value && !hasLoadedInitialContent) {
      quill.clipboard.dangerouslyPasteHTML(value);
      setHasLoadedInitialContent(true);
    }
  }, [quill, value, hasLoadedInitialContent]);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        const html = quill.root.innerHTML;
        onChange(html);
      });
    }

    return () => {
      if (quill) quill.off("text-change");
    };
  }, [quill, onChange]);

  return <div ref={quillRef} style={{ minHeight: "300px" }} />;
});

export const sanitizeAndParse = (content) => {
  const cleanContent = DOMPurify.sanitize(content);
  return parse(cleanContent);
};

export default TextEditor;
