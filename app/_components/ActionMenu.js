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
import Modal from "./Modal";
import EditBlogPostForm from "./EditBlogPostForm";
import { useOutsideClick } from "../_hooks/useOutsideClickHook";

const ActionMenu = ({ blogPost, onUpdate, onDelete, onAdd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [blogPostData, setBlogPostData] = useState(blogPost);
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Standardmäßig geöffnet

  const menuRef = useRef(null);
  useOutsideClick(menuRef, () => setIsMenuOpen(false)); // Schließt Menü bei Klick außerhalb

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/blog?id=${blogPost._id}`);
      toast.success(`Blogpost ${blogPost.title} erfolgreich gelöscht`);
      onDelete(blogPost._id);
    } catch (error) {
      toast.error("Fehler beim Löschen des Blogposts");
      console.error("Fehler beim Löschen:", error);
    } finally {
      setShowConfirmDelete(false);
    }
  };

  const handleSave = async (updatedBlogPost) => {
    try {
      const response = await axios.put(`/api/blog`, {
        id: blogPost._id,
        title: updatedBlogPost.title,
        slug: updatedBlogPost.slug,
        sections: updatedBlogPost.sections,
      });
      onUpdate(response.data);
      toast.success("Blogpost erfolgreich aktualisiert");
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Fehler beim Aktualisieren des Blogposts");
      console.error("Fehler beim Aktualisieren:", error);
    }
  };

  const handleCopy = async () => {
    try {
      const response = await axios.post("/api/blog", {
        title: `${blogPost.title} (Kopie)`,
        slug: `${blogPost.slug}-kopie`,
        sections: blogPost.sections,
      });
      onAdd(response.data);
      toast.success("Blogpost erfolgreich kopiert");
    } catch (error) {
      toast.error("Fehler beim Kopieren des Blogposts");
      console.error("Fehler beim Kopieren:", error);
    }
  };

  return (
    <>
      {/* Haupt-Icon, das Menü anzeigt */}
      <div className="cursor-pointer">
        <HiOutlinePencilAlt className="text-xl text-gray-700 hover:text-gray-900" />
      </div>

      {/* Menü, das sich sofort öffnet */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 top-0 mt-1.5 mr-1.5 bg-white shadow-md rounded p-2 z-10"
        >
          <button
            className="flex items-center text-gray-500 hover:text-gray-700 bg-gray-50 hover:bg-gray-300 mb-2"
            onClick={handleEdit}
          >
            <HiOutlinePencilAlt className="mr-2" />
            Ändern
          </button>
          <button
            className="flex items-center text-gray-500 hover:text-gray-700 bg-gray-50 hover:bg-gray-300 mb-2"
            onClick={handleCopy}
          >
            <HiOutlineDocumentDuplicate className="mr-2" />
            Kopieren
          </button>
          <button
            className="flex items-center text-gray-500 hover:text-gray-700 bg-gray-50 hover:bg-gray-300"
            onClick={() => setShowConfirmDelete(true)}
          >
            <HiOutlineTrash className="mr-2" />
            Löschen
          </button>

          {showConfirmDelete && (
            <ConfirmDelete
              resourceName={blogPost.title}
              resourceDate={blogPost.createdAt}
              onConfirm={handleDelete}
              onCloseModal={() => setShowConfirmDelete(false)}
            />
          )}

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <EditBlogPostForm
              setBlogPostData={setBlogPostData}
              initialData={blogPostData}
              onRequestClose={() => setIsModalOpen(false)}
              onSave={handleSave}
            />
          </Modal>
        </div>
      )}
    </>
  );
};

export default ActionMenu;
