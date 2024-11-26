"use client";
import dynamic from "next/dynamic";

const My3DCarousel = dynamic(() => import("../../_components/My3DCarousel"), {
  ssr: false,
});

export default function Page() {
  const images = [
    "/img/bg_libelle_6.jpg",
    "/img/bg_libelle_7.jpg",
    "/img/bg_libelle_8.jpg",
    "/img/bg_libelle_9.jpg",
    "/img/bg_libelle_9.jpg",
    "/img/bg_libelle_9.jpg",
    "/img/bg_libelle_9.jpg",
    "/img/bg_libelle_9.jpg",
    "/img/bg_libelle_9.jpg",
  ];
  return (
    <>
      <div>
        2.2. Keimlinge (Laufende Projekte) Inhalt: Präsentieren Sie Projekte, an
        denen Sie derzeit arbeiten. Zweck: Geben Sie Einblicke in Ihre aktuellen
        Arbeiten und Fortschritte.
      </div>
      <div>
        <My3DCarousel images={images} />
      </div>
    </>
  );
}
