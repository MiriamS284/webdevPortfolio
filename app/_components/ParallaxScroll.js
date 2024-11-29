"use client";

import Image from "next/image";

export default function ImageGallery() {
  const images = [
    { url: "/img/bg_libelle_6.jpg", desc: "Lorem Ipsum dolor" },
    { url: "/img/bg_libelle_7.jpg", desc: "Lorem Ipsum dolor" },
    { url: "/img/bg_libelle_8.jpg", desc: "Lorem Ipsum dolor" },
    { url: "/img/bg_libelle_9.jpg", desc: "Lorem Ipsum dolor" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-l from-pink-400 to-orange-200 text-white font-sans"
      style={{ fontFamily: "'Titillium Web', sans-serif" }}
    >
      <h1 className="text-4xl uppercase font-bold mb-16">
        CSS only 3D image gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="cardholder relative mx-auto"
            style={{ perspective: "600px" }}
          >
            <div
              className="card relative w-[300px] h-[300px] transition-transform duration-1000 transform rotate-y-50 shadow-lg hover:rotate-y-0 hover:shadow-2xl"
              style={{
                backgroundColor: "transparent",
                boxShadow: "-6px 5px 13px 2px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image
                src={image.url}
                alt={image.desc}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
              <p
                className="desc absolute top-2 left-2 px-2 py-1 bg-white text-black font-medium text-sm"
                style={{ zIndex: 999 }}
              >
                {image.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
