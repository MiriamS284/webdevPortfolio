"use client";

import { useState } from "react";
import { imprintContent } from "./ImprintContent";

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <footer
        id="footer"
        className="relative w-full bg-[#44403c]/70 text-stone-200 py-4 px-6 flex flex-col sm:flex-row justify-center items-center hover:bg-[#3c3835] transition-colors duration-300 z-50"
      >
        <div className="text-center mb-2 sm:mb-0 mr-20">
          &copy;2025 SparbrodWebDev
        </div>
        <div className="flex flex-row items-center space-x-4">
          <button
            onClick={() => setIsModalVisible(true)}
            className="text-sm hover:underline"
          >
            Impressum
          </button>
        </div>
      </footer>

      {isModalVisible && (
        <div
          className="fixed inset-0 bg-stone-900 bg-opacity-50 z-50 flex justify-center items-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-stone-100 rounded-lg max-w-[900px] w-full max-h-[100vh] relative p-4 flex flex-col gap-2"
            style={{ transform: "scale(0.95)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-stone-500 hover:text-stone-800 text-xs"
              onClick={closeModal}
            >
              ✕
            </button>
            <h2 className="text-base font-bold text-stone-800 mb-2">
              Impressum
            </h2>
            {imprintContent.map((section, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-sm font-semibold text-stone-700 mb-1">
                  {section.title}
                </h3>
                <p className="text-stone-600 whitespace-pre-line text-xs leading-5">
                  {section.content}
                </p>
                {index < imprintContent.length - 1 && (
                  <hr className="my-2 border-stone-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
