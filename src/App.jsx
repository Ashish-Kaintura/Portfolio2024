/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import CallSticky from "./components/WhatsappSticky";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
          {/* <Route path="*" element={<h1>Error</h1>} /> */}
        </Routes>
        <CallSticky/>
        <Footer />
      </BrowserRouter>
    </>
  );
}
