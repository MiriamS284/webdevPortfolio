"use client";
import { useState } from "react";
import BlogForm from "../../../../../_components/BlogForm";
import PreviewBlogPost from "../../../../../_components/PreviewBlogPost";

export default function Page() {
  const [title, setTitle] = useState("");
  const [sections, setSections] = useState([]);
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Neuen Blogpost erstellen</h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <BlogForm setTitle={setTitle} setSections={setSections} />
        </div>

        <div className="md:w-1/3">
          <PreviewBlogPost title={title} sections={sections} />
        </div>
      </div>
    </div>
  );
}
