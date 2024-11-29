"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import {
  AiOutlineWindows,
  AiOutlineLinux,
  AiOutlineHtml5,
  AiOutlineRobot,
} from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJquery,
  SiNginx,
  SiHeroku,
  SiJest,
  SiMocha,
  SiTestinglibrary,
  SiLighthouse,
  SiOpenaigym,
  SiOpenai,
} from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import {
  TbBrandSupabase,
  TbBrandCss3,
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandBootstrap,
  TbBrandVercel,
  TbBrandGithub,
  TbBrandDocker,
  TbBrandGithubCopilot,
  TbBrandOpenai,
} from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { BsFiletypeJson } from "react-icons/bs";

export default function Stack() {
  const [visibleStacks, setVisibleStacks] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      for (let i = 0; i < sections.length; i++) {
        setTimeout(() => {
          setVisibleStacks((prev) => [...prev, i]);
        }, i * 400);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const directions = [
    { x: -100, y: 0 },
    { x: 100, y: 0 },
    { x: 0, y: -100 },
    { x: 0, y: 100 },
    { x: -100, y: 100 },
    { x: 100, y: -100 },
    { x: -100, y: -100 },
    { x: 100, y: 100 },
    { x: 0, y: 100 },
  ];

  const sections = [
    {
      title: "1. Operating System",
      content: (
        <div className="flex flex-col items-center space-y-4 pt-4">
          <div className="flex flex-col items-center group">
            <AiOutlineWindows />
            <span className="text-xs">Windows</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Server & Development environments)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <AiOutlineLinux />
            <span className="text-xs">Linux (Ubuntu)</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Server-side environments)
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2. Server-Side Programming",
      content: (
        <div className="flex flex-col items-center space-y-4 pt-4">
          <div className="flex flex-col items-center group">
            <FaNodeJs />
            <span className="text-xs">Node.js</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (JavaScript runtime, core of the MERN stack)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <SiExpress />
            <span className="text-xs">Express.js</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Web framework for Node.js, MERN)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <FaPhp />
            <span className="text-xs">PHP</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Popular server-side scripting, particularly for CMS)
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "3. Testing Tools",
      content: (
        <div className="flex flex-col items-center space-y-4 pt-4">
          <div className="flex flex-col items-center group">
            <SiJest />
            <span className="text-xs">Jest</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Unit and Integration Testing for JavaScript)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <SiMocha />
            <span className="text-xs">Mocha</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Testing framework for asynchronous JS code)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <SiTestinglibrary />
            <span className="text-xs">Testing Library</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (For testing React components in a real browser environment)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <SiLighthouse />
            <span className="text-xs">Lighthouse</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Performance Testing)
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "4. Web Server",
      content: (
        <div className="flex flex-col items-center space-y-4 pt-4">
          <div className="flex flex-col items-center group">
            <SiNginx />
            <span className="text-xs">NGINX</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Lightweight, high-performance web server)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <SiExpress />
            <span className="text-xs">Express.js</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Doubles as a web server in Node.js apps)
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "5. Database",
      content: (
        <div className="flex flex-col items-center space-y-4 pt-4">
          <div className="flex flex-col items-center group">
            <SiMongodb />
            <span className="text-xs">MongoDB</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (NoSQL database, part of the MERN stack)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <TbBrandSupabase />
            <span className="text-xs">Supabase</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Backend-as-a-Service based on PostgreSQL)
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "6. Client-Side Programming",
      content: (
        <div className="flex flex-col items-center space-y-4 pt-4">
          <div className="flex flex-col items-center group">
            <TbBrandJavascript />
            <span className="text-xs">JavaScript</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Core programming language for web frontends)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <AiOutlineHtml5 />
            <span className="text-xs">HTML5</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Markup language)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <TbBrandCss3 />
            <span className="text-xs">CSS3</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Styling and layout)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <TbBrandTypescript />
            <span className="text-xs">Typescript</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Typed superset of JavaScript)
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "7. Frontend Frameworks/Libraries",
      content: (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center group">
            <GrReactjs />
            <span className="text-xs">React.js</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Core of the MERN stack, component-based UI)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <TbBrandNextjs />
            <span className="text-xs">Next.js</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (React framework for server-side rendering)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <SiTailwindcss />
            <span className="text-xs">Tailwind CSS</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Utility-first CSS framework)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <TbBrandBootstrap />
            <span className="text-xs">Bootstrap</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (CSS framework for responsive designs)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <SiJquery />
            <span className="text-xs">jQuery</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Older but widely used JS library)
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "8. Deployment & Infrastructure",
      content: (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center group">
            <TbBrandVercel />
            <span className="text-xs">Vercel</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Deployment platform, optimized for Next.js)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <TbBrandGithub />
            <span className="text-xs">GitHub</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (CI/CD pipelines with GitHub Actions)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <SiNginx />
            <span className="text-xs">NGINX</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Reverse proxy setups)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <SiHeroku />
            <span className="text-xs">Heroku</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (PaaS, easy cloud deployment)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <TbBrandDocker />
            <span className="text-xs">Docker</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Containerized application deployment)
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "9. AI Integration & Tools",
      content: (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center group">
            <SiOpenai />
            <span className="text-xs">ChatGPT API</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Integration with OpenAI’s GPT models for conversational and NLP
              applications)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <TbBrandGithubCopilot />
            <span className="text-xs">GitHub Copilot</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (AI-powered code completion and suggestions using GPT-4)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <TbBrandOpenai />
            <span className="text-xs">OpenAI APIs</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Utilizing AI models for automation, content generation, and more)
            </span>
          </div>
          <div className="flex flex-col items-center group">
            <BsFiletypeJson />
            <span className="text-xs">JSON API Integration</span>
            <span className="hidden group-hover:block text-xs bg-primary-800 text-primary-100 p-1 mt-1 rounded">
              (Integrating AI APIs via RESTful JSON-based APIs)
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative hidden md:grid md:grid-cols-3 md:gap-2 p-2">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: directions[index % directions.length].x,
            y: directions[index % directions.length].y,
          }}
          animate={
            visibleStacks.includes(index) ? { opacity: 1, x: 0, y: 0 } : {}
          }
          transition={{ duration: 0.5, delay: index * 0.5 }}
          className="p-2 bg-primary-800 text-primary-100 relative"
        >
          <h2 className="text-md font-bold mb-2 pt-4">{section.title}</h2>
          <div className="text-xs text-primary-200">{section.content}</div>
        </motion.div>
      ))}
    </div>
  );
}
