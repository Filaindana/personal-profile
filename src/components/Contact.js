import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="mt-10 bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold">Contact Me</h3>
      <div className="mt-4 md:flex gap-6">
        <div className="flex-1">
          <p className="text-gray-600">
            Have a project or want to say hi? Send a message and I’ll reply
            shortly.
          </p>
        </div>
        <form className="w-full md:w-1/2 mt-4 md:mt-0">
          <input
            className="w-full p-3 border rounded mb-3"
            placeholder="Your name"
          />
          <input
            className="w-full p-3 border rounded mb-3"
            placeholder="Email"
          />
          <textarea
            className="w-full p-3 border rounded mb-3"
            rows="4"
            placeholder="Message"
          ></textarea>
          <button className="px-4 py-2 bg-gradient-to-r from-heroStart to-heroEnd text-white rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
