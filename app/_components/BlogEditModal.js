"use client";

import { useState } from "react";
import BlogForm from "./BlogForm";

export default function BlogEditModal({ post, onClose, onSave }) {
  const [updatedPost, setUpdatedPost] = useState(post);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/blog/${updatedPost._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    });

    if (response.ok) {
      const savedPost = await response.json();
      onSave(savedPost);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-4">Edit</h2>
        <BlogForm
          initialData={updatedPost}
          setTitle={(title) => setUpdatedPost({ ...updatedPost, title })}
          setExcerpt={(excerpt) => setUpdatedPost({ ...updatedPost, excerpt })}
          setSections={(sections) =>
            setUpdatedPost({ ...updatedPost, sections })
          }
          setCategories={(categories) =>
            setUpdatedPost({ ...updatedPost, categories })
          }
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Abbrechen
          </button>
          <button
            onClick={handleSubmit}
            className="bg-cylan-500 text-white px-4 py-2 rounded-md"
          >
            Speichern
          </button>
        </div>
      </div>
    </div>
  );
}
