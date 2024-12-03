import connectToDatabase from "../../config/database";
import Project from "../../models/Projects";

//connectToDatabase();

export async function POST(req) {
  try {
    // Verbindung zur Datenbank herstellen
    await connectToDatabase();

    // Request-Daten sicher parsen
    let body;
    try {
      body = await req.json();
    } catch (error) {
      console.error("Fehler beim Parsen der Anfrage:", error);
      return new Response(
        JSON.stringify({ message: "Ungültiges JSON im Request-Body" }),
        { status: 400 }
      );
    }

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
    } = body;

    // Felder validieren
    if (!title || !description || !category) {
      return new Response(
        JSON.stringify({ message: "Fehlende erforderliche Felder" }),
        { status: 400 }
      );
    }

    // Neues Projekt erstellen und speichern
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

    const savedProject = await project.save();

    return new Response(
      JSON.stringify({
        message: "Projekt erfolgreich erstellt",
        project: savedProject,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Fehler beim Erstellen des Projekts:", error);
    return new Response(
      JSON.stringify({ message: "Fehler beim Erstellen des Projekts" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
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
