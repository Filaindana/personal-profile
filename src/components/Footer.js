import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 py-6">
      <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Fila Indana. All rights reserved.
      </div>
    </footer>
  );
}
