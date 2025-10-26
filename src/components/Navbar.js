import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 shadow-sm bg-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">Fila Indana</div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent items-center gap-6 md:gap-10 text-[16px] font-semibold font-[Poppins] text-gray-700 shadow-md md:shadow-none py-4 md:py-0 transition-all duration-300`}
        >
          <a href="#about" className="hover:text-[#7755FF] transition">
            About
          </a>
          <a href="#skills" className="hover:text-[#7755FF] transition">
            Skills
          </a>
          <a href="#portfolio" className="hover:text-[#7755FF] transition">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-[#7755FF] transition">
            Contact
          </a>
        </nav>

        {/* Hire Me Button */}
        <button
          className="hidden md:flex items-center gap-2 text-white px-5 py-2 rounded-lg shadow hover:opacity-90 transition"
          style={{
            background: "linear-gradient(to right, #7755FF, #FF54B0)",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
          Hire Me
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-2xl text-gray-800"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
