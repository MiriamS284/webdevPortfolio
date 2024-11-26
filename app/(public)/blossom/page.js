import HorizontalScrollCarousel from "@/app/_components/HorizontalScrollCarousel";

export const metadata = {
  title: "Projects | Production Mode",
  description: "Portfolio of my projects I realized",
};

export default function Page() {
  return (
    <div className="h-screen overflow-hidden mt-12">
      <HorizontalScrollCarousel />
    </div>
  );
}

/*

"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamischer Import von CanvasWrapper
const CanvasWrapper = dynamic(() => import("../../_components/CanvasWrapper"), {
  ssr: false,
});

export default function BlossomPageClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CanvasWrapper />
    </Suspense>
  );
}


*/
