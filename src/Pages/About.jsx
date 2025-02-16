/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../components/NavBar";
import { useRef, useEffect, useState } from "react";
import "../css/About.css";
import { CiStar } from "react-icons/ci";
export default function About() {
  const sliderRef = useRef(null);
  // Function to handle scrolling the slider towards the right
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 2, behavior: "smooth" });
        const lastItem =
          sliderRef.current.children[sliderRef.current.children.length - 1];
        if (
          lastItem.getBoundingClientRect().right <=
          sliderRef.current.getBoundingClientRect().right
        ) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 50); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <section>
          <div className="h-[100vh] px-8 pt-20  ">
            <div>
              <h1 className="text-9xl font-semibold text-gray-700">
                About me.
              </h1>
              <h2 className="text-2xl border-l-8 border-[#9064F7] ps-4">
                Developing beautiful and functional websites is what I love
                doing, and that's why I give my all in every <br />
                new challenge.
              </h2>
            </div>
            <div className="pt-8">
              <div>
                <h1 className="font-semibold text-lg text-gray-700">
                  My Stack.
                </h1>
              </div>
              <div className="w-[25rem] h-64 bg-gray-400 rounded-2xl mt-6 overflow-hidden p-4 flex flex-col justify-center gap-y-8 items-center shadow-2xl ">
                <div className="container ">
                  <div className="content gap-x-2" ref={sliderRef}>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">Html/Css </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">React JS</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">Java Script</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">
                        Tailwind Css
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">Next Js</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">Bootstrape</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">
                        React Native
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="content2 gap-x-2" ref={sliderRef}>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">Node Js</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">Express Js</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">My SQL</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">Mongo DB</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">PHP</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">Java Script</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">Node JS</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="content gap-x-2" ref={sliderRef}>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">
                        UX/UI Desgin
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">Responsive</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">Figma</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">HTML/Css</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">AdoveXD</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">FIgma</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl item flex">
                      <h1 className="flex items-center gap-x-2">UX/UI</h1>
                    </div>
                    <div className=" px-3 py-2 text-white text-xl uppercase  rounded-2xl flex">
                      <h1 className="flex items-center gap-x-2">
                        <CiStar className="text-indigo-700 text-3xl font-semibold" />{" "}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-4 px-6 justify-center">
          <div className=" p-5 ">
            <div>
              <h1 className="text-6xl font-semibold py-5">My Story.</h1>
            </div>
            <div>
              <p className="text-lg">
                In 2023, I started my journey as a Front-End Developer at
                Risezonic. With a Bachelor's degree and a Diploma in Software
                Engineering from NIIT, I dove into mastering HTML, CSS,
                JavaScript, React.js, and more. <br /> <br /> At Risezonic, I
                focused on making websites look great and work smoothly. While
                my main role was in front-end development, I also explored
                backend work to broaden my skills. Every day at Risezonic was a
                chance to learn something new, whether it was tackling tough
                projects or staying updated on the latest tech trends. <br />{" "}
                <br /> Now, I'm eager for new opportunities to grow and make a
                difference wherever my career takes me. I'm committed to pushing
                my limits, embracing challenges, and striving for success in
                everything I do.💜
              </p>
            </div>
          </div>
        </section>
        <section className="mb-4 px-6 justify-center">
          <div className=" p-5 ">
            <div>
              <h1 className="text-6xl font-semibold py-5">My experience</h1>
            </div>

            <div className="flex gap-x-6 text-6xl font-semibold mt-8">
              <h2 className="font-bold pr-6 text-7xl">01</h2>
              <h3 className="text-lg text-indigo-500 font-normal ps-6">
                Frontend Developer <br />
                <span className="text-5xl font-semibold text-gray-950">
                  Risezonic
                </span>{" "}
                <p className="mt-4 text-black">
                  As a Front End Web Developer at Risezonic, I created visually
                  appealing and user-friendly websites. I collaborated with the
                  design and development teams to ensure seamless integration of
                  front-end and back-end technologies. Leveraging my HTML, CSS,
                  JavaScript, and ReactJs, etc knowledge, I successfully
                  delivered projects that met client's expectations.
                </p>
                <div className="pt-4 gap-4">
                  <li className=" text-gray-800">
                    Developed responsive websites
                  </li>
                  <li className=" text-gray-800">
                    Deployment of Websites Management of cPane
                  </li>
                  <li className=" text-gray-800">
                    Ensured clean, valid HTML and CSS markup conforming to
                    industry standards.
                  </li>
                  <li className=" text-gray-800">
                    Brought mock-ups to life with HTML, CSS, and JavaScript.
                  </li>
                  <li className=" text-gray-800">
                    Participated in design reviews ensuring consistency between
                    design intent and implementation
                  </li>
                  <li className=" text-gray-800">
                    Created successful websites that met requirements for
                    objectives such as load speed and design.
                  </li>
                </div>
              </h3>
              <br />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
