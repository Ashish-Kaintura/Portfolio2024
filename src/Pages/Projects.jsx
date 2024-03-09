/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Componenets/NavBar";
import dominos from "../ProjectsImg/Dominos.png";
import Quiz from "../ProjectsImg/quizegame.png";
import Sonarash from "../ProjectsImg/sonrash.png";
import netflix from "../ProjectsImg/netfix.png";
import Landing1 from "../ProjectsImg/addpage.png";
import "../css/Projects.css";
export default function Projects() {
  return (
    <>
      <NavBar />
      <section>
        <section className="relative">
          <div className="flex overflow-hidden sm:h-[480px] object-cover object-center justify-center items-center">
            <img
              width="100%"
              className="object-cover"
              src="https://www.nibblesoftware.com/blog/public/images/blogs/Mobile-Optimization.jpg"
              alt=""
            />
          </div>
          <div className="absolute sm:w-[650px] sm:h-32 sm:-bottom-[16%] border-b-4 border-b-red-600 -bottom-[18%] sm:left-[28%] rounded-2xl shadow-2xl shadow-gray-400 shadow-inner items-center flex justify-center p-5 bg-gray-200">
            <div>
              <h1 className="font-product -gray-700 text-2xl">
                Our Work / Portfolio
              </h1>

              <span className="font-product pt-2">
                Crafting Digital Experiences: Explore Our Masterpieces in Web
                Design/Development & etc
                <span className="font-product text-gray-700">By Risezonic</span>
              </span>
            </div>
          </div>
        </section>
        <section>
          <div className="pt-28 pb-10">
            <div className="flex justify-center pb-10">
              <h1 className="text-center text-2xl uppercase font-product pt-5 border-b-4 pb-2">
                catalogue &#160;
                <i className="fa-solid fa-address-book text-blue-400"></i>
              </h1>
            </div>
          </div>
        </section>
        <section>
          <div className=" sm:px-20">
            <div className="flex flex-wrap sm:justify-evenly justify-center gap-y-2">
              <div className="max-w-[310px] sm:h-[490px] overflow-hidden mx-auto sm:p-1 p-4">
                <div className="bg-white shadow-md border-2 border-gray-700 rounded-lg sm:max-w-m max-w-lg mb-5 overflow-hidden border-b-red-600 border-b-4">
                  <div className="image-wrap">
                    <a href="https://quiet-faloodeh-378fe9.netlify.app/">
                      <img src={dominos} />
                    </a>
                  </div>

                  <div className=" ">
                    <div className="border-2 p-2 py-2 mt-2 flex justify-center shadow-inner">
                      <h5 className="ttracking-tight font-product text-center border-2 border-orange-200 text-red-600 text-lg rounded-2xl px-4">
                        Dominos Site clone reramped
                      </h5>
                    </div>
                    <div className="flex flex-wrap  py-5 gap-y-2 font-product border-b-2 shadow-inner text-center justify-center items-center gap-x-2 sm:h-[156px]">
                      <h2 className="text-center">Desgin & Developed by:</h2>
                      <br />
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          React JS
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          Css
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          Bootstrape Css
                        </h3>
                      </div>
                    </div>
                    <div className="py-4 flex justify-center shadow-inner">
                      <a href="https://quiet-faloodeh-378fe9.netlify.app/">
                        <button className="px-4 py-1 rounded-xl bg-red-800 text-white">
                          Visit
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[310px] sm:h-[490px] overflow-hidden mx-auto sm:p-1 p-4">
                <div className="bg-white shadow-md border-2 border-gray-700 rounded-lg sm:max-w-m max-w-lg mb-5 overflow-hidden border-b-red-600 border-b-4">
                  <div className="image-wrap">
                    <a href="https://quiet-faloodeh-378fe9.netlify.app/">
                      <img src={Quiz} />
                    </a>
                  </div>

                  <div className=" ">
                    <div className="border-2 p-2 py-2 mt-2 flex justify-center shadow-inner">
                      <h5 className="ttracking-tight font-product text-center border-2 border-orange-200 text-red-600 text-lg rounded-2xl px-4">
                        Qiiz Game
                      </h5>
                    </div>
                    <div className="flex flex-wrap  py-5 gap-y-2 font-product border-b-2 shadow-inner text-center justify-center items-center gap-x-2 sm:h-[156px]">
                      <h2 className="text-center">Desgin & Developed by:</h2>
                      <br />
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          HTML
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          Css
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          JavaScript
                        </h3>
                      </div>
                    </div>
                    <div className="py-4 flex justify-center shadow-inner">
                      <a href="https://quiet-faloodeh-378fe9.netlify.app/">
                        <button className="px-4 py-1 rounded-xl bg-red-800 text-white">
                          Visit
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[310px] sm:h-[490px] overflow-hidden mx-auto sm:p-1 p-4">
                <div className="bg-white shadow-md border-2 border-gray-700 rounded-lg sm:max-w-m max-w-lg mb-5 overflow-hidden border-b-red-600 border-b-4">
                  <div className="image-wrap">
                    <a href="https://quiet-faloodeh-378fe9.netlify.app/">
                      <img src={Sonarash} />
                    </a>
                  </div>

                  <div className=" ">
                    <div className="border-2 p-2 py-2 mt-2 flex justify-center shadow-inner">
                      <h5 className="ttracking-tight font-product text-center border-2 border-orange-200 text-red-600 text-lg rounded-2xl px-4">
                        Clothing Site
                      </h5>
                    </div>
                    <div className="flex flex-wrap  py-5 gap-y-2 font-product border-b-2 shadow-inner text-center justify-center items-center gap-x-2 sm:h-[156px] ">
                      <h2 className="text-center">Desgin & Developed by:</h2>
                      <br />
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          HTML
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          Css
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          JavaScript
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          Tailwind Css
                        </h3>
                      </div>
                    </div>
                    <div className="py-4 flex justify-center shadow-inner">
                      <a href="https://quiet-faloodeh-378fe9.netlify.app/">
                        <button className="px-4 py-1 rounded-xl bg-red-800 text-white">
                          Visit
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[310px] sm:h-[490px] overflow-hidden  mx-auto sm:p-1 p-4">
                <div className="bg-white shadow-md border-2 border-gray-700 rounded-lg sm:max-w-m max-w-lg mb-5 overflow-hidden border-b-red-600 border-b-4">
                  <div className="image-wrap">
                    <a href="https://ashish-kaintura.github.io/Netflix-clone-frontend/frontpage">
                      <img src={netflix} />
                    </a>
                  </div>

                  <div className=" ">
                    <div className="border-2 p-2 py-2 mt-2 flex justify-center shadow-inner">
                      <h5 className="ttracking-tight font-product text-center border-2 border-orange-200 text-red-600 text-lg rounded-2xl px-4">
                        Netflix Clone 2021-22
                      </h5>
                    </div>
                    <div className="flex flex-wrap  py-5 gap-y-2 font-product border-b-2 shadow-inner text-center justify-center items-center gap-x-2 sm:h-[156px]">
                      <h2 className="text-center">Desgin & Developed by:</h2>
                      <br />
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          React js
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          MongoDb
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          Node Js
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          Express Js
                        </h3>
                      </div>
                    </div>
                    <div className="py-4 flex justify-center shadow-inner">
                      <a href="https://ashish-kaintura.github.io/Netflix-clone-frontend/frontpage">
                        <button className="px-4 py-1 rounded-xl bg-red-800 text-white">
                          Visit
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ///  */}
              <div className="max-w-[310px] sm:h-[490px] overflow-hidden mx-auto sm:p-1 p-4">
                <div className="bg-white shadow-md border-2 border-gray-700 rounded-lg sm:max-w-m max-w-lg mb-5 overflow-hidden border-b-red-600 border-b-4">
                  <div className="image-wrap">
                    <a href="https://risezonicdigitalservices.com">
                      <img src={Landing1} />
                    </a>
                  </div>

                  <div className=" ">
                    <div className="border-2 p-2 py-2 mt-2 flex justify-center shadow-inner">
                      <h5 className="ttracking-tight font-product text-center border-2 border-orange-200 text-red-600 text-lg rounded-2xl px-4">
                        Web Site landing page
                      </h5>
                    </div>
                    <div className="flex flex-wrap  py-5 gap-y-2 font-product border-b-2 shadow-inner text-center justify-center items-center gap-x-2 sm:h-[156px]">
                      <h2 className="text-center">Desgin & Developed by:</h2>
                      <br />
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          Html
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          Css
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          JavaScript
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          Tailwind Css
                        </h3>
                      </div>
                    </div>
                    <div className="py-4 flex justify-center shadow-inner">
                      <a href="https://risezonicdigitalservices.com">
                        <button className="px-4 py-1 rounded-xl bg-red-800 text-white">
                          Visit
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[310px] sm:h-[490px] overflow-hidden mx-auto sm:p-1 p-4">
                <div className="bg-white shadow-md border-2 border-gray-700 rounded-lg sm:max-w-m max-w-lg mb-5 overflow-hidden border-b-red-600 border-b-4">
                  <div className="image-wrap">
                    <a href="https://quiet-faloodeh-378fe9.netlify.app/">
                      <img src={Quiz} />
                    </a>
                  </div>

                  <div className=" ">
                    <div className="border-2 p-2 py-2 mt-2 flex justify-center shadow-inner">
                      <h5 className="ttracking-tight font-product text-center border-2 border-orange-200 text-red-600 text-lg rounded-2xl px-4">
                        Qiiz Game
                      </h5>
                    </div>
                    <div className="flex flex-wrap  py-5 gap-y-2 font-product border-b-2 shadow-inner text-center justify-center items-center gap-x-2 sm:h-[156px]">
                      <h2 className="text-center">Desgin & Developed by:</h2>
                      <br />
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          HTML
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          Css
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          JavaScript
                        </h3>
                      </div>
                    </div>
                    <div className="py-4 flex justify-center shadow-inner">
                      <a href="https://quiet-faloodeh-378fe9.netlify.app/">
                        <button className="px-4 py-1 rounded-xl bg-red-800 text-white">
                          Visit
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[310px] sm:h-[490px] overflow-hidden mx-auto sm:p-1 p-4">
                <div className="bg-white shadow-md border-2 border-gray-700 rounded-lg sm:max-w-m max-w-lg mb-5 overflow-hidden border-b-red-600 border-b-4">
                  <div className="image-wrap">
                    <a href="https://quiet-faloodeh-378fe9.netlify.app/">
                      <img src={Sonarash} />
                    </a>
                  </div>

                  <div className=" ">
                    <div className="border-2 p-2 py-2 mt-2 flex justify-center shadow-inner">
                      <h5 className="ttracking-tight font-product text-center border-2 border-orange-200 text-red-600 text-lg rounded-2xl px-4">
                        Clothing Site
                      </h5>
                    </div>
                    <div className="flex flex-wrap  py-5 gap-y-2 font-product border-b-2 shadow-inner text-center justify-center items-center gap-x-2 sm:h-[156px] ">
                      <h2 className="text-center">Desgin & Developed by:</h2>
                      <br />
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          HTML
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          Css
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          JavaScript
                        </h3>
                      </div>
                    </div>
                    <div className="py-4 flex justify-center shadow-inner">
                      <a href="https://quiet-faloodeh-378fe9.netlify.app/">
                        <button className="px-4 py-1 rounded-xl bg-red-800 text-white">
                          Visit
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[310px] sm:h-[490px] overflow-hidden  mx-auto sm:p-1 p-4">
                <div className="bg-white shadow-md border-2 border-gray-700 rounded-lg sm:max-w-m max-w-lg mb-5 overflow-hidden border-b-red-600 border-b-4">
                  <div className="image-wrap">
                    <a href="https://ashish-kaintura.github.io/Netflix-clone-frontend/frontpage">
                      <img src={netflix} />
                    </a>
                  </div>

                  <div className=" ">
                    <div className="border-2 p-2 py-2 mt-2 flex justify-center shadow-inner">
                      <h5 className="ttracking-tight font-product text-center border-2 border-orange-200 text-red-600 text-lg rounded-2xl px-4">
                        Netflix Clone 2021-22
                      </h5>
                    </div>
                    <div className="flex flex-wrap  py-5 gap-y-2 font-product border-b-2 shadow-inner text-center justify-center items-center gap-x-2 sm:h-[156px]">
                      <h2 className="text-center">Desgin & Developed by:</h2>
                      <br />
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          React js
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          MongoDb
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          Node Js
                        </h3>
                      </div>
                      <div>
                        <h3 className="px-4 py-1 border-2 rounded-2xl border-red-600 shadow-2xl uppercase cursor-pointer hover:bg-red-600 hover:text-white transition-all ease-in duration-200 hover:border-[whitesmoke]">
                          Express Js
                        </h3>
                      </div>
                    </div>
                    <div className="py-4 flex justify-center shadow-inner">
                      <a href="https://ashish-kaintura.github.io/Netflix-clone-frontend/frontpage">
                        <button className="px-4 py-1 rounded-xl bg-red-800 text-white">
                          Visit
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
