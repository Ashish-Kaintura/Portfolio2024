/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Profile from "../images/myself.png";
import punarnava from "../images/punarnava.png";
import loopandcut from "../images/loopandcut.png";
import Sonrash from "../images/Sonrash.png";
import { FaLink } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiBootstrap, DiMongodb, DiPhp } from "react-icons/di";
import { SiMysql } from "react-icons/si";

import Responsive from "../icon/responsive-design.png";
import figma from "../icon/figma.png";
import sketching from "../icon/sketching.png";
import Uipng from "../icon/UIUX.png";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import ProjectsSection from "../components/Projectsection";
import ExperienceSection from "../components/ExperienceSection";
export default function Home() {
  const downloadResume = () => {
    const resumeData = "https://docs.google.com/document/d/1rYtq5Iwdf150K-wtIUaq5V1fax6M0sY2/edit?usp=drive_link&ouid=100550602252589415449&rtpof=true&sd=true";
    try {
      const blob = new Blob([resumeData], { type: "application/dox" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "Ashish Kainturaresume .docx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      // Log a message to the console when the resume is successfully downloaded
      console.log("Resume downloaded successfully!");
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  const [index, setIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);

  const texts = [
    "Front-End Developer",
    "Back-End Developer",
    "Full Stack Developer ",
    "UX/UI Designer",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setVisibleChars(0);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setVisibleChars((prevChars) =>
        Math.min(texts[index].length, prevChars + 1)
      );
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [index]);
  // useEffect(() => {
  //   const typingInterval = setInterval(() => {
  //     setVisibleChars((prevChars) =>
  //       Math.min(texts[index].length, prevChars + 1)
  //     );
  //   }, 100);

  //   return () => {
  //     clearInterval(typingInterval);
  //   };
  // }, [index]);
  // useEffect(() => {
  //   window.scroll(0, 0)
  // })
  return (
    <>
      {/* #7918f7 */}

      <section>
        <div className="sm:h-[95vh] h-[80vh] relative">
          <div className="flex flex-wrap sm:justify-around justify-center sm:pt-32 pt-20 items-center p-5 ">
            <div className="z-10">
              <div>
                <h2 className="text-xl font-semibold">
                  {" "}
                  <span className="text-[#7918f7] font-semibold ">
                    Hey,
                  </span>{" "}
                  I'm Ashish 👋🏻{" "}
                </h2>
              </div>
              <div className="wrapper py-4 sm:w-96 sm:h-44 h-20 ">
                <ul className="dynamic-txts">
                  <li>
                    <span className="sm:text-7xl text-3xl text-[#7918f7]">
                      {texts[index].substring(0, visibleChars)}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="sm:text-3xl text-xl pb-4">
                <h1>I'm a developer based in Delhi, I'll help you build </h1>
                <p> beautiful websites your users will love.</p>
              </div>
              <div className="flex  gap-5 pt-5 ">
                <Link to="/contact">
                  <button
                    className="px-5 py-3 rounded-2xl bg-black text-white hover:opacity-85"
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    }}
                  >
                    {" "}
                    Get In Touch{" "}
                  </button>
                </Link>
                <Link to="/Projects">
                  {" "}
                  <button
                    className="px-5 py-3 rounded-2xl hover:opacity-85"
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    }}
                  >
                    {" "}
                    Borwse Project{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:flex hidden absolute sm:top-[45%]  sm:left-[35%]  bg-[#7918f7] sm:w-64 w-48 sm:h-64 h-48 rounded-full z-0  opacity-95 "></div>
            <div className="sm:flex hidden absolute sm:top-[0%] top-[-18%] sm:left-[-8%] left-[-8%] bg-[#7918f7] sm:w-44 w-48 sm:h-44 h-48 rounded-full z-0"></div>
            <div className="rounded-full sm:border-2 p-8  md:flex  justify-center items-center hover:border-0 ">
              <div>
                <div
                  className="sm:w-96 sm:h-96 w-64 h-64 bg-[#7918f7] sm:mt-0 mt-8 rounded-full flex items-center justify-center overflow-hidden hover:-translate-y-6 transition-all ease-in duration-150"
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  }}
                >
                  <img
                    className="hover:scale-125 transition-all ease-in duration-200  filter grayscale  hover:grayscale-0 "
                    src={Profile}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- RESUME SECTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 shadow-inner border border-gray-100 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="text-[#7918f7]">Download</span> my resume?
            </h2>
            <p className="text-gray-500 mb-8 text-lg">
              Click the button below to grab a copy of my CV and have a look.
            </p>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={downloadResume}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#7918f7] text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-500/30 hover:bg-[#6a15d8] hover:shadow-purple-500/50 transition-all active:scale-95"
              >
                <span>Download CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 group-hover:translate-y-1 transition-transform"
                >
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" h-[70vh] relative flex items-center justify-center ">
          <div>
            <div className="absolute inset-0 z-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#7918f7"
                  fillOpacity="1"
                  d="M0,224L720,0L1440,192L1440,0L720,0L0,0Z"
                ></path>
              </svg>
            </div>
            <div className="pt-20 text-center flex justify-center items-center gap-2">
              <h2 className="text-5xl font-bold border-b-4 pb-2 border-[#7918f7]">
                About Us
              </h2>
              <div className=" w-3 h-3 bg-[#7918f7]  rounded-full mt-4"></div>
            </div>
            <div className=" justify-center pt-12 z-10 px-5 font-semibold">
              <p className="z-10 px-5 text-center">
                As a Front-End Web Developer at Risezonic, I created visually
                appealing and user-friendly websites. I collaborated with the
                design and development teams to ensure seamless integration of
                front-end and as well as little back-end technologies.
              </p>
              <p className="z-10 px-5 text-center">
                . Leveraging my HTML, CSS, JavaScript, and React JS, Next JS,
                NodeJS, Firebase, MongoDb, MySQL, etc. knowledge, I successfully
                delivered projects that met client's expectations.
              </p>
            </div>
            <div>
              <div className="w-full h-40 flex items-center justify-center cursor-pointer">
                <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[whitesmoke] dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-5 h-5 text-green-400"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-5 h-5 text-green-400"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                  <Link to="/about">
                    {" "}
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                      Know More
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectsSection />
      <ExperienceSection />
      <section>
        <div className="py-5">
          <div className="pt-20 pb-10  flex ps-5 items-center gap-2">
            <h2 className="text-7xl font-bold border-b-4 pb-2 border-[#7918f7] ">
              Skills
            </h2>
            <div className=" w-3 h-3 bg-[#7918f7]  rounded-full mt-6"></div>
          </div>
          <div className="px-5">
            <h2 className=" font-semibold text-4xl text-gray-700 pb-6">
              Web Desgin
            </h2>
            <div className="flex flex-wrap overflow-hidden justify-evenly p-5 gap-4">
              <div className="flex items-center gap-2 text-2xl">
                <h2>
                  <img className="w-8" src={Uipng} alt="" />
                </h2>
                <h2 className=" font-semibold ">UI/UX Design</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <h2>
                  <img className="w-8" src={Responsive} alt="" />
                </h2>
                <h2 className=" font-semibold ">Responsive Design</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <h2>
                  <img className="w-8" src={sketching} alt="" />
                </h2>
                <h2 className=" font-semibold ">Wireframing</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <h2>
                  <img className="w-8" src={figma} alt="" />
                </h2>
                <h2 className=" font-semibold ">Figma</h2>
              </div>
            </div>
          </div>
          <div className="px-5 py-6">
            <h2 className=" font-semibold text-4xl text-gray-700 pb-6">
              Front-End
            </h2>
            <div className="flex flex-wrap gap-4 overflow-hidden justify-around p-5 ">
              <div className="flex items-center gap-2 text-2xl">
                <h2>
                  <AiFillHtml5 className=" text-orange-600" />
                </h2>
                <h2 className=" font-semibold  ">HTML</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <h2>
                  <IoLogoJavascript className=" text-yellow-500" />
                </h2>
                <h2 className=" font-semibold  ">Javascript</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <h2 className=" text-blue-500">
                  <FaCss3Alt />
                </h2>
                <h2 className=" font-semibold  ">CSS3</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <h2 className=" text-indigo-800">
                  <RiReactjsLine />
                </h2>
                <h2 className=" font-semibold  ">ReactJS</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <h2 className="text-blue-400">
                  <SiTailwindcss />
                </h2>
                <h2 className=" font-semibold  ">Tailwind Css</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <h2 className=" text-indigo-700">
                  <DiBootstrap />
                </h2>
                <h2 className=" font-semibold  ">Bootstrape Css</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <h2>
                  <AiFillHtml5 />
                </h2>
                <h2 className=" font-semibold  ">Gsap</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <h2 className="f text-blue-800">
                  <SiNextdotjs />
                </h2>
                <h2 className=" font-semibold  ">Next.js</h2>
              </div>
            </div>
          </div>
          <div className="px-5">
            <h2 className=" font-semibold text-4xl text-gray-700 pb-6">
              Back-End
            </h2>
            <div className="flex flex-wrap gap-4 overflow-hidden justify-around p-5 ">
              <div className="flex items-center gap-2 text-2xl">
                <h2 className="text-green-800 text-4xl">
                  <IoLogoNodejs />
                </h2>
                <h2 className=" font-semibold  ">NodeJs</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <h2 className="text-yellow-500">
                  <SiExpress />
                </h2>
                <h2 className=" font-semibold  ">ExpressJs</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <h2 className=" text-green-700">
                  <DiMongodb />
                </h2>
                <h2 className=" font-semibold  ">MongoDb</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <h2 className=" text-blue-700 text-4xl">
                  <SiMysql />
                </h2>
                <h2 className=" font-semibold  ">MySQl</h2>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <h2 className=" text-blue-700 text-5xl">
                  <DiPhp />
                </h2>
                <h2 className=" font-semibold  ">PHP</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="p-8">
          <div className="pt-20 pb-10  flex ps-5 items-center gap-2">
            <h2 className="text-7xl font-bold border-b-4 pb-2 border-[#7918f7] ">
              My Story
            </h2>
            <div className=" w-3 h-3 bg-[#7918f7]  rounded-full mt-6"></div>
          </div>
          <div className="p-5">
            <p className=" font-normal text-xl pb-5">
              My Journey as a Front-End Developer at Risezonic (2023 - Present)
              In my role as a Front-End Web Developer at Risezonic since 2023,
              I've been crafting immersive digital experiences that go beyond
              mere code
            </p>
            <p className=" font-normal text-xl pb-5">
              Collaborating closely with design and development teams, I've
              seamlessly integrated front-end and back-end technologies to bring
              innovative websites to life. With a toolkit comprising HTML, CSS,
              JavaScript, and ReactJs, I've not only met but exceeded client
              expectations in delivering visually stunning and highly functional
              projects
            </p>
            <p className=" font-normal text-xl pb-5">
              As a Front-End Web Developer at Risezonic, I left an indelible
              mark on every project I undertook. From creating captivating user
              interfaces to ensuring the seamless integration of front-end and
              back-end technologies, my dedication to excellence was unwavering.
              My journey is a testament to my commitment to staying at the
              forefront of web development and delivering exceptional digital
              experiences that elevate the standards of the industry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
