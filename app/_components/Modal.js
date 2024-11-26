"use client";

import { useState, useEffect, useRef, cloneElement } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../_hooks/useOutsideClickHook";

const Modal = ({ isOpen, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const modalRef = useRef();

  // Check if modal should close on outside click
  useOutsideClick(modalRef, () => {
    if (isOpen) onClose();
  });

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isOpen || !isBrowser) return null; // Avoid unnecessary rendering

  // Render the modal content if isOpen is true
  const modalContent = (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full relative max-h-screen overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <HiXMark size={24} />
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.getElementById("modal-root"));
};

export default Modal;
