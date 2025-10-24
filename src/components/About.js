import React from "react";
import profile from "../assets/profile-sample.jpg";

export default function About() {
  return (
    <section id="about" className="mt-12 bg-white rounded-xl p-6 shadow">
      <div className="md:flex gap-6 items-center">
        <img
          src={profile}
          alt="profile"
          className="w-28 h-28 rounded-lg object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-2 text-gray-600">
            I’m a frontend developer focused on building responsive, accessible,
            and beautiful web interfaces. I enjoy turning designs into
            interactive and performant products.
          </p>
          <div className="mt-4 flex gap-3">
            <button className="px-3 py-2 bg-gradient-to-r from-heroStart to-heroEnd text-white rounded">
              Download CV
            </button>
            <a href="#contact" className="px-3 py-2 border rounded">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
