"use client";
import { useEffect, useState } from "react";
export default function OverlayText() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <>
      {/*<h1 style={{ position: "absolute", top: "20vh", left: "-75vw" }}>My</h1>*/}
      <h1
        style={{
          position: "absolute",
          top: "20vh",
          left: "25vw",
          fontSize: "bold",
        }}
      >
        Meine Projekte
      </h1>
      <h1 style={{ position: "absolute", top: "20vh", left: "125vw" }}>
        Projekte
      </h1>
      <h1 style={{ position: "absolute", top: "20vh", left: "225vw" }}>
        Production Mode
      </h1>
      <h1 style={{ position: "absolute", top: "20vh", left: "325vw" }}>
        Projects
      </h1>
      <h1 style={{ position: "absolute", top: "20vh", left: "425vw" }}>
        Projects
      </h1>
    </>
  );
}
