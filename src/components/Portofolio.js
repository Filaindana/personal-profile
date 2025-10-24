import React from "react";

const projects = [
  { title: "Dashboard Web App", tag: "Web App" },
  { title: "Mobile App Landing", tag: "Mobile" },
  { title: "Illustrations", tag: "Design" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mt-10">
      <h3 className="text-xl font-semibold">Portfolio</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4">
            <div className="h-40 bg-gray-100 rounded-md mb-3 flex items-center justify-center">
              Preview
            </div>
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm text-gray-500">{p.tag}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="px-4 py-2 bg-gradient-to-r from-heroStart to-heroEnd text-white rounded">
          View More Projects
        </button>
      </div>
    </section>
  );
}
