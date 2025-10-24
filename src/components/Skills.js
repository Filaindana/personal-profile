import React from "react";

const skills = [
  { title: "UI/UX Design", desc: "Figma, wireframing" },
  { title: "Frontend", desc: "React, Tailwind CSS" },
  { title: "Branding", desc: "Visual identity" },
  { title: "Prototyping", desc: "Interactive prototypes" },
];

export default function Skills() {
  return (
    <section id="skills" className="mt-10">
      <h3 className="text-xl font-semibold">My Skills</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((s, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow text-center">
            <div className="font-semibold">{s.title}</div>
            <div className="text-sm text-gray-500 mt-2">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
