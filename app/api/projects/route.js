import connectToDatabase from "../../config/database";
import Project from "../../models/Projects";

connectToDatabase();

export async function POST(req) {
  try {
    // Request-Daten parsen
    const {
      title,
      description,
      category,
      environment,
      techStack,
      features,
      challenges,
      learnings,
      designPatterns,
      liveLink,
      repoLink,
      titleImage,
      layoutImages,
    } = await req.json();

    // Neues Projekt erstellen
    const project = new Project({
      title,
      description,
      category,
      environment,
      techStack,
      features,
      challenges,
      learnings,
      designPatterns,
      liveLink,
      repoLink,
      titleImage,
      layoutImages,
    });

    await project.save();

    return new Response(
      JSON.stringify({ message: "Projekt erfolgreich erstellt", project }),
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Fehler beim Erstellen des Projekts:", error);
    return new Response(
      JSON.stringify({ message: "Fehler beim Erstellen des Projekts" }),
      {
        status: 500,
      }
    );
  }
}

export async function GET(req) {
  try {
    // Verbindung zur Datenbank herstellen
    await connectToDatabase();

    const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
    const title = searchParams.get("title");

    if (title) {
      // Einzelnes Projekt basierend auf `title` und `environment` abrufen
      const project = await Project.findOne(
        { title: decodeURIComponent(title), environment: "Production" },
        {
          title: 1,
          description: 1,
          category: 1,
          techStack: 1,
          features: 1,
          challenges: 1,
          learnings: 1,
          designPatterns: 1,
          liveLink: 1,
          repoLink: 1,
          titleImage: 1,
          layoutImages: 1,
        }
      );

      if (!project) {
        return new Response(
          JSON.stringify({ error: "Projekt nicht gefunden" }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }
      return new Response(JSON.stringify(project), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      // Alle Projekte aus der `Production`-Umgebung mit den gewünschten Feldern zurückgeben
      const projects = await Project.find(
        { environment: "Production" },
        {
          title: 1,
          description: 1,
          category: 1,
          techStack: 1,
          features: 1,
          challenges: 1,
          learnings: 1,
          designPatterns: 1,
          liveLink: 1,
          repoLink: 1,
          titleImage: 1,
          layoutImages: 1,
        }
      );

      return new Response(JSON.stringify(projects), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Fehler beim Abrufen der Projekte:", error);
    return new Response(
      JSON.stringify({ error: "Fehler beim Abrufen der Projekte" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
