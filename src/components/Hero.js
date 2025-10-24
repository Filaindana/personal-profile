import React from "react";
import profile from "../assets/profile-sample.jpg";

export default function Hero() {
  return (
    <section className="mt-6 bg-gradient-to-r from-heroStart to-heroEnd rounded-2xl p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold">
            Creative Designer &amp; Frontend Developer
          </h1>
          <p className="mt-4 text-gray-700">
            I build beautiful and usable interfaces. I’m Fila Indana — a
            frontend developer who loves design and crafting delightful user
            experiences.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#contact" className="px-4 py-2 bg-white rounded-lg shadow">
              Contact Me
            </a>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
              See My Work
            </button>
          </div>
          <div className="mt-4 flex gap-3 text-gray-600">
            <span>📧 fila@example.com</span>
          </div>
        </div>
        <div className="w-48 h-48 rounded-full bg-white p-1 shadow-lg flex items-center justify-center">
          <img
            src={profile}
            alt="Fila"
            className="w-44 h-44 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
