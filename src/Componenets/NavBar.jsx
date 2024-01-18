import React from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/Projects">Resume</NavLink>
          </li>
        </ul>
        <ul className=" flex gap-5">
          <li>
            <NavLink to="/Blog">Blog</NavLink>
          </li>

          <li>
            <NavLink to="/Comtact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
