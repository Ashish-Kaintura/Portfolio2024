import { motion } from "framer-motion";

export default function ExperienceSection() {
    return (
        <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-white">

            {/* Top SVG Wave */}
            <div className="absolute top-0 inset-x-0 z-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#7918f7"
                        fillOpacity="1"
                        d="M0,320L48,282.7C96,245,192,171,288,117.3C384,64,480,32,576,16C672,0,768,0,864,0C960,0,1056,0,1152,21.3C1248,43,1344,85,1392,106.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    ></path>
                </svg>
            </div>

            {/* Floating Blob */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-[30%] right-20 hidden md:flex opacity-[0.9] z-0"
            >
                <svg className="w-80" viewBox="0 0 200 200">
                    <path
                        fill="#7918F7"
                        d="M45.9,-26.8C56.6,-8.1,60.2,14.3,51.3,32C42.5,49.6,21.3,62.3,-0.2,62.5C-21.7,62.6,-43.5,50.1,-57,29.8C-70.4,9.5,-75.7,-18.6,-64.8,-37.4C-53.9,-56.2,-27,-65.6,-4.6,-63C17.7,-60.3,35.3,-45.4,45.9,-26.8Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 mt-10">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 justify-center mb-16"
                >
                    <h1 className="text-5xl text-gray-800 font-bold border-b-4 pb-2 border-[#7918f7]">
                        Experience
                    </h1>
                    <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                        className="w-3 h-3 bg-[#7918f7] rounded-full mt-5"
                    ></motion.div>
                </motion.div>

                {/* Experience Content */}
                <div className="flex justify-center px-6">
                    <div className="flex gap-8">

                        {/* Animated Timeline Line */}
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "24rem" }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="w-1 bg-[#7918f7] rounded-xl"
                        ></motion.div>

                        {/* Experience Box */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-xl bg-white/70 backdrop-blur-md shadow-lg p-6 rounded-2xl border border-purple-200 hover:shadow-xl hover:shadow-purple-300/40 transition-all"
                        >
                            <h1 className="font-semibold text-gray-800 text-3xl">
                                Risezonic
                            </h1>
                            <h2 className="font-semibold text-gray-600 text-sm mb-4">
                                India, New Delhi
                            </h2>

                            <h3 className="font-semibold text-gray-800 text-xl">
                                Front End Web Developer
                            </h3>
                            <p className="font-semibold text-gray-600 text-sm">2023 - Now</p>

                            <p className="text-gray-700 mt-4 leading-relaxed">
                                As a Front End Web Developer at Risezonic, I created visually
                                appealing and user-friendly websites. Collaborated with design
                                and development teams, ensuring smooth integration of UI &
                                backend. Used HTML, CSS, JavaScript, React, and more to deliver
                                high-quality websites.
                            </p>

                            <ul className="mt-5 space-y-2 text-gray-800 font-semibold">
                                <li>✔ Developed responsive websites</li>
                                <li>✔ Website deployment & cPanel management</li>
                                <li>✔ Clean and modern UI implementation</li>
                                <li>✔ Converted mockups to live UI</li>
                                <li>✔ Participated in design reviews</li>
                                <li>✔ Delivered fast & optimized websites</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    );
}
