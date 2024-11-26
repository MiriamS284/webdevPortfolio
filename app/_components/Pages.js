"use client";

import Page from "./Page";

export default function Pages({ viewportWidth, projects }) {
  const spacingFactor = 0.8;
  return (
    <>
      {projects.map((project, i) => (
        <Page
          key={i}
          position={[viewportWidth * i * (i % 2 === 0 ? 0.7 : 0.9), 0, 0]}
          urls={[project.titleImage]}
        />
      ))}
      <Page
        position={[viewportWidth * projects.length * spacingFactor, 0, 0]}
        urls={[
          "/img/flower/flower1.png",
          "/img/flower/flower2.png",
          "/img/flower/flower3.png",
          "/img/flower/flower4.png",
          "/img/flower/flower6.png",
        ]}
      />
    </>
  );
}

/*
"use client";

import Page from "./Page";

export default function Pages({ viewportWidth }) {
  return (
    <>
      <Page
        position={[-viewportWidth * 1, 0, 0]}
        urls={["/img/bg_libelle_6.jpg", "/img/img1.jpg", "/img/img2.jpg"]}
      />
      <Page
        position={[viewportWidth * 0, 0, 0]}
        urls={[
          "/img/bg_libelle_7.jpg",
          "/img/img2.jpg",
          "/img/bg_libelle_9.jpg",
        ]}
      />
      <Page
        position={[viewportWidth * 1, 0, 0]}
        urls={["/img/bg_libelle_8.jpg", "/img/img1.jpg", "/img/img2.jpg"]}
      />
      <Page
        position={[viewportWidth * 2, 0, 0]}
        urls={["/img/bg_libelle_9.jpg", "/img/img2.jpg", "/img/img1.jpg"]}
      />
    </>
  );
}


*/
