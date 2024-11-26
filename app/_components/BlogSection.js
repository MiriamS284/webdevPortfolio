import Link from "next/link";

export default async function BlogSection() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();

    return (
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {posts.map((post, index) => (
          <Link href={`/seed/${post.slug}`} key={index} passHref>
            <div className="p-6 bg-white bg-opacity-60 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:rotate-1">
              <h2 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Fehler beim Laden der Blogeinträge:", error);
    return (
      <div className="text-center text-red-500">
        <p>
          Fehler beim Laden der Blogeinträge. Bitte versuchen Sie es später
          erneut.
        </p>
      </div>
    );
  }
}
