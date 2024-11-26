import Image from "next/image";

export default function PreviewBlogPost({ title, sections }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}

      {sections && sections.length > 0 ? (
        sections.map((section, index) => (
          <div key={index} className="mb-4">
            {section.type === "text" ? (
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            ) : section.type === "image" && section.content ? ( // Überprüfung, ob `content` existiert
              <div className="relative w-full h-64 rounded-lg shadow-md overflow-hidden">
                <Image
                  src={section.content}
                  alt={`Blog Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ) : null}
          </div>
        ))
      ) : (
        <p>Füge Abschnitte hinzu, um die Vorschau anzuzeigen.</p>
      )}
    </div>
  );
}
