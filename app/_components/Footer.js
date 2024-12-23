"use client";

import { useState } from "react";

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setModalContent("");
    setIsModalVisible(false);
  };

  return (
    <div>
      <footer
        id="footer"
        className="fixed bottom-0 left-0 w-full bg-[#44403c]/70 text-stone-200 py-4 px-6 flex flex-col sm:flex-row justify-center items-center hover:bg-[#3c3835] transition-colors duration-300 z-50"
      >
        <div className="text-center mb-2 sm:mb-0 mr-20">
          &copy; 2024 SparbrodWebDev
        </div>
        <div className="flex flex-row items-center space-x-4">
          <button
            onClick={() =>
              openModal(
                "Hier steht die Datenschutzerklärung. Bitte ergänzen Sie den Inhalt entsprechend Ihrer Anforderungen."
              )
            }
            className="text-sm hover:underline"
          >
            Private Policy
          </button>
          <button
            onClick={() =>
              openModal(
                "Hier steht das Impressum. Bitte ergänzen Sie den Inhalt entsprechend Ihrer Anforderungen."
              )
            }
            className="text-sm hover:underline"
          >
            Imprint
          </button>
        </div>
      </footer>

      {isModalVisible && (
        <div
          className="fixed inset-0 bg-stone-900 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-[600px] w-full p-10 relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-stone-500 hover:text-stone-800"
              onClick={closeModal}
            >
              ✕
            </button>
            <h2 className="text-lg font-bold text-stone-800 mb-4">
              {modalContent.startsWith("Hier steht die Datenschutzerklärung")
                ? "Private Policy"
                : "Imprint"}
            </h2>
            <p className="text-gray-600">{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
