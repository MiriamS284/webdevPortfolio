import parse, { domToReact } from "html-react-parser";
export const sanitizeAndParse = (content) => {
  if (typeof window === "undefined") {
    return content;
  }

  const createDOMPurify = require("dompurify");
  const DOMPurify = createDOMPurify(window);

  const cleanContent = DOMPurify.sanitize(content, {
    USE_PROFILES: { html: true },
  });

  const options = {
    replace: (node) => {
      if (node.name === "a") {
        return (
          <a
            href={node.attribs.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 italic"
            style={{ textDecoration: "none" }}
          >
            {domToReact(node.children, options)}
          </a>
        );
      }
      if (node.name === "strong") {
        return (
          <strong className="font-bold">{domToReact(node.children)}</strong>
        );
      }
      if (node.name === "em") {
        return <em className="italic">{domToReact(node.children)}</em>;
      }
    },
  };

  return parse(cleanContent, options);
};

export async function fetchProjectsData() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/getProjects`);

    if (!response.ok) {
      console.error(
        `Fehlerhafte Antwort: ${response.status} ${response.statusText}`
      );
      throw new Error("Fehler beim Abrufen der Projektdaten");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fehler in fetchProjectsData:", error);
    return [];
  }
}

export async function fetchAllProjects() {
  try {
    const response = await fetch(`/api/projects`);
    if (!response.ok) {
      throw new Error("Fehler beim Abrufen der Projektdaten");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fehler in fetchAllProjects:", error);
    return [];
  }
}

export async function fetchProjectByTitle(title) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(
      `${baseUrl}/api/projects?title=${encodeURIComponent(title)}`
    );
    if (!response.ok) {
      throw new Error("Fehler beim Abrufen der Projektdaten");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fehler in fetchProjectByTitle:", error);
    return null;
  }
}

export async function fetchProjectById(id) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    console.log(`Abrufen der Projektdaten von: ${baseUrl}/api/projects/${id}`);

    const response = await fetch(`${baseUrl}/api/projects/${id}`);
    if (!response.ok) {
      console.error(
        `Fehlerhafte Antwort: ${response.status} ${response.statusText}`
      ); // Debug-Ausgabe
      throw new Error("Fehler beim Abrufen der Projektdaten");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fehler in fetchProjectById:", error);
    return null;
  }
}

export async function fetchProductionProjects(apiUrl) {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Fehler beim Abrufen der Projekte: ${response.statusText}`
      );
    }

    const projects = await response.json();

    const productionProjects = projects.map((project) => ({
      title: project.title,
      titleImage: project.titleImage,
      description: project.description || "Keine Beschreibung verfügbar",
    }));

    return productionProjects;
  } catch (error) {
    console.error("Fehler in der Helper-Funktion:", error.message);
    return [];
  }
}

export async function fetchDevelopmentProjects(apiUrl) {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Fehler beim Abrufen der Entwicklungsprojekte: ${response.statusText}`
      );
    }

    const projects = await response.json();

    const developmentProjects = projects.map((project) => ({
      title: project.title,
      titleImage: project.titleImage,
      description: project.description || "Keine Beschreibung verfügbar",
    }));

    return developmentProjects;
  } catch (error) {
    console.error("Fehler in der Development Helper-Funktion:", error.message);
    return [];
  }
}
