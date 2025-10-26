import React from "react";
import { FaFigma, FaReact, FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const skills = [
  {
    title: "Figma",
    desc: "UI Design, Prototyping",
    color: "#F0E7FF",
    icon: <FaFigma className="text-[#7755FF] text-3xl" />,
  },
  {
    title: "JavaScript",
    desc: "Front-End Development",
    color: "#E0EAFE",
    icon: <SiJavascript className="text-[#FFD600] text-3xl" />,
  },
  {
    title: "React",
    desc: "Web Apps & SPA",
    color: "#FFE978",
    icon: <FaReact className="text-[#61DAFB] text-3xl" />,
  },
  {
    title: "HTML & CSS",
    desc: "Responsive Design",
    color: "#E0EAFE",
    icon: <FaHtml5 className="text-[#FF5733] text-3xl" />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 bg-[#F9FAFB] flex flex-col items-center"
    >
      {/* Judul */}
      <div className="text-center mb-10">
        <h2
          className="text-3xl font-bold text-gray-900"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "30px",
          }}
        >
          My Skills
        </h2>
      </div>

      {/* Card Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl px-6">
        {skills.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition transform hover:-translate-y-2"
            style={{ backgroundColor: s.color }}
          >
            <div className="mb-4">{s.icon}</div>
            <h3
              className="text-lg font-semibold text-gray-800"
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {s.title}
            </h3>
            <p
              className="text-sm text-gray-600 mt-2"
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
