import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaGithub,
} from "react-icons/fa";
import { PiRocketLight, PiLightbulbLight } from "react-icons/pi";
import profile from "../assets/profile-sample.jpg";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#f0f3ff] to-[#fbe9ff] w-full">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center justify-between gap-14">
        {/* === LEFT CONTENT === */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-[#7755FF] font-medium mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Creative Designer &<br /> Frontend Developer
          </h1>

          <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
            Passionate in creating beautiful and functional digital experiences.
            I love blending creativity with technology to make impactful
            solutions for users and brands.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <button
              className="text-white px-6 py-2.5 rounded-lg shadow-lg"
              style={{
                background: "linear-gradient(to right, #7755FF, #FF54B0)",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              See My Work
            </button>
            <button
              className="border border-[#7755FF] text-[#7755FF] px-6 py-2.5 rounded-lg font-semibold"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Contact Me
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex justify-center md:justify-start gap-6 text-2xl text-[#7755FF]">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaDribbble />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* === RIGHT PROFILE IMAGE === */}
        <div className="relative flex justify-center items-center">
          {/* Lingkaran dekoratif besar di belakang */}
          <div className="absolute w-64 h-64 bg-gradient-to-r from-[#FFBDF3] to-[#CDBEFF] rounded-full opacity-70 blur-3xl translate-x-8 translate-y-6 -z-10"></div>

          {/* Container utama foto */}
          <div className="relative w-64 h-64 rounded-2xl bg-white shadow-xl p-2">
            {/* Foto */}
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Ikon lampu di pojok kiri atas */}
            <div className="absolute -top-3 -left-3 bg-white rounded-xl p-2 shadow-md">
              <PiLightbulbLight className="text-[#7755FF]" size={20} />
            </div>

            {/* Ikon roket di pojok kanan bawah */}
            <div className="absolute -bottom-4 -right-4 bg-[#FF54B0] text-white p-3 rounded-full shadow-lg">
              <PiRocketLight size={22} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
