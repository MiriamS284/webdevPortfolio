"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

// Lazy load the login icon
const CiLogin = dynamic(() =>
  import("react-icons/ci").then((mod) => mod.CiLogin)
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-stone-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 text-center text-sm">
          <div>&copy; {currentYear} All rights reserved</div>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/imprint" className="hover:text-stone-600 text-stone-300">
              Impressum
            </a>
            <a
              href="/privatepolicy"
              className="hover:text-stone-600 text-stone-300"
            >
              Datenschutz
            </a>
          </div>
        </div>
        <div className="flex justify-end flex-1">
          <Link href="/admin/login">
            <div className="flex items-center space-x-2 text-primary-100 hover:text-primary-300 group">
              <CiLogin size={20} className="text-primary-100" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm">
                Admin Access
              </span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
