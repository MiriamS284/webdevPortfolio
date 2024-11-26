import Link from "next/link";

export default function BlogMenu() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Section: Seed</h2>
      <p className="text-sm text-gray-600 mb-4">
        In diesem Bereich können Blogbeiträge erstellt, bearbeitet und verwaltet
        werden. Du sähst damit einen Samen (Ideen oder Blog). Idee: Teile Deine
        Gedanken, Ideen und konzeptionellen Überlegungen. Zweck: Zeige Deine
        Denkprozesse und lade Deine Besucher ein, Deine Gedankensamen zu
        entdecken.
      </p>
      <ul className="space-y-2">
        {/* Link zum Erstellen eines neuen Blogposts */}
        <li>
          <Link href="/admin/dashboard/blog/newPost">
            <div className="w-full block text-left text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition">
              Neuen Blogpost erstellen
            </div>
          </Link>
        </li>

        {/* Link zum Anzeigen der Liste der Blogposts */}
        <li>
          <Link href="/admin/dashboard/blog/listPost">
            <div className="w-full block text-left text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition">
              Blogposts anzeigen
            </div>
          </Link>
        </li>

        {/* Link zum Zurücknavigieren zum Admin-Dashboard */}
        <li>
          <Link href="/admin/dashboard">
            <div className="w-full block text-left text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition">
              Zurück zum Dashboard
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
