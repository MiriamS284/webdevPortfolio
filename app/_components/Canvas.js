"use client";

import { useEffect, useRef, useState } from "react";
import Path from "./Path";

export default function MyCanvas() {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null); // Zustand für den Canvas-Kontext
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 }); // Zustand für die Canvas-Größe

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    setCtx(context); // Speichere den Canvas-Kontext im Zustand

    const updateCanvasSize = () => {
      const width = window.innerWidth * 2;
      const height = window.innerHeight * 2;
      canvas.width = width;
      canvas.height = height;
      setCanvasSize({ width, height }); // Aktualisiere die Canvas-Größe

      // Setzt den Hintergrund des Canvas
      context.fillStyle = "#A5C19C"; // Pastellgrüner Hintergrund
      context.fillRect(0, 0, width, height);
    };

    // Initiale Größe setzen
    updateCanvasSize();

    // Fenstergrößenänderung handhaben
    window.addEventListener("resize", updateCanvasSize);

    return () => {
      window.removeEventListener("resize", updateCanvasSize); // Cleanup bei Komponentendemontage
    };
  }, []);

  useEffect(() => {
    if (!ctx) return;

    let particles = {};
    let particleIndex = 0;
    const particleNum = 30;

    function Particle() {
      this.x = Math.random() * canvasSize.width;
      this.y = Math.random() * canvasSize.height;
      this.vx = 1;
      this.vy = 1;
      this.gravity = 0.3;
      particleIndex++;
      particles[particleIndex] = this;
      this.id = particleIndex;
      this.life = 0;
      this.maxLife = Math.random() * 200;
      this.shadeR = Math.floor(Math.random() * 30 + 170);
      this.shadeG = Math.floor(Math.random() * 50 + 200);
      this.shadeB = Math.floor(Math.random() * 30 + 180);
      this.alp = Math.random() * 0.3 + 0.2;
      this.color = `rgba(${this.shadeR},${this.shadeG},${this.shadeB},${this.alp})`;
      this.size = Math.random() * 20;
      this.rad = Math.round(Math.random() * 20 - 10);
    }

    Particle.prototype.draw = function () {
      this.x += (this.vx / this.rad) * Math.sin(this.vx);
      this.y += (this.vy / this.rad) * Math.cos(this.vy);
      this.vx += this.rad / 10;
      this.vy += this.rad / 10;

      this.life++;
      if (this.life >= this.maxLife) {
        delete particles[this.id];
      }

      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(
        this.x - (this.vx / this.rad) * Math.sin(this.vx),
        this.y - (this.vy / this.rad) * Math.cos(this.vy)
      );
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    function drawParticle() {
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
      for (let i = 0; i < particleNum; i++) {
        new Particle();
      }
      for (let i in particles) {
        particles[i].draw();
      }
    }

    function loop() {
      window.requestAnimationFrame(loop);
      drawParticle();
    }

    loop();
  }, [ctx, canvasSize]);

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div
        style={{
          width: "100%",
          height: "70%",
          transform: "perspective(800px) rotateX(15deg)",
          transformOrigin: "bottom",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
          }}
        ></canvas>

        {/* Path-Komponente rendern, wenn der ctx verfügbar ist */}
        {ctx && (
          <Path ctx={ctx} width={canvasSize.width} height={canvasSize.height} />
        )}
      </div>
    </div>
  );
}

/*
"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Floor from "./Floor";
import LightBulb from "./LightBulb";
import BoxTest from "./BoxTest";
import OrbitControls from "./OrbitControls";
import Draggable from "./Draggable";

const MyCanvas = () => {
  return (
    <Canvas
      shadows
      className="bg-slate-700"
      camera={{
        position: [-6, 7, 7],
      }}
    >
      <ambientLight color={"white"} intensity={0.3} />
      <LightBulb position={[0, 3, 0]} />
      <Draggable>
        <Suspense fallback={null}>
          <BoxTest rotateX={3} rotateY={0.2} />
        </Suspense>
      </Draggable>
      <OrbitControls />
      <Floor position={[0, -1, 0]} />
    </Canvas>
  );
};

export default MyCanvas;


*/
