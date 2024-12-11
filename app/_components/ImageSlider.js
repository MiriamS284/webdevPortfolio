"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowBackIos, MdOutlineNavigateNext } from "react-icons/md";

const ImageSlider = ({ images }) => {
  const [positionIndexes, setPositionIndexes] = useState(
    Array.from({ length: images.length }, (_, i) => i)
  );

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % images.length)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      )
    );
  };

  const positions = ["center", "left1", "left", "right", "right1"];
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 2 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="flex items-center flex-col justify-center relative py-4">
      {/* Slider Images */}
      <div className="relative w-full h-[400px] flex justify-center items-center overflow-hidden">
        {images.map((image, index) => {
          const isCenter = positions[positionIndexes[index]] === "center";
          return (
            <motion.img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="absolute rounded-lg shadow-lg"
              initial="center"
              animate={positions[positionIndexes[index]]}
              variants={imageVariants}
              whileHover={
                isCenter
                  ? { scale: 1.5, width: "50%", height: "auto", zIndex: 6 }
                  : {}
              }
              transition={{ duration: 0.5 }}
              style={{
                width: "auto",
                height: "100%",
                maxHeight: "400px",
                maxWidth: "90%",
                objectFit: "contain",
              }}
            />
          );
        })}
      </div>

      <div className="flex flex-row gap-3 mt-4">
        <div
          className=" text-stone-700 rounded-md py-2 px-4 flex items-center justify-center"
          onClick={handleBack}
        >
          <MdOutlineArrowBackIos className="text-3xl" />
        </div>
        <div
          className=" text-stone-700 rounded-md py-2 px-4 flex items-center justify-center"
          onClick={handleNext}
        >
          <MdOutlineNavigateNext className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
