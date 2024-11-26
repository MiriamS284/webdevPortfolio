"use client";
import { PiGithubLogo, PiAppWindow } from "react-icons/pi";
import { sanitizeAndParse } from "../_lib/helpers";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
const My3DCarousel = dynamic(() => import("./My3DCarousel"), {
  ssr: false,
});

const ResponsiveProjectDisplay = ({ project }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <div className="bg-slate-100 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-slate-700">
            {project.title}
          </h1>
          <div className="mb-4 text-slate-500">
            {sanitizeAndParse(project.description)}
          </div>

          <div className="flex flex-col md:flex-row md:gap-8 mb-4">
            <div className="flex-1 mb-4 md:mb-0">
              <h2 className="text-lg font-semibold text-slate-700">
                Kategorie:
              </h2>
              <div className="text-slate-500">{project.category}</div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-slate-700">
                Tech Stack:
              </h2>
              <div className="text-slate-500">
                {project.techStack.join(", ")}
              </div>
            </div>
          </div>

          {project.features && (
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-slate-700">
                Features:
              </h2>
              <div className="text-slate-500">
                {sanitizeAndParse(project.features)}
              </div>
            </div>
          )}
        </div>

        <div className="my-4">
          {project.layoutImages?.length > 0 && project.titleImage && (
            <My3DCarousel
              images={project.layoutImages}
              title={project.title}
              logo={project.titleImage}
            />
          )}
        </div>

        <div className="p-4 md:p-8">
          {project.designPatterns && (
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-slate-700">
                Design Patterns:
              </h2>
              <div className="text-slate-500">
                {sanitizeAndParse(project.designPatterns)}
              </div>
            </div>
          )}

          {project.challenges && (
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-slate-700">
                Challenges:
              </h2>
              <div className="text-slate-500">
                {sanitizeAndParse(project.challenges)}
              </div>
            </div>
          )}

          {project.learnings && (
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-slate-700">
                Learnings:
              </h2>
              <div className="text-slate-500">
                {sanitizeAndParse(project.learnings)}
              </div>
            </div>
          )}

          <div className="mt-4 flex justify-center gap-20">
            {project.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-700 text-3xl"
              >
                <PiAppWindow />
              </Link>
            )}
            {project.repoLink && (
              <Link
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-700 text-3xl"
              >
                <PiGithubLogo />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveProjectDisplay;
