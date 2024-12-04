import connectToDatabase from "../../config/database";
import BlogPost from "../../models/BlogPost";

export async function GET(req) {
  await connectToDatabase();
  try {
    const blogPosts = await BlogPost.find({});

    return new Response(JSON.stringify(blogPosts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching BlogPosts:", error);
    return new Response(
      JSON.stringify({ error: "Fehler beim Abrufen der Blogposts" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
export async function POST(req) {
  await connectToDatabase();

  try {
    const { title, excerpt, sections, categories } = await req.json();
    console.log("Empfangene Daten:", { title, excerpt, sections, categories });

    if (!title || !excerpt || !sections) {
      return new Response(
        JSON.stringify({ error: "Fehlende Felder im Request" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const newPost = new BlogPost({
      title,
      excerpt,
      sections,
      categories: categories || [],
    });

    console.log("Zu speichernde Daten:", newPost);

    await newPost.save();

    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Fehler beim Erstellen des Blogposts:", error);
    return new Response(
      JSON.stringify({ error: "Fehler beim Erstellen des Blogposts" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function PUT(req) {
  await connectToDatabase();

  try {
    const { id, title, excerpt, sections, categories } = await req.json();
    console.log("Empfangene Kategorien:", categories);

    const updatedPost = await BlogPost.findByIdAndUpdate(
      id,
      { title, excerpt, sections, categories },
      { new: true }
    );
    console.log("Aktualisierte Kategorien:", updatedPost.categories);

    if (!updatedPost) {
      return new Response(
        JSON.stringify({ error: "Blogpost nicht gefunden" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(updatedPost), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Fehler beim Aktualisieren des Blogposts:", error);
    return new Response(
      JSON.stringify({ error: "Fehler beim Aktualisieren des Blogposts" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
export async function DELETE(req) {
  await connectToDatabase();

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ error: "Blogpost ID fehlt" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const deletedPost = await BlogPost.findByIdAndDelete(id);

    if (!deletedPost) {
      return new Response(
        JSON.stringify({ error: "Blogpost nicht gefunden" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ message: "Blogpost gelöscht" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Fehler beim Löschen des Blogposts" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
