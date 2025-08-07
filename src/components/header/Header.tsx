"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "@/configs/navLinks";
import { personalInfo } from "@/configs/common";
import { Kaushan_Script } from "next/font/google";

const kaushan = Kaushan_Script({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primaryWhiteColor shadow-sm">
      <div className="max-w-8xl mx-auto px-4 md:px-12 lg:px-20 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-3xl font-bold text-primaryTextColor tracking-wide"
          style={{ fontFamily: kaushan.style.fontFamily }}
        >
          {personalInfo.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-base font-semibold text-primaryTextColor uppercase tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`relative pb-1 transition duration-200 ${
                isActive(link.path)
                  ? 'text-secondaryColor after:content-[""] after:absolute after:-bottom-[3px] after:left-0 after:h-[3px] after:w-full after:bg-secondaryColor'
                  : "hover:text-secondaryColor"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-secondaryColor transition focus:outline-none focus:ring-2 focus:ring-secondaryColor focus:ring-offset-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <AiOutlineClose className="h-6 w-6" />
          ) : (
            <HiMenuAlt3 className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[60px] right-0 h-full max-w-xs overflow-y-auto bg-primaryWhiteColor px-6 py-8 space-y-8 text-primaryTextColor z-40 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-base font-semibold uppercase text-right transition ${
                isActive(link.path)
                  ? "text-secondaryColor font-bold"
                  : "hover:text-secondaryColor"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
