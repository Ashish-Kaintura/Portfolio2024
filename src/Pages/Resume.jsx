import { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import html2pdf from "html2pdf.js";

gsap.registerPlugin(ScrollTrigger);

export default function Resume() {
  const sectionsRef = useRef([]);
  const resumeRef = useRef(null);

  useEffect(() => {
    sectionsRef.current.forEach((section, i) => {
      if (!section) return;

      gsap.fromTo(
        section,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const downloadPDF = () => {
    if (!resumeRef.current) return;
    document.body.classList.add("pdf-mode");


    html2pdf()
      .set({
        margin: 0.5,
        filename: "Ashish_Kaintura_Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      })
      .from(resumeRef.current)
      .save();
    setTimeout(() => {
      document.body.classList.remove("pdf-mode");
    }, 1000);

  };
  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    <>

      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-900 to-black opacity-95" />

        <div className="relative text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold">
            Ashish Kaintura
          </h1>
          <p className="mt-4 text-lg text-white/90">
            MERN Full Stack Developer 
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://www.linkedin.com/in/ashish-kaintura30"
              target="_blank"
              rel="noreferrer"
              className="hover:underline font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Ashish-Kaintura"
              target="_blank"
              rel="noreferrer"
              className="hover:underline font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ACTION BUTTONS */}
      <div className="flex justify-center gap-6 mt-12">
        <button
          onClick={downloadPDF}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold shadow-xl hover:scale-105 transition"
        >
          Download as PDF
        </button>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1rYtq5Iwdf150K-wtIUaq5V1fax6M0sY2/edit?usp=drive_link&ouid=100550602252589415449&rtpof=true&sd=true"
          download
          className="px-8 py-4 bg-[#A23FF8] rounded-xl border border-white/20 text-white hover:bg-indigo-500 transition"
        >
          Download DOCX
        </a>
      </div>

      {/* RESUME CONTENT (PDF TARGET) */}
      <section
        ref={resumeRef}
        className="max-w-5xl mx-auto px-6 py-20 space-y-12 text-white"
      >
        {/* Skills */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="glass-card"
        >
          <h2 className="section-title">Skills</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Node.js",
              "MongoDB",
              "Firebase",
              "MySQL",
              "GSAP",
              "Figma",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="glass-card"
        >
          <h2 className="section-title">Work Experience</h2>
          <h3 className="text-xl font-semibold mt-4">
            Frontend Developer — Risezonic
          </h3>
          <p className="resume-muted">April 2023 – Present</p>

          <ul className="list-disc pl-6 mt-3 space-y-2 resume-text">
            <li>Built modern React interfaces with premium UX.</li>
            <li>Implemented GSAP animations & performance tuning.</li>
            <li>Handled deployments and production builds.</li>
          </ul>

        </div>

        {/* Education */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="glass-card"
        >
          <h2 className="section-title">Education</h2>
          <div className="space-y-4 mt-4 resume-text">
            <p>
              <strong className="text-white">GNIIT</strong> – Cloud & Mobile Software Engineering
              <br />
              <span className="resume-muted">NIIT (2019 – 2024)</span>
            </p>

            <p>
              <strong className="text-white">Graduation</strong> – IGNOU
              <br />
              <span className="resume-muted">2018 – 2021</span>
            </p>
          </div>

        </div>

        {/* Certificate */}
        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          className="glass-card"
        >
          <h2 className="section-title">Certificate</h2>
          <p className="mt-4 resume-text">
            Google UX/UI Certificate — New Delhi
          </p>
        </div>
      </section>
    </>
  );
}
