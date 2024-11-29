import connectToDatabase from "../../config/database";
import Project from "../../models/Projects";

export async function GET(req) {
  try {
    console.log("Verbindung zur Datenbank herstellen...");
    await connectToDatabase();

    const projects = await Project.find(
      { environment: "Production" },
      {
        title: 1,
        titleImage: 1,
        description: 1,
        layoutImages: 1,
        category: 1,
        techStack: 1,
        features: 1,
        challenges: 1,
        learnings: 1,
        liveLink: 1,
        repoLink: 1,
      }
    );

    console.log("Projekte erfolgreich abgerufen:", projects);
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Fehler beim Abrufen der Projekte:", error);
    return new Response(
      JSON.stringify({
        error: "Fehler beim Abrufen der Projekte",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
