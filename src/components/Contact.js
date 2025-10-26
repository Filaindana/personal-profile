import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaGithub,
  FaDribbble,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mt-24 py-20 bg-[#F0E7FF]">
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Bagian kiri */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Me</h3>
          <p className="text-gray-700 mb-6 max-w-md">
            Interested working together? Let’s talk about your project and make
            something amazing!
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#7755FF] font-medium">
              <FaEnvelope />
              <span>hello@email.com</span>
            </div>
            <div className="flex items-center gap-2 text-[#7755FF] font-medium">
              <FaPhone />
              <span>+62 812-3456-7890</span>
            </div>
          </div>

          <div className="flex gap-4 mt-6 text-2xl text-[#7755FF]">
            <FaInstagram className="hover:text-[#FF54B0] transition" />
            <FaGithub className="hover:text-[#FF54B0] transition" />
            <FaDribbble className="hover:text-[#FF54B0] transition" />
            <FaLinkedin className="hover:text-[#FF54B0] transition" />
          </div>
        </div>

        {/* Form */}
        <form className="bg-white shadow-lg rounded-2xl p-8 w-full md:w-1/2">
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7755FF]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7755FF]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7755FF]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#7755FF] to-[#FF54B0] shadow-md hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
