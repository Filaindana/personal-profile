import React from "react";
import profile from "../assets/images/profile-sample.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-[#F9FAFB] flex justify-center items-center"
    >
      {/* === CONTAINER === */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-20 px-6 md:px-12">
        {/* === DIV 1: FOTO PROFIL === */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-64 h-64 rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* === DIV 2: TEKS ABOUT, TAG, & BUTTON === */}
        <div className="md:w-1/2 flex flex-col justify-center md:-ml-14 lg:-ml-20">
          <h2
            className="text-3xl font-bold text-gray-900 mb-4"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "30px",
            }}
          >
            About Me
          </h2>

          <p
            className="text-gray-600 leading-relaxed mb-6"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "18px",
            }}
          >
            Hi! I’m Fila, a passionate designer and frontend developer based in
            Surabaya. With a background in visual design and a love for coding,
            I specialize in building websites and apps that are not only
            stunning but also user-friendly.
          </p>
          {/* === TAG SKILLS === */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "UI/UX Design",
              "Web Development",
              "Branding",
              "Motion Graphics",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#EDE7FF] text-[#7755FF] rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* === BUTTON FULL WIDTH === */}
          <button
            className="w-full text-white rounded-lg shadow-md hover:opacity-90 transition py-3"
            style={{
              background: "linear-gradient(to right, #7755FF, #FF54B0)",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Let’s Connect
          </button>
        </div>
      </div>
    </section>
  );
}
