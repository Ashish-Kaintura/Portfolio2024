/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Componenets/NavBar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          {/* <Route path="*" element={<h1>Error</h1>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
