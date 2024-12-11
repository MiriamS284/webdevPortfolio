"use client";

import { motion } from "framer-motion";

const SectionTitleOverlay = ({ title, isDarkBackground }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
      style={{
        pointerEvents: "none",
      }}
    >
      <div
        className={`w-0 h-0 border-solid border-t-[100px] border-l-[125px] border-r-[125px] border-b-0 
          ${isDarkBackground ? "border-t-stone-700/50" : "border-t-black/50"} 
          border-l-transparent border-r-transparent flex justify-center items-center`}
      >
        {/* Titel */}
        <span
          className={`text-lg font-bold ${
            isDarkBackground ? "text-[#e7e5e4]" : "text-black"
          }`}
        >
          {title}
        </span>
      </div>
    </motion.div>
  );
};

export default SectionTitleOverlay;
