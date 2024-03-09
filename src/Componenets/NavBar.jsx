/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import logo from "../Logo/ashish-kaintura-high-resolution-logo-black-transparent.png";
export default function NavBar() {
  return (
    <div>
      <nav className="flex justify-around items-center p-4">
        <ul className="flex gap-6">
          <li>
            <NavLink to="/">
              <img className=" w-[200px]" src={logo} alt="" />
            </NavLink>
          </li>
        </ul>
        <ul className="flex gap-7">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/Resume">Resume</NavLink>
          </li>
        </ul>
        <ul className=" flex gap-5 items-center justify-center">
          {/* <li>
            <NavLink to="/Blog">Blog</NavLink>
          </li> */}

          <li>
            <NavLink
              className="flex justify-center items-center text-4xl hover:scale-75 transition-all duration-150 ease-in-out"
              to="/Comtact"
            >
              <IoChatbubbleEllipsesSharp />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
