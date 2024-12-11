"use client";

import {
  AiOutlineWindows,
  AiOutlineLinux,
  AiOutlineHtml5,
} from "react-icons/ai";
import { FaAws, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNginx,
  SiJest,
  SiMocha,
  SiLighthouse,
  SiOpenai,
  SiNestjs,
  SiGraphql,
  SiCypress,
  SiPlaywright,
  SiRedis,
  SiSqlite,
  SiFramer,
  SiChakraui,
  SiOwasp,
} from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import {
  TbBrandSupabase,
  TbBrandCss3,
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandVercel,
  TbBrandGithub,
  TbBrandDocker,
  TbBrandGithubCopilot,
  TbBrandSentry,
} from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { VscJson } from "react-icons/vsc";
import { BiLogoKubernetes } from "react-icons/bi";
import { GiSamuraiHelmet } from "react-icons/gi";

export default function Stack() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-700, 800]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -800]);

  const sections = [
    {
      title: "Web Server & Operating System",
      content: [
        {
          icon: <AiOutlineWindows />,
          label: "Windows",
          description: "Server & Development environments",
        },
        {
          icon: <AiOutlineLinux />,
          label: "Linux (Ubuntu)",
          description: "Server-side environments",
        },
        {
          icon: <SiNginx />,
          label: "NGINX",
          description: "High-performance web server",
        },
        {
          icon: <SiExpress />,
          label: "Express.js",
          description: "Doubles as a web server in Node.js apps",
        },
      ],
    },
    {
      title: "Server-Side Programming",
      content: [
        {
          icon: <FaNodeJs />,
          label: "Node.js",
          description: "JavaScript runtime, merN Stack",
        },
        {
          icon: <SiExpress />,
          label: "Express.js",
          description: "Web framework for Node.js, mErn Stack",
        },
        {
          icon: <FaPhp />,
          label: "PHP",
          description: "Popular server-side scripting",
        },
        {
          icon: <SiNestjs />,
          label: "NestJS",
          description:
            "Node.js framework for efficient & scalable server-side applications",
        },
        {
          icon: <SiGraphql />,
          label: "GraphQL (Apollo)",
          description: "Efficient & flexible API development",
        },
      ],
    },
    {
      title: "Testing Tools",
      content: [
        {
          icon: <SiJest />,
          label: "Jest",
          description: "Unit and Integration Testing",
        },
        {
          icon: <SiMocha />,
          label: "Mocha",
          description: "Testing framework for JS code",
        },
        {
          icon: <SiLighthouse />,
          label: "Lighthouse",
          description: "Performance Testing",
        },
        {
          icon: <SiCypress />,
          label: "Cypress",
          description: "End-to-End testing",
        },
        {
          icon: <SiPlaywright />,
          label: "Playwright",
          description: "UI Automation for Cross-Browser Testing",
        },
      ],
    },

    {
      title: "Database",
      content: [
        {
          icon: <SiMongodb />,
          label: "MongoDB",
          description: "NoSQL database, Mern Stack",
        },
        {
          icon: <TbBrandSupabase />,
          label: "Supabase",
          description: "Backend-as-a-Service based on PostgreSQL",
        },
        {
          icon: <SiRedis />,
          label: "Redis",
          description: "In-memory database for caching",
        },
        {
          icon: <SiSqlite />,
          label: "SQLite",
          description: "Lightweight serverless database",
        },
      ],
    },
    {
      title: "Client-Side Programming",
      content: [
        {
          icon: <TbBrandJavascript />,
          label: "JavaScript",
          description: "Core programming language for web frontends",
        },
        {
          icon: <AiOutlineHtml5 />,
          label: "HTML5",
          description: "Markup language",
        },
        {
          icon: <TbBrandCss3 />,
          label: "CSS3",
          description: "Styling and layout",
        },
        {
          icon: <TbBrandTypescript />,
          label: "TypeScript",
          description: "Typed superset of JavaScript",
        },
      ],
    },
    {
      title: "Frontend Frameworks/Libraries",
      content: [
        {
          icon: <GrReactjs />,
          label: "React.js",
          description: "Component-based UI library, meRn Stack",
        },
        {
          icon: <TbBrandNextjs />,
          label: "Next.js",
          description: "React framework for server-side rendering",
        },
        {
          icon: <SiTailwindcss />,
          label: "Tailwind CSS",
          description: "Utility-first CSS framework",
        },
        {
          icon: <SiFramer />,
          label: "Framer Motion",
          description: "React animations library",
        },
        {
          icon: <SiChakraui />,
          label: "Chakra UI",
          description: "Accessible & customizable UI components",
        },
      ],
    },
    {
      title: "Deployment & Infrastructure",
      content: [
        {
          icon: <TbBrandVercel />,
          label: "Vercel",
          description: "Deployment platform, optimized for Next.js",
        },
        {
          icon: <TbBrandGithub />,
          label: "GitHub",
          description: "CI/CD pipelines with GitHub Actions",
        },
        {
          icon: <TbBrandDocker />,
          label: "Docker",
          description: "Containerized application deployment",
        },
        {
          icon: <FaAws />,
          label: "AWS",
          description: "Cloud platform for scalable infrastructure",
        },
        {
          icon: <BiLogoKubernetes />,
          label: "Kubernetes",
          description: "Container orchestration platform",
        },
      ],
    },
    {
      title: "AI Integration & Tools",
      content: [
        {
          icon: <SiOpenai />,
          label: "OpenAI API",
          description: "Integration with OpenAI’s Language models",
        },
        {
          icon: <TbBrandGithubCopilot />,
          label: "GitHub Copilot",
          description: "AI-powered code completion",
        },
        {
          icon: <VscJson />,
          label: "json:api",
          description: "Specification for building apis in JSON",
        },
      ],
    },
    {
      title: "Security & Monitoring",
      content: [
        {
          icon: <SiOwasp />,
          label: "OWASP ZAP",
          description: "Security testing for web applications",
        },
        {
          icon: <TbBrandSentry />,
          label: "Sentry",
          description: "Error and performance monitoring",
        },
        {
          icon: <GiSamuraiHelmet />,
          label: "Helmet.js",
          description: "Security headers for Express.js apps",
        },
      ],
    },
  ];

  const firstSlide = sections.slice(0, Math.ceil(sections.length / 2));
  const secondSlide = sections.slice(Math.ceil(sections.length / 2));

  return (
    <div
      ref={container}
      className="relative flex flex-col items-center gap-20 w-full px-8"
    >
      <motion.div
        style={{ x: x1 }}
        className="flex gap-8 w-full max-w-[1400px] mx-auto"
      >
        {firstSlide.map((section, index) => (
          <div
            key={index}
            className="flex flex-col p-2 bg-white/60 text-stone-600 rounded-lg shadow-lg min-w-[350px] max-w-[400px]"
          >
            <h2 className="text-lg font-bold mb-4">{section.title}</h2>
            <div className="space-y-2">
              {section.content.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <div className="text-lg">{item.icon}</div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <p className="text-sm italic">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        style={{ x: x2 }}
        className="flex gap-8 w-full max-w-[1400px] mx-auto pb-10"
      >
        {secondSlide.map((section, index) => (
          <div
            key={index}
            className="flex flex-col p-6 bg-white/60 text-stone-600 rounded-lg shadow-lg min-w-[350px] max-w-[400px]"
          >
            <h2 className="text-lg font-bold mb-4">{section.title}</h2>
            <div className="space-y-2">
              {section.content.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <div className="text-lg">{item.icon}</div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <p className="text-sm italic">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
