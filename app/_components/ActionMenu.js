"use client";

import { useState, useRef } from "react";
import {
  HiOutlinePencilAlt,
  HiOutlineDocumentDuplicate,
  HiOutlineTrash,
} from "react-icons/hi";
import { toast } from "react-toastify";
import ConfirmDelete from "./ConfirmDelete";
import axios from "axios";
import EditBlogPostForm from "./EditBlogPostForm";
import { useOutsideClick } from "../_hooks/useOutsideClickHook";

const ActionMenu = ({ blogPost, onUpdate, onDelete, onAdd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  // Schließt das Menü bei Klick außerhalb
  useOutsideClick(menuRef, () => setIsMenuOpen(false));

  const handleEdit = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/blog?id=${blogPost._id}`);
      toast.success(`Blogpost "${blogPost.title}" erfolgreich gelöscht`);
      onDelete(blogPost._id);
    } catch (error) {
      toast.error("Fehler beim Löschen des Blogposts");
    } finally {
      setShowConfirmDelete(false);
    }
  };

  const handleSave = async (updatedBlogPost) => {
    try {
      const response = await axios.put("/api/blog", {
        id: blogPost._id,
        title: updatedBlogPost.title,
        excerpt: updatedBlogPost.excerpt,
        sections: updatedBlogPost.sections,
        categories: updatedBlogPost.categories,
      });
      onUpdate(response.data);
      toast.success("Blogpost erfolgreich aktualisiert");
    } catch (error) {
      toast.error("Fehler beim Aktualisieren des Blogposts");
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleCopy = async () => {
    try {
      const response = await axios.post("/api/blog", {
        title: `${blogPost.title} (Kopie)`,
        excerpt: blogPost.excerpt,
        sections: blogPost.sections,
        categories: blogPost.categories,
      });
      onAdd(response.data);
      toast.success("Blogpost erfolgreich kopiert");
    } catch (error) {
      toast.error("Fehler beim Kopieren des Blogposts");
    }
  };

  return (
    <div className="relative">
      {/* Haupt-Menü-Button */}
      <div
        className="cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <HiOutlinePencilAlt className="text-xl text-gray-700 hover:text-gray-900" />
      </div>

      {/* Dropdown-Menü */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 bg-white shadow-md rounded p-2 z-10"
        >
          <button
            className="flex items-center text-gray-500 hover:text-gray-700 bg-gray-50 hover:bg-gray-300 p-2 mb-2 rounded"
            onClick={handleEdit}
          >
            <HiOutlinePencilAlt className="mr-2" />
            Ändern
          </button>
          <button
            className="flex items-center text-gray-500 hover:text-gray-700 bg-gray-50 hover:bg-gray-300 p-2 mb-2 rounded"
            onClick={handleCopy}
          >
            <HiOutlineDocumentDuplicate className="mr-2" />
            Kopieren
          </button>
          <button
            className="flex items-center text-gray-500 hover:text-gray-700 bg-gray-50 hover:bg-gray-300 p-2 rounded"
            onClick={() => setShowConfirmDelete(true)}
          >
            <HiOutlineTrash className="mr-2" />
            Löschen
          </button>

          {/* Löschen bestätigen */}
          {showConfirmDelete && (
            <ConfirmDelete
              resourceName={blogPost.title}
              resourceDate={blogPost.createdAt}
              onConfirm={handleDelete}
              onCloseModal={() => setShowConfirmDelete(false)}
            />
          )}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg max-h-screen w-full max-w-4xl p-6 overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">Blogpost bearbeiten</h2>
            <EditBlogPostForm
              initialData={blogPost}
              onRequestClose={() => setIsModalOpen(false)}
              onSave={handleSave}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;
