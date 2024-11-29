"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const CiLogin = dynamic(() =>
  import("react-icons/ci").then((mod) => mod.CiLogin)
);

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-stone-400 p-4">
      <div className="container mx-auto items-center">
        <div className="flex-1 text-center text-xs md:mb-0">
          <div>&copy; 2024 All rights reserved</div>
          <div className="flex justify-center space-x-4 mt-2">
            <Link
              href="/imprint"
              className="hover:text-stone-500 text-stone-300"
            >
              Impressum
            </Link>
            <Link
              href="/privatepolicy"
              className="hover:text-stone-500 text-stone-300"
            >
              Datenschutz
            </Link>
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
