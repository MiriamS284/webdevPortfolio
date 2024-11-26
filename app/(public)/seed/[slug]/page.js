"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { sanitizeAndParse } from "../../../_lib/helpers";
import Image from "next/image";
import Link from "next/link"; // Importiere Link für Navigation
import { IoReturnUpBack } from "react-icons/io5";

async function fetchBlogPost(slug) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog?slug=${slug}`,
    { cache: "no-store" }
  );
  if (!response.ok) throw new Error("Blogartikel konnte nicht geladen werden");
  return response.json();
}

export default function BlogDetailPage() {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function loadData() {
      if (params && params.slug) {
        const postData = await fetchBlogPost(params.slug);
        setPost(postData);
      }
    }
    loadData();
  }, [params]);

  if (!post) return <p>Lädt...</p>;

  return (
    <div className="min-h-screen p-8 relative">
      {/* Back Button */}
      <Link
        href="/seed"
        className="absolute top-8 right-8 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <IoReturnUpBack size={24} />
      </Link>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.sections.map((section, index) => (
        <div key={index} className="mb-6">
          {section.type === "text" && (
            <div className="text-lg leading-relaxed">
              {sanitizeAndParse(section.content)}
            </div>
          )}
          {section.type === "image" && (
            <div className="my-4">
              <Image
                src={section.content}
                alt={`Image ${index}`}
                width={800}
                height={400}
                className="rounded-lg"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
