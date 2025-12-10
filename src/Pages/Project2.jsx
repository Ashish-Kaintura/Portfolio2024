import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import { ExternalLink, Code2, MonitorSmartphone } from "lucide-react";

import punarnava from "../images/punarnava.png";
import Quiz from "../ProjectsImg/quizegame.png";
import Sonarash from "../ProjectsImg/sonrash.png";
import netflix from "../ProjectsImg/netfix.png";
import risezonictravel from "../images/risezonictravel.png";
import acart from "../images/acart.png";
import malani from "../images/malanimarble.png";
import multitectools from "../images/multitec.png";
import frozit from "../images/frozit.png";
import loopandcut from "../images/loopandcut.png";
import goldvine from "../images/goldvine.png";
import lookflydesk from "../images/lookflydesk.png";
import jandsinsurance from "../images/jandsinsurance.png";
import skyworldtourcorp from "../images/skyworldtour.png";
import veneasy from "../images/veneasy.png";
import risezonic from "../images/risezonic.png";

export default function Projects() {
  const projects = [
    { title: "Punarnava", img: punarnava, url: "https://quiet-faloodeh-378fe9.netlify.app/", technologies: ["Html", "CSS", "Tailwind CSS", "JavaScript"] },
    { title: "Risezonic Travel", img: risezonictravel, url: "https://www.risezonictravel.com/", technologies: ["React Js", "Tailwind CSS", "Email.js"] },
    { title: "Acart", img: acart, url: "https://akartbyashish.netlify.app/", technologies: ["Vite Js", "Tailwind CSS", "Firebase", "Razorpay"] },
    { title: "Netflix Clone", img: netflix, url: "https://ashish-kaintura.github.io/Netflix-clone-frontend/frontpage", technologies: ["React JS", "MongoDB", "Node JS", "Express JS"] },
    { title: "Malani Marble", img: malani, url: "https://malanimarbles.com/", technologies: ["HTML", "Tailwind CSS", "EmailJS"] },
    { title: "Multitec Tools", img: multitectools, url: "https://multitectools.com/", technologies: ["React JS", "Tailwind CSS", "EmailJS"] },
    { title: "Frozit", img: frozit, url: "https://www.frozit.in/", technologies: ["HTML", "Bootstrap", "CSS", "JavaScript"] },
    { title: "Loop & Cut", img: loopandcut, url: "https://www.loopandcut.in/", technologies: ["React JS", "Tailwind CSS", "Firebase", "Node", "Express JS"] },
    { title: "GoldVine", img: goldvine, url: "https://www.thegoldvine.com/", technologies: ["Shopify"] },
    { title: "LookflyDesk", img: lookflydesk, url: "https://lookflydesk.com/", technologies: ["HTML", "Tailwind CSS", "MySQL"] },
    { title: "J&S Insurance", img: jandsinsurance, url: "https://www.jsinsur.com/", technologies: ["React JS", "Tailwind CSS", "Node JS", "Express JS", "MySQL"] },
    { title: "SkyWorld Tour Corp", img: skyworldtourcorp, url: "https://skyworldtourcorp.com/", technologies: ["React JS", "Tailwind CSS"] },
    { title: "Veneasy", img: veneasy, url: "https://veneasy.in/", technologies: ["WordPress"] },
    { title: "Sonrash By Sona", img: Sonarash, url: "http://sonrashbysona.com/", technologies: ["React JS", "Tailwind CSS"] },
    { title: "Weather App", img: "https://help.apple.com/assets/6758C14AEA2BBD75D7023772/6758C150890517C4260090D6/en_US/eeb56c882953c4c17bb28992c1db31c1.png", url: "#", technologies: ["React Native Expo", "Tailwind CSS"] },
    { title: "Risezonic", img: risezonic, url: "https://www.risezonic.com/", technologies: ["HTML", "Tailwind CSS", "JavaScript", "GSAP"] },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <NavBar />

      {/* Modern Hero */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-br from-red-600/70 via-fuchsia-600/50 to-orange-500/70 mix-blend-overlay"
        />

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl md:text-7xl font-extrabold text-center drop-shadow-2xl"
        >
          My Projects
        </motion.h1>
      </section>

      {/* Section Title */}
      <section className="py-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold flex justify-center gap-3 items-center"
        >
          <MonitorSmartphone /> Recent Work
        </motion.h2>
      </section>

      {/* Modern Grid Cards */}
      <section className="px-6 sm:px-14 lg:px-24 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-neutral-900 rounded-2xl shadow-lg overflow-hidden border border-neutral-800 hover:border-red-500/60 hover:shadow-red-500/20 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Details */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-red-400 text-center mb-3">
                  {project.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-neutral-800 border border-red-500/40 text-red-300 rounded-full uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <button className="w-full py-2 bg-red-600 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30">
                    Visit <ExternalLink size={16} />
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}