// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className=" py-5">
        <div>
          <nav className="px-5 flex justify-between">
            <ul className="flex justify-start gap-5 px-5">
              <li className="text-xl">
                {" "}
                <NavLink to={"/"}> Home</NavLink>
              </li>
              <li className="text-xl">
                {" "}
                <NavLink to={"/About"}>About</NavLink>
              </li>
              <li className="text-xl">
                {" "}
                <NavLink to={"/Project"}>Project</NavLink>
              </li>
              <li className="text-xl">
                {" "}
                <NavLink to={"/Project"}>Resume</NavLink>
              </li>
            </ul>
            <ul className="flex justify-start gap-8 px-5 items-center">
              <li className="text-3xl">
                {" "}
                <NavLink to={"/"}>
                  <FaGithub />
                </NavLink>
              </li>
              <li className="text-3xl">
                {" "}
                <NavLink to={"/"}>
                  <FaLinkedinIn />{" "}
                </NavLink>
              </li>
              <li className="text-3xl">
                <a href="https://www.instagram.com/bestboy_ashish/">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="pt-28 ps-5 flex justify-between items-center">
          <div className="block px-5">
            <h1 className="text-2xl font-semibold text-gray-700 ">
              Interested in working together?
            </h1>
            <div className="font-semibold mt-2 flex gap-x-5 ">
              <button className="px-5 py-3 border-2 border-gray-500 rounded-lg hover:bg-gray-500 hover:border-[#C0C0C0] hover:text-white transition-all duration-200 ease-in-out">
                Get In Touch
              </button>
              <button className="px-5 py-3 border-2 border-gray-500 rounded-lg hover:bg-gray-500 hover:border-[#C0C0C0] hover:text-white transition-all duration-200 ease-in-out">
                Contact US
              </button>
            </div>
          </div>
          <div>
            <div className="block px-5">
              <h1 className=" font-semibold text-gray-700 ">
                ©2024 All Rights Reserved.
              </h1>
              <h2 className=" font-semibold text-gray-700 ">
                Made with 💜 by Ashish Kaintura
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
