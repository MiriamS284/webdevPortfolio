"use client";

import { useEffect } from "react";

export default function Path({ ctx, width, height }) {
  useEffect(() => {
    if (!ctx) return;

    // Kontrollpunkte für den Pfad (unverändert)
    const startX = 150;
    const startY = height / 2;

    const controlX1 = width / 3;
    const controlY1 = height / 5;

    const controlX2 = (2 * width) / 3;
    const controlY2 = (4 * height) / 5;

    const endX = width - 150;
    const endY = height / 2;

    let progress = 0;
    const totalSteps = 100;

    // Funktion zum Berechnen der Position auf der Bézierkurve
    function getPointOnBezier(t) {
      const x =
        (1 - t) ** 3 * startX +
        3 * (1 - t) ** 2 * t * controlX1 +
        3 * (1 - t) * t ** 2 * controlX2 +
        t ** 3 * endX;
      const y =
        (1 - t) ** 3 * startY +
        3 * (1 - t) ** 2 * t * controlY1 +
        3 * (1 - t) * t ** 2 * controlY2 +
        t ** 3 * endY;
      return { x, y };
    }

    // Funktion zum Zeichnen des Pfades
    function drawPath(progress) {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#A5C19C"; // Hintergrund
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "#B0AAAA"; // Pfadfarbe
      ctx.lineWidth = 20;
      ctx.lineCap = "round";

      ctx.beginPath();
      ctx.moveTo(startX, startY);

      // Zeichne den Pfad
      ctx.bezierCurveTo(
        controlX1,
        controlY1,
        controlX2,
        controlY2,
        startX + (endX - startX) * progress,
        startY + (endY - startY) * progress
      );
      ctx.stroke();
    }

    function animate() {
      if (progress < 1) {
        progress += 1 / totalSteps;
        drawPath(progress);
        requestAnimationFrame(animate);
      } else {
        drawPath(1); // Zeichne den finalen Pfad
      }
    }

    animate(); // Starte die Animation
  }, [ctx, width, height]);

  return null;
}
