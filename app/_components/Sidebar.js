"use client";

import Logo from "./Logo";
import Navigation from "./Navigation";
import { useMobile } from "../_context/MobileContext";
import Link from "next/link";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiLinkedinLogo, PiGithubLogo } from "react-icons/pi";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useMobile();

  return (
    <div
      className={`bg-primary-950 text-primary-100 flex flex-col z-20 shadow-right h-screen transition-transform transform sidebar-background ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 w-full md:w-64 md:relative md:transform-none`}
      onClick={closeSidebar}
    >
      <div className="relative z-10 flex items-center justify-center mt-8">
        <Logo />
      </div>

      <div className="relative z-10 flex-1 p-4">
        <Navigation />
      </div>

      <div className="flex justify-center space-x-8 p-4 text-3xl mt-auto mb-8 md:hidden">
        <Link href="mailto:miriam@example.com" aria-label="Email">
          <MdOutlineAlternateEmail />
        </Link>
        <Link
          href="https://linkedin.com/in/miriam"
          target="_blank"
          aria-label="LinkedIn"
        >
          <PiLinkedinLogo />
        </Link>
        <Link
          href="https://github.com/miriam"
          target="_blank"
          aria-label="GitHub"
        >
          <PiGithubLogo />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
