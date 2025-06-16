"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header id="navbar" className="font-figtree w-full fixed top-0 bg-[#1f1f1f] text-white shadow-md">

      {/* Desktop Tampilan */}
      <nav className="hidden md:flex justify-between items-center px-10 py-4 h-20">
        <div className="text-lg md:text-xl font-semibold">Gregorius Geraldin</div>
        <ul className="flex gap-8 text-lg md:text-xl">
          <li>
            <Link
              href="#about"
              className="hover:text-gray-300 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="hover:text-gray-300 transition"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#portfolio"
              className="hover:text-gray-300 transition"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-gray-300 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile tem */}
      <nav className="md:hidden flex justify-between items-center px-6 py-4">
        <div className="text-xl font-semibold">John Doe</div>
        <div className="relative">
          <button
            className="flex flex-col gap-1"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span className="w-8 h-0.5 bg-white"></span>
            <span className="w-8 h-0.5 bg-white"></span>
            <span className="w-8 h-0.5 bg-white"></span>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-4 bg-[#2a2a2a] border border-gray-600 rounded-md shadow-md w-40 text-white">
              <ul className="flex flex-col text-center py-2">
                <li className="py-2 border-b border-gray-700">
                  <Link href="#about" onClick={toggleMenu}>About</Link>
                </li>
                <li className="py-2 border-b border-gray-700">
                  <Link href="#experience" onClick={toggleMenu}>Experience</Link>
                </li>
                <li className="py-2 border-b border-gray-700">
                  <Link href="#portfolio" onClick={toggleMenu}>Portfolio</Link>
                </li>
                <li className="py-2">
                  <Link href="#contact" onClick={toggleMenu}>Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
