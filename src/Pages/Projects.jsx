/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../components/NavBar";
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


import "../css/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Punarnava",
      img: punarnava,
      url: "https://quiet-faloodeh-378fe9.netlify.app/",
      technologies: ["Html", "CSS", "Tailiwind CSS", "JavaScript"],
    },
    {
      title: "Risezonic Travel",
      img: risezonictravel,
      url: "https://www.risezonictravel.com/",
      technologies: ["React Js", "Tailwind CSS", "Email.js"],
    },
    {
      title: "Acart",
      img: acart,
      url: "https://akartbyashish.netlify.app/",
      technologies: ["Vite Js", "Tailwind CSS", "Firebase", "Razorpay"],
    },
    {
      title: "Netflix Clone 2021-22",
      img: netflix,
      url: "https://ashish-kaintura.github.io/Netflix-clone-frontend/frontpage",
      technologies: ["React JS", "MongoDB", "Node JS", "Express JS"],
    },
    {
      title: "Malnai Marble",
      img: malani,
      url: "https://malanimarbles.com/",
      technologies: ["HTML", "Tailwind Css", "EmailJS"],
    },
    {
      title: "Multitec Tools",
      img: multitectools,
      url: "https://multitectools.com/",
      technologies: ["React JS", "Tailwind Css", "EmailJS"],
    },
    {
      title: "Frozit",
      img: frozit,
      url: "https://www.frozit.in/",
      technologies: ["HTML", "Bootstrap css ", "CSS", "JavaScript"],
    },
    {
      title: "Loop&Cut",
      img: loopandcut,
      url: "https://www.loopandcut.in/",
      technologies: [
        "React JS",
        "Tailwind CSS",
        "Firebase",
        "node",
        "Express JS",
      ],
    },
    {
      title: "GoldVine",
      img: goldvine,
      url: "https://www.thegoldvine.com/?srsltid=AfmBOooAik2SALIDYbv9MStVxFBYklEXW_zMsT7gWCd7CTv0TkvsbqTh",
      technologies: ["Shopify"],
    },
    {
      title: "LookflyDesk",
      img: lookflydesk,
      url: "https://lookflydesk.com/",
      technologies: ["HTML", "Tailwind CSS", "MySQL"],
    },
    {
      title: "J&S Insurance",
      img: jandsinsurance,
      url: "https://www.jsinsur.com/",
      technologies: [
        "React JS",
        "Tailwind CSS",
        "Node JS",
        "Express JS",
        "MySQL",
      ],
    },
    {
      title: "SkyWoldTourCrop",
      img: skyworldtourcorp,
      url: "https://skyworldtourcorp.com/",
      technologies: ["React JS", "Tailwind CSS"],
    },
    {
      title: "Veneasy",
      img: veneasy,
      url: "https://veneasy.in/",
      technologies: ["WordPress"],
    },
    {
      title: "SonrashbySona",
      img: Sonarash,
      url: "http://sonrashbysona.com/",
      technologies: ["React JS", "tailwind CSS"],
    },
    {
      title: "WeatherApp",
      img: "https://help.apple.com/assets/6758C14AEA2BBD75D7023772/6758C150890517C4260090D6/en_US/eeb56c882953c4c17bb28992c1db31c1.png",
      url: "#",
      technologies: ["React Native Expo", "tailwind CSS"],
    },
    {
      title: "Risezonic",
      img: risezonic,
      url: "https://www.risezonic.com/",
      technologies: ["HTML", "tailwind CSS", "JavaScript", "GSAP"],
    },
  ];

  return (
    <>
      <NavBar />
      <section>
        {/* Hero Section */}
        <section className="relative">
          {/* <div className="flex overflow-hidden sm:h-[480px] justify-center items-center">
            <img
              width="100%"
              className="object-cover"
              src="https://www.nibblesoftware.com/blog/public/images/blogs/Mobile-Optimization.jpg"
              alt="Portfolio Showcase"
            />
          </div> */}
          {/* <div className="absolute sm:w-[650px] sm:h-32 sm:-bottom-[16%] border-b-4 border-b-red-600 -bottom-[18%] sm:left-[28%] rounded-2xl shadow-2xl shadow-gray-400 flex justify-center p-5 bg-gray-200">
            <div>
              <h1 className="text-gray-700 text-2xl font-semibold">
                My Work / Portfolio
              </h1>
              <span className="text-gray-600">
                Crafting Digital Experiences: Explore Our Masterpieces in Web
                Design & Development by{" "}
                <span className="text-gray-700 font-bold">Risezonic</span>
              </span>
            </div>
          </div> */}
        </section>

        {/* Catalog Title */}
        <section className="pt-28 pb-10 text-center">
          <h1 className="text-2xl uppercase font-semibold border-b-4 pb-2 inline-block">
            Catalogue &#160;
            <i className="fa-solid fa-address-book text-blue-400"></i>
          </h1>
        </section>

        {/* Project Cards */}
        <section className="sm:px-20 pb-20">
          <div className="flex flex-wrap sm:justify-evenly justify-center gap-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="max-w-[310px] sm:h-[490px] mx-auto sm:p-1 p-4"
              >
                <div className="bg-white shadow-md border-2 border-gray-700 rounded-lg sm:max-w-m max-w-lg mb-5 overflow-hidden border-b-red-600 border-b-4">
                  {/* Project Image */}
                  <div className="image-wrap">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      
                    >
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full object-cover"
                        loading="lazy"
                      />
                    </a>
                  </div>

                  {/* Project Title */}
                  <div className="border-2 p-2 mt-2 flex justify-center shadow-inner">
                    <h5 className="tracking-tight font-semibold text-center border-2 border-orange-200 text-red-600 text-lg rounded-2xl px-4">
                      {project.title}
                    </h5>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap py-5 font-semibold border-b-2 shadow-inner text-center justify-center items-center gap-x-2 sm:h-[156px]">
                    <h2 className="text-center">Designed & Developed by:</h2>
                    {project.technologies.map((tech, idx) => (
                      <h3
                        key={idx}
                        className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-white"
                      >
                        {tech}
                      </h3>
                    ))}
                  </div>

                  {/* Visit Button */}
                  <div className="py-4 flex justify-center shadow-inner">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-4 py-1 rounded-xl bg-red-800 text-white transition hover:bg-red-900">
                        Visit
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
