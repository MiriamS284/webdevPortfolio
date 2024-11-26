"use client";

import { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import ActionMenu from "./ActionMenu";

export default function BlogList() {
  const [blogPosts, setBlogPosts] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch("/api/blog");
        if (!response.ok)
          throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        const data = await response.json();
        console.log("Geladene Blogposts:", data);
        setBlogPosts(data);
      } catch (error) {
        console.error("Fehler beim Abrufen der Blogposts:", error);
        setError("Es gab ein Problem beim Laden der Blogposts.");
      }
    }

    fetchBlogPosts();
  }, []);

  const toggleMenu = (postId) => {
    setActiveMenu(activeMenu === postId ? null : postId);
  };

  if (blogPosts === null) return <p>Lade Blogposts...</p>;

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-2">
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <li
              key={post._id}
              className="bg-gray-100 p-2 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-200 transition"
            >
              <div className="flex-grow">
                <h4 className="text-md font-semibold">{post.title}</h4>
                <p className="text-sm text-gray-500">
                  {post.createdAt
                    ? new Date(post.createdAt).toLocaleDateString("de-DE")
                    : "Kein Datum vorhanden"}
                </p>
              </div>

              <div className="ml-4 relative">
                <div
                  className="cursor-pointer"
                  onClick={() => toggleMenu(post._id)}
                >
                  <CiMenuKebab className="text-xl text-gray-700 hover:text-gray-900" />
                </div>

                {activeMenu === post._id && (
                  <div className="absolute right-0 mt-2 bg-white shadow-lg rounded p-2 z-10">
                    <ActionMenu
                      blogPost={post}
                      onUpdate={(updatedPost) => {
                        setBlogPosts((prevPosts) =>
                          prevPosts.map((p) =>
                            p._id === updatedPost._id ? updatedPost : p
                          )
                        );
                      }}
                      onDelete={(deletedId) => {
                        setBlogPosts((prevPosts) =>
                          prevPosts.filter((p) => p._id !== deletedId)
                        );
                      }}
                      onAdd={(newPost) => {
                        setBlogPosts((prevPosts) => [...prevPosts, newPost]);
                      }}
                    />
                  </div>
                )}
              </div>
            </li>
          ))
        ) : (
          <p>Keine Blogposts gefunden.</p>
        )}
      </ul>
    </div>
  );
}
