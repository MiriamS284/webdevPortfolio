"use client";

import { useMemo, useState } from "react";
import Sign from "./Sign";
import InfoPopup from "./InfoPopup";

export default function Signs({ path }) {
  const [selectedSign, setSelectedSign] = useState(null); // Zustand für das ausgewählte Schild (für Popup)

  // Array mit Daten für die Schilder (Position wird aus dem Pfad berechnet)
  const signsData = [
    {
      title: "Studium",
      description: "Details zu Studium und Ausbildung.",
      t: 0.1,
    },
    {
      title: "Berufserfahrung",
      description: "Details zur Berufserfahrung.",
      t: 0.3,
    },
    {
      title: "Sprachen",
      description: "Details zu den gesprochenen Sprachen.",
      t: 0.5,
    },
    {
      title: "Fertigkeiten",
      description: "Details zu technischen Fertigkeiten.",
      t: 0.7,
    },
    {
      title: "Zertifikate",
      description: "Details zu erworbenen Zertifikaten.",
      t: 0.9,
    },
  ];

  // Funktion zur Berechnung der Positionen auf dem Pfad
  function getPointOnPath(t) {
    const point = path.getPointAt(t); // Berechne den Punkt auf dem Pfad für t
    return { x: point.x, y: point.y };
  }

  return (
    <div>
      {/* Rendern der Schilder */}
      {signsData.map((sign, index) => {
        const { x, y } = getPointOnPath(sign.t); // Berechne Position des Schildes auf dem Pfad
        return (
          <Sign
            key={index}
            x={x}
            y={y}
            title={sign.title}
            onClick={() => setSelectedSign(sign)} // Setze das ausgewählte Schild für das Popup
          />
        );
      })}

      {/* Popup anzeigen, wenn ein Schild ausgewählt wurde */}
      {selectedSign && (
        <InfoPopup
          title={selectedSign.title}
          description={selectedSign.description}
          onClose={() => setSelectedSign(null)} // Schließe das Popup
        />
      )}
    </div>
  );
}

/*
"use client";
import { useMemo } from "react";
import Sign from "./Sign"; 
import * as THREE from "three";

function Signs({ curve, onClick }) {

  const numSigns = 8;

  
  const yOffset = 2; 

 
  const signsData = useMemo(() => {
    const signs = [
      {
        title: "Studium, Aus- & Weiterbildung",
        content: "Details zu deinem Studium und Weiterbildung.",
        position: curve.getPointAt(0 / (numSigns - 1)), // Position auf der Kurve
      },
      {
        title: "Tätigkeiten",
        content: "Informationen über deine beruflichen Tätigkeiten.",
        position: curve.getPointAt(1 / (numSigns - 1)),
      },
      {
        title: "Zertifikate",
        content: "Eine Liste deiner Zertifikate.",
        position: curve.getPointAt(2 / (numSigns - 1)),
      },
      {
        title: "Sprachen",
        content: "Deine Sprachkenntnisse und deren Niveau.",
        position: curve.getPointAt(3 / (numSigns - 1)),
      },
      {
        title: "Sonstige Kenntnisse",
        content: "Weitere Kenntnisse, die du erworben hast.",
        position: curve.getPointAt(4 / (numSigns - 1)),
      },
      {
        title: "Fertigkeiten",
        content: "Ein Überblick über deine Fertigkeiten.",
        position: curve.getPointAt(5 / (numSigns - 1)),
      },
      {
        title: "Softskills",
        content: "Informationen über deine Softskills.",
        position: curve.getPointAt(6 / (numSigns - 1)),
      },
      {
        title: "Hardskills",
        content: "Deine technischen Fähigkeiten und Hardskills.",
        position: curve.getPointAt(7 / (numSigns - 1)),
      },
    ];

    // Passe die Positionen an, indem du den yOffset hinzufügst
    return signs.map((sign) => ({
      ...sign,
      position: new THREE.Vector3(
        sign.position.x,
        sign.position.y + yOffset,
        sign.position.z
      ),
    }));
  }, [curve]);

  return (
    <>
    
      {signsData.map((sign, index) => (
        <Sign
          key={index}
          position={sign.position}
          title={sign.title}
          onClick={() => onClick(sign)}
        />
      ))}
    </>
  );
}

export default Signs;


*/
