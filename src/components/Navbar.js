import React from "react";

export default function Navbar() {
  return (
    <header className="py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
        <div className="text-xl font-bold">Fila Indana</div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#about" className="hover:text-purple-600">
            About
          </a>
          <a href="#skills" className="hover:text-purple-600">
            Skills
          </a>
          <a href="#portfolio" className="hover:text-purple-600">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-purple-600">
            Contact
          </a>
          <button className="ml-4 bg-gradient-to-r from-heroStart to-heroEnd text-white px-4 py-2 rounded-lg shadow">
            Hire Me
          </button>
        </nav>
        <div className="md:hidden">
          {/* mobile menu placeholder */}
          <button aria-label="menu">☰</button>
        </div>
      </div>
    </header>
  );
}
