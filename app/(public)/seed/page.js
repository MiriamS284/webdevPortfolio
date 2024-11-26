import Image from "next/image";
import BlogSection from "../../_components/BlogSection";

export const metadata = {
  title: {
    template: "%s | Seed",
    default: "Seed",
  },
  description: "Ideen, konzeptionelle Überlegungen, Gedanken",
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen overflow-hidden p-8">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <Image
          src="/img/dandelion.png"
          alt="Pusteblume"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>

      <BlogSection />
    </div>
  );
}
