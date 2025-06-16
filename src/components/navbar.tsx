"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      id="navbar"
      className="font-figtree fixed top-0 z-50 w-full bg-[#1f1f1f] text-white shadow-md"
    >
      {/* Desktop Tampilan */}
      <nav className="hidden h-20 items-center justify-between px-10 py-4 md:flex">
        <div className="text-lg font-semibold md:text-xl">
          Gregorius Geraldin
        </div>
        <ul className="flex gap-8 text-lg md:text-xl">
          <li>
            <Link href="#about" className="transition hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="transition hover:text-gray-300">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="transition hover:text-gray-300">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#experience" className="transition hover:text-gray-300">
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#testimonials"
              className="transition hover:text-gray-300"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="#contact" className="transition hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile buton */}
      <nav className="flex items-center justify-between px-6 py-4 md:hidden">
        <div className="text-xl font-semibold">Gregorius Geraldin</div>
        <div className="relative">
          <button
            className="flex cursor-pointer flex-col gap-1"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span className="h-0.5 w-8 bg-white"></span>
            <span className="h-0.5 w-8 bg-white"></span>
            <span className="h-0.5 w-8 bg-white"></span>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-4 w-40 rounded-md border border-gray-600 bg-[#2a2a2a] text-white shadow-md">
              <ul className="flex flex-col py-2 text-center">
                <li className="border-b border-gray-700 py-2">
                  <Link href="#about" onClick={toggleMenu}>
                    About
                  </Link>
                </li>
                <li className="border-b border-gray-700 py-2">
                  <Link href="#skills" onClick={toggleMenu}>
                    Skills
                  </Link>
                </li>
                <li className="border-b border-gray-700 py-2">
                  <Link href="#portfolio" onClick={toggleMenu}>
                    Portfolio
                  </Link>
                </li>
                <li className="border-b border-gray-700 py-2">
                  <Link href="#experience" onClick={toggleMenu}>
                    Experience
                  </Link>
                </li>
                <li className="border-b border-gray-700 py-2">
                  <Link href="#testimonials" onClick={toggleMenu}>
                    Testimonials
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="#contact" onClick={toggleMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
