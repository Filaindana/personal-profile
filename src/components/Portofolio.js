import React from "react";
import dashboardImg from "../assets/dashboard.jpg";
import mobileImg from "../assets/mobile.jpg";
import motionImg from "../assets/motion.jpg";
import { FaDribbble } from "react-icons/fa";

const projects = [
  {
    title: "Dashboard Web App",
    subtitle: "UI/UX, Frontend",
    tag: "UI Design",
    image: dashboardImg,
  },
  {
    title: "Mobile App Landing",
    subtitle: "Design, Branding",
    tag: "Mobile App",
    image: mobileImg,
  },
  {
    title: "Motion Graphic",
    subtitle: "Animation, Branding",
    tag: "Motion",
    image: motionImg,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mt-16 text-center">
      <h3 className="text-3xl font-bold text-gray-800 mb-10">Portfolio</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={p.image}
                alt={p.title}
                className="h-48 w-full object-cover"
              />
              <span className="absolute top-3 right-3 bg-white text-xs font-semibold text-gray-700 px-3 py-1 rounded-full shadow">
                {p.tag}
              </span>
            </div>
            <div className="p-5 text-left">
              <h4 className="text-lg font-bold text-gray-900">{p.title}</h4>
              <p className="text-gray-500 text-sm">{p.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#7755FF] to-[#FF54B0] shadow-md hover:opacity-90 transition mx-auto">
          <FaDribbble size={18} />
          More on Dribbble
        </button>
      </div>
    </section>
  );
}
