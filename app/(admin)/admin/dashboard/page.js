"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  IoCreateOutline,
  IoCalendarOutline,
  IoPlanetOutline,
  IoPersonOutline,
  IoLogOutOutline,
} from "react-icons/io5";

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", { method: "POST" });

      if (response.ok) {
        router.push("/");
      } else {
        console.error("Logout fehlgeschlagen");
      }
    } catch (error) {
      console.error("Fehler beim Logout:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 relative flex flex-col items-center justify-center">
      <button
        onClick={handleLogout}
        className="absolute top-8 right-8 bg-slate-900 text-slate-200 px-4 py-2 rounded-lg hover:bg-slate-600 transition flex items-center"
      >
        <IoLogOutOutline size={24} />
      </button>

      <h1 className="text-3xl font-bold mb-12">Admin Dashboard</h1>

      {/* Grid für die 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Blogverwaltung */}
        <Link href="/admin/dashboard/blog">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition cursor-pointer flex flex-col items-center text-center">
            <IoCreateOutline size={50} className="text-slate-600 mb-4" />
            <h2 className="text-xl font-bold">Posts - Blog</h2>
            <p>
              Erstelle, bearbeite und verwalte deine Blogposts inkl. Bilder.
            </p>
          </div>
        </Link>

        {/* Kalenderverwaltung */}
        <Link href="/admin/dashboard/calendar">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition cursor-pointer flex flex-col items-center text-center">
            <IoCalendarOutline size={50} className="text-slate-600 mb-4" />
            <h2 className="text-xl font-bold">Termine - Kalender</h2>
            <p>Verwalte und organisiere Termine und Kalendereinträge.</p>
          </div>
        </Link>

        {/* Projektverwaltung */}
        <Link href="/admin/dashboard/projects">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition cursor-pointer flex flex-col items-center text-center">
            <IoPlanetOutline size={50} className="text-slate-600 mb-4" />
            <h2 className="text-xl font-bold">Projekte </h2>
            <p>
              Verwalte deine laufenden Projekte und verlinke sie mit GitHub.
            </p>
          </div>
        </Link>

        {/* Persönliche Einträge */}
        <Link href="/admin/dashboard/personal">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition cursor-pointer flex flex-col items-center text-center">
            <IoPersonOutline size={50} className="text-slate-600 mb-4" />
            <h2 className="text-xl font-bold">Persönlich</h2>
            <p>Erstelle und verwalte persönliche Einträge wie Lebenslauf.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
