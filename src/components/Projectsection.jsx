import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import punarnava from "../images/punarnava.png";
import loopandcut from "../images/loopandcut.png";
import Sonrash from "../images/Sonrash.png";
export default function ProjectsSection() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const projects = [
        {
            title: "Punarnava Hotel Booking Website",
            img: punarnava,
            link: "https://www.thepunarnava.com/",
            desc: "Hotel booking website made using HTML, CSS, Tailwind CSS, JavaScript.",
        },
        {
            title: "Loop and Cut Ecommerce",
            img: loopandcut,
            link: "https://www.loopandcut.in/",
            desc: "Floor mat ecommerce store made with Vite, Tailwind CSS, Firebase.",
        },
        {
            title: "Netflix Clone",
            img: "https://res.cloudinary.com/dbxcernxw/image/upload/v1681220338/Mridul.Tech/Snaps/Netflix_clone_1_bi6xga.webp",
            link: "https://github.com/Ashish-Kaintura/Netflix-clone-frontend",
            desc: "React.js frontend + Node.js backend. MongoDB, Express.js & deployed on Render.",
        },
        {
            title: "Designer Clothing Website",
            img: Sonrash,
            link: "https://dashing-macaron-e493a8.netlify.app/",
            desc: "Made using HTML, CSS and JavaScript.",
        },
    ];

    return (
        <section className="relative py-20 px-6 bg-gradient-to-b from-white via-indigo-50/40 to-white">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-16"
            >
                <h1 className="text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                    Projects
                </h1>
                <motion.div
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ repeat: Infinity, duration: 1.4 }}
                    className="w-4 h-4 rounded-full bg-indigo-600"
                ></motion.div>
            </motion.div>

            {/* Project Cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {projects.map((p, index) => (
                    <motion.div
                        key={index}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                        className="rounded-3xl shadow-lg hover:shadow-2xl backdrop-blur-xl bg-white/60 border border-white/50 p-5 transition-all duration-300"
                    >
                        {/* Image Container */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-full h-72 rounded-2xl overflow-hidden"
                        >
                            <motion.img
                                src={p.img}
                                alt={p.title}
                                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition duration-300"
                            />
                        </motion.div>

                        {/* Content */}
                        <div className="px-2 py-6">
                            <div className="flex items-center gap-3">
                                <h1 className="text-2xl font-semibold text-gray-800">
                                    {p.title}
                                </h1>

                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 text-xl hover:scale-110 transition"
                                >
                                    <FaLink />
                                </a>
                            </div>

                            <p className="text-gray-700 mt-3 text-lg leading-relaxed">
                                {p.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Know More Button */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="w-full flex justify-center mt-16"
            >
                <Link to="/Projects">
                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 rounded-full bg-indigo-600 text-white text-lg font-semibold tracking-wide shadow-lg hover:shadow-indigo-300 transition-all"
                    >
                        Know More →
                    </motion.button>
                </Link>
            </motion.div>
        </section>
    );
}
