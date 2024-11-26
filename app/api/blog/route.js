import connectToDatabase from "../../config/database";
import BlogPost from "../../models/BlogPost";

export async function GET(req) {
  await connectToDatabase();
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  try {
    if (slug) {
      // Einzelner Artikel basierend auf `slug`
      const blogPost = await BlogPost.findOne({ slug });
      if (!blogPost) {
        return new Response(
          JSON.stringify({ error: "Blogpost nicht gefunden" }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }
      return new Response(JSON.stringify(blogPost), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      // Alle Artikel zurückgeben, inklusive `sections`
      const blogPosts = await BlogPost.find({});
      return new Response(JSON.stringify(blogPosts), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Fehler beim Abrufen der Blogposts" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function POST(req) {
  await connectToDatabase();

  try {
    const { title, slug, excerpt, sections } = await req.json();

    const existingPost = await BlogPost.findOne({ slug });
    if (existingPost) {
      return new Response(
        JSON.stringify({
          error: "Ein Blogpost mit diesem Slug existiert bereits.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const newPost = new BlogPost({
      title,
      slug,
      excerpt,
      sections: sections || [],
    });

    await newPost.save();

    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
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
    const { id, title, slug, excerpt, sections } = await req.json();

    if (!id) {
      return new Response(JSON.stringify({ error: "Blogpost ID fehlt" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const updatedPost = await BlogPost.findByIdAndUpdate(
      id,
      { title, slug, excerpt, sections },
      { new: true }
    );

    if (!updatedPost) {
      return new Response(
        JSON.stringify({ error: "Blogpost nicht gefunden" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify(updatedPost), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Fehler beim Aktualisieren des Blogposts" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
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
