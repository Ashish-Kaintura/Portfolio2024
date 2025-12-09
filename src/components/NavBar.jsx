/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle
import logo from "../Logo/ashish-kaintura-high-resolution-logo-black-transparent.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img className="w-40" src={logo} alt="Logo" />
        </NavLink>

        {/* Hamburger Menu Button (Visible only on small screens) */}
        <button
          className="text-3xl md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-7 text-lg">
          <li>
            <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About" className="hover:text-blue-600">About</NavLink>
          </li>
          <li>
            <NavLink to="/Projects" className="hover:text-blue-600">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/Resume" className="hover:text-blue-600">Resume</NavLink>
          </li>
        </ul>

        {/* Contact Icon (Always visible) */}
        <ul className="hidden md:flex gap-5 items-center">
          <li>
            <NavLink
              className="text-4xl hover:scale-90 transition-all duration-200"
              to="/Contact"
            >
              <IoChatbubbleEllipsesSharp />
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Visible when menuOpen is true) */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-gray-100`}>
        <ul className="flex flex-col items-center py-4 gap-4 text-lg">
          <li>
            <NavLink to="/" className="block w-full text-center py-2 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/About" className="block w-full text-center py-2 hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to="/Projects" className="block w-full text-center py-2 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/Resume" className="block w-full text-center py-2 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Resume</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="text-3xl py-2 hover:scale-90 transition" onClick={() => setMenuOpen(false)}>
              <IoChatbubbleEllipsesSharp />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
