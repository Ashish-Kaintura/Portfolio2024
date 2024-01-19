import React, { useState, useEffect } from "react";
import Profile from "../images/myself.png";
import Dominos from "../images/dominos.png";
import AnimeQuiz from "../images/AnimeQuiz.png";
import Sonrash from "../images/Sonrash.png";
import { FaLink } from "react-icons/fa";
export default function Home() {
  const downloadResume = () => {
    const resumeData = "'/resume/Ashish Kaintura Resume 2024-2.pdf';";
    try {
      const blob = new Blob([resumeData], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "Ashish Kainturaresume .pdf";
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
  return (
    <>
      {/* #7918f7 */}
      <section>
        <div className="sm:h-[95vh] h-[80vh] relative">
          <div className="flex flex-wrap sm:justify-around justify-center sm:pt-32 pt-20 items-center p-5 ">
            <div className="z-10">
              <div>
                <h1 className="text-xl font-semibold">
                  {" "}
                  <span className="text-[#7918f7] font-semibold">Hey,</span> I'm
                  Ashish 👋🏻{" "}
                </h1>
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
                <p>I'm a developer based in Delhi, I'll help you build </p>
                <p> beautiful websites your users will love.</p>
              </div>
              <div className="flex  gap-5 pt-5 ">
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
              </div>
            </div>
            <div className="md:flex hidden absolute sm:top-[45%]  sm:left-[35%]  bg-[#7918f7] sm:w-64 w-48 sm:h-64 h-48 rounded-full z-0  opacity-95 "></div>
            <div className=" absolute sm:top-[-5%] top-[-18%] sm:left-[-8%] left-[-8%] bg-[#7918f7] sm:w-64 w-48 sm:h-64 h-48 rounded-full z-0"></div>
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
      <section>
        <div className="sm:h-[80vh] h-[30vh] flex justify-center items-center pb-6 ">
          <div className="flex justify-center sm:pt-12 pt-10">
            <div className="  py-5 px-5 rounded-lg block">
              <h1 className="text-center text-3xl font-semibold">
                <span className=" text-[#7918f7]"> Download </span> my resume by
                clicking the download button.
              </h1>
              <h1 className="text-center text-3xl font-semibold">
                And have Look
              </h1>
              <div className="flex justify-center pt-5">
                <button
                  className="button"
                  type="button "
                  onClick={downloadResume}
                >
                  <span className="button__text">Download</span>
                  <span className="button__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 35 35"
                      id="bdd05811-e15d-428c-bb53-8661459f9307"
                      data-name="Layer 2"
                      className="svg"
                    >
                      <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                      <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                      <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
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
              <h1 className="text-5xl font-bold border-b-4 pb-2 border-[#7918f7]">
                About Us
              </h1>
              <div className=" w-3 h-3 bg-[#7918f7]  rounded-full mt-4"></div>
            </div>
            <div className=" justify-center pt-12 z-10 px-5 font-semibold">
              <p className="z-10 px-5 text-center">
                I am a Skilled developer experienced in HTML, CSS, JS, React.js,
                MongoDB, Express.js, Node.js, MySQL, Tailwind CSS, Bootstrap,
                and Next.js.
              </p>
              <p className="z-10 px-5 text-center">
                I have also completed a Google UX Designing course from Coursera
                and Possess Knowledge of other frameworks and language of PHP,
                Spring, Hibernate, Android, Adobe XD, etc.
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
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                    Know More
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-8">
          <div className="pt-20 pb-10  flex ps-5 items-center gap-2">
            <h1 className="text-5xl font-bold border-b-4 pb-2 border-[#7918f7] ">
              Projects
            </h1>
            <div className=" w-3 h-3 bg-[#7918f7]  rounded-full mt-6"></div>
          </div>
          <div className="flex sm:justify-center md:justify-center lg:justify-evenly gap-5 flex-wrap px-5">
            <div className="w-full sm:w-[480px] ">
              <div className="w-full sm:w-[480px] h-72 rounded-2xl p-10 overflow-hidden background-container ">
                <img
                  className=" rounded-2xl grayscale hover:grayscale-0 transition-all ease-in duration-200"
                  src={Dominos}
                  alt=""
                />
              </div>
              <div className="ps-2 py-10">
                <div className="flex gap-4 items-center">
                  <h1 className="text-2xl font-semibold text-gray-700">
                    Dominos Site (Modified){" "}
                  </h1>
                  <a
                    className="font-semibold text-blue-700 "
                    href="https://quiet-faloodeh-378fe9.netlify.app/

"
                  >
                    <FaLink />
                  </a>
                </div>
                <h2 className="text-lg font-semibold text-gray-700 pt-2">
                  (It's a pizza-ordering website similar to Dominos, but with
                  some modifications. This project was made with React JS and
                  CSS.)
                </h2>
              </div>
            </div>
            <div className="w-full sm:w-[480px] ">
              <div className="w-full sm:w-[480px] h-72 rounded-2xl p-10 overflow-hidden background-container ">
                <img
                  className=" rounded-2xl grayscale hover:grayscale-0 transition-all ease-in duration-200"
                  src={AnimeQuiz}
                  alt=""
                />
              </div>
              <div className="ps-2 py-10">
                <div className="flex gap-4 items-center">
                  <h1 className="text-2xl font-semibold text-gray-700">
                    Kid Quiz Game
                  </h1>
                  <a
                    className="font-semibold text-blue-700"
                    href="https://ubiquitous-cuchufli-711b3b.netlify.app
"
                  >
                    <FaLink />
                  </a>
                </div>
                <h2 className="text-lg font-semibold text-gray-700 pt-2">
                  ("It's an Anime Quiz game for kids that has been created using
                  JavaScript, HTML, and CSS.")
                </h2>
              </div>
            </div>
            <div className="w-full sm:w-[480px] ">
              <div className="w-full sm:w-[480px] h-72 rounded-2xl p-10 overflow-hidden background-container ">
                <img
                  className=" rounded-2xl grayscale hover:grayscale-0 transition-all ease-in duration-200"
                  src="https://res.cloudinary.com/dbxcernxw/image/upload/v1681220338/Mridul.Tech/Snaps/Netflix_clone_1_bi6xga.webp"
                  alt=""
                />
              </div>
              <div className="ps-2 py-10">
                <div className="flex gap-4 items-center">
                  <h1 className="text-2xl font-semibold text-gray-700">
                    Netflix Clone
                  </h1>
                  <a
                    className="font-semibold text-blue-700"
                    href="https://github.com/Ashish-Kaintura/Netflix-clone-frontend
"
                  >
                    <FaLink />
                  </a>
                </div>
                <h2 className="text-lg font-semibold text-gray-700 pt-2">
                  ( In this project, I used React.js for the front end or CSS
                  for Styling, and Node.js, Express.js, and MongoDB for the back
                  end. The project was deployed on GitHub and Render.)
                </h2>
              </div>
            </div>
            <div className="w-full sm:w-[480px] ">
              <div className="w-full sm:w-[480px] h-72 rounded-2xl p-10 overflow-hidden background-container ">
                <img
                  className=" rounded-2xl grayscale hover:grayscale-0 transition-all ease-in duration-200"
                  src={Sonrash}
                  alt=""
                />
              </div>
              <div className="ps-2 py-10">
                <div className="flex items-center gap-4">
                  <h1 className="text-2xl font-semibold text-gray-700">
                    Clothing Site{" "}
                  </h1>
                  <a
                    className="font-semibold text-blue-700 "
                    href="https://dashing-macaron-e493a8.netlify.app/
"
                  >
                    <FaLink />
                  </a>
                </div>
                <h2 className="text-lg font-semibold text-gray-700 pt-2">
                  (This is a Designer Clothing Site that was created using HTML,
                  CSS, and JavaScript)
                </h2>
              </div>
            </div>
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
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                  Know More
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[100vh]">

        </div>
      </section>
    </>
  );
}
