/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { CiStar } from "react-icons/ci";
import NavBar from "../components/NavBar"; // Ensure this path is correct
import Form from "../components/form"; // Ensure this path is correct
// import "../css/About.css"; // You can likely remove this if it only contained the old slider logic

// Data for the stack to clean up the JSX
const skills = [
  "HTML/CSS", "React JS", "JavaScript", "Tailwind CSS", "Next JS",
  "Bootstrap", "React Native", "Node JS", "Express JS", "MySQL",
  "MongoDB", "PHP", "UX/UI Design", "Figma", "Adobe XD"
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <>
      {/* <NavBar /> Add this back if needed */}
      <main className="overflow-x-hidden">
        
        {/* HERO SECTION */}
        <section className="h-[100vh] px-8 pt-20 flex flex-col justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeInUp} 
              className="text-9xl font-semibold text-gray-700"
            >
              About me.
            </motion.h1>
            <motion.h2 
              variants={fadeInUp} 
              className="text-2xl border-l-8 border-[#9064F7] ps-4 mt-6"
            >
              Developing beautiful and functional websites is what I love
              doing, and that's why I give my all in every <br />
              new challenge.
            </motion.h2>
          </motion.div>

          {/* STACK SECTION (Infinite Marquee) */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
            className="pt-16"
          >
            <h1 className="font-semibold text-lg text-gray-700 mb-6">
              My Stack.
            </h1>
            
            <div className="w-full max-w-[25rem] h-64 bg-gray-400 rounded-2xl overflow-hidden p-4 flex flex-col justify-center shadow-2xl mx-0">
              {/* Marquee Wrapper */}
              <div className="flex overflow-hidden relative w-full">
                <motion.div 
                  className="flex gap-4 whitespace-nowrap"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 10, // Adjust speed here (lower is faster)
                  }}
                >
                  {/* We duplicate the list twice to create a seamless loop */}
                  {[...skills, ...skills].map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="px-3 py-2 text-white text-lg uppercase bg-gray-900 rounded-2xl flex items-center shadow-lg">
                        {skill}
                      </div>
                      <div className="text-indigo-700 text-3xl font-semibold">
                        <CiStar />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              
              {/* Second Row (Moving Reverse) - Optional, simpler to just have one cool one, but here is a second row logic if you want variety */}
              <div className="flex overflow-hidden relative w-full mt-8">
                 <motion.div 
                  className="flex gap-4 whitespace-nowrap"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 12, 
                  }}
                >
                  {[...skills, ...skills].reverse().map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="px-3 py-2 text-white text-lg uppercase bg-gray-800 rounded-2xl flex items-center shadow-lg">
                        {skill}
                      </div>
                      <div className="text-indigo-700 text-3xl font-semibold">
                        <CiStar />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

            </div>
          </motion.div>
        </section>

        <Form />

        {/* MY STORY SECTION */}
        <section className="mb-4 px-6 justify-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="p-5"
          >
            <div>
              <h1 className="text-6xl font-semibold py-5">My Story.</h1>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-gray-800">
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
                everything I do. 💜
              </p>
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="mb-20 px-6 justify-center">
          <div className="p-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl font-semibold py-5">My experience</h1>
            </motion.div>

            <motion.div 
              className="flex gap-x-6 mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <h2 className="font-bold pr-6 text-7xl text-gray-300">01</h2>
              
              <div className="w-full">
                <h3 className="text-lg text-indigo-500 font-normal">
                  Frontend Developer <br />
                  <span className="text-5xl font-semibold text-gray-950 block mt-2">
                    Risezonic
                  </span>
                </h3>
                
                <p className="mt-4 text-gray-700 text-lg max-w-4xl">
                  As a Front End Web Developer at Risezonic, I created visually
                  appealing and user-friendly websites. I collaborated with the
                  design and development teams to ensure seamless integration of
                  front-end and back-end technologies.
                </p>

                <ul className="pt-6 grid grid-cols-1 gap-4">
                  {[
                    "Developed responsive websites",
                    "Deployment of Websites Management of cPanel",
                    "Ensured clean, valid HTML and CSS markup conforming to industry standards.",
                    "Brought mock-ups to life with HTML, CSS, and JavaScript.",
                    "Participated in design reviews ensuring consistency between design intent and implementation",
                    "Created successful websites that met requirements for objectives such as load speed and design."
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp}
                      className="text-gray-800 list-disc list-inside hover:text-indigo-600 transition-colors duration-300"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}