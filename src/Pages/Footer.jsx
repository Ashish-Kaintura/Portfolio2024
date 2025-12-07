// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      {/* Navigation Links */}
      <nav className="flex flex-col md:flex-row justify-between items-center gap-4">
        <ul className="flex flex-wrap justify-center md:justify-start gap-5 text-lg">
          <li>
            <NavLink to={"/"} className="hover:text-blue-600">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/About"} className="hover:text-blue-600">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Projects"} className="hover:text-blue-600">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Resume"} className="hover:text-blue-600">
              Resume
            </NavLink>
          </li>
        </ul>

        {/* Social Icons */}
        <ul className="flex justify-center gap-5 text-2xl">
          <li>
            <a
              href="https://github.com/Ashish-Kaintura"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ashish-kaintura30?"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/bestboy_ashish/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </nav>

      {/* Call to Action & Footer Info */}
      <div className="mt-10 grid md:grid-cols-2 gap-6 items-center text-center md:text-left">
        <div>
          <h1 className="text-xl font-semibold text-gray-700">
            Interested in working together?
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <a href="tel:+8076979141">
              <button className="px-5 py-3 border-2 border-gray-500 rounded-lg hover:bg-gray-500 hover:text-white transition">
                Get In Touch
              </button>
            </a>
            <Link to="/contact">
              {" "}
              <button className="px-5 py-3 border-2 border-gray-500 rounded-lg hover:bg-gray-500 hover:text-white transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-gray-700 font-semibold">
            © 2024 All Rights Reserved.
          </h2>
          <h3 className="text-gray-700 font-semibold">
            Made with 💜 by Ashish Kaintura
          </h3>
        </div>
      </div>
    </footer>
  );
}
