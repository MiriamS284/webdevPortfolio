import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Section: Projects</h2>
      <p className="text-sm text-gray-600 mb-4">
        In diesem Bereich werden Projekte veröffentlicht, neue Projekte
        angelegt, bestehende Projekte bearbeitet und verwaltet. Idee: Teile
        deine Projekte, arbeite transparent. Zeige deinen Fortschritt im
        Erlernen und Beherrschen der Programmiersprachen.
      </p>
      <ul className="space-y-2">
        <li>
          <Link href="/admin/dashboard/projects/newProject">
            <div className="w-full block text-left text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition">
              Neues Projekt erstellen & präsentieren
            </div>
          </Link>
        </li>

        <li>
          <Link href="/admin/dashboard/projects/listProjects">
            <div className="w-full block text-left text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition">
              Projekte anzeigen & verwalten
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
