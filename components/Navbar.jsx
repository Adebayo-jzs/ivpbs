"use client"
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-2xl font-bold">MyBrand</div>

      {/* Menu Links */}
      <ul
        className={`md:flex md:space-x-8 md:static absolute top-16 right-0 bg-gray-900 w-48 md:w-auto md:bg-transparent transition-all duration-300 ease-in-out ${
          isOpen ? "right-0" : "-right-64"
        } flex flex-col md:flex-row space-y-4 md:space-y-0 p-5 md:p-0`}
      >
        <li>
          <a href="#" className="hover:text-cyan-400">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-cyan-400">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-cyan-400">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-cyan-400">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-cyan-400">
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div
        className="md:hidden cursor-pointer flex flex-col gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-white ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-white transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </div>
    </nav>
  );
}