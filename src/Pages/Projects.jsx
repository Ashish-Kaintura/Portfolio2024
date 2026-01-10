import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import { ExternalLink, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import projectsData from "../data/projects.json";

gsap.registerPlugin(ScrollTrigger);

const ITEMS_PER_PAGE = 8;

export default function Projects() {
  const gridRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projectsData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Fake loading (better UX)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // GSAP animation
  useEffect(() => {
    if (!loading) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, [loading, currentPage]);
  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="h-[55vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A23FF8]/60 via-fuchsia-600/40 to-indigo-500/60 bg-center  bg-cover  bg-no-repeat"
          style={{ backgroundImage:"url(https://i.postimg.cc/nrHysDgw/projects-banner.png)"}} />
        {/* <h1 className="relative text-5xl md:text-7xl font-extrabold">
          My Projects
        </h1> */}
      </section>

      {/* Title */}
      <section className="py-14 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold flex justify-center gap-3 text-black">
          <MonitorSmartphone /> Recent Work
        </h2>
      </section>

      {/* Grid */}
      <section className="px-6 sm:px-14 lg:px-24 pb-20">
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          {loading
            ? Array(8)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-neutral-900 rounded-2xl p-4"
                >
                  <Skeleton height={180} />
                  <Skeleton count={2} className="mt-4" />
                </div>
              ))
            : currentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-indigo-500 transition group overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-center text-[#A23FF8]">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap justify-center gap-2 my-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-neutral-800 border border-indigo-500/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="w-full py-2 rounded-xl bg-[#A23FF8] hover:bg-[#942eec] transition flex items-center justify-center gap-2">
                      Visit <ExternalLink size={16} />
                    </button>
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-16">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${currentPage === i + 1
                  ? "bg-[#A23FF8]"
                  : "bg-neutral-800 hover:bg-neutral-700"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
