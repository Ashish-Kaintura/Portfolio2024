// src/pages/ContactPage.jsx
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Mail, Clock, Send, MessageSquare, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// --- CUSTOM DOODLES & ICONS ---

// The Spiral (Rotating)
const SpiralIcon = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10" className={className}>
        <path d="M50 50 C 50 50, 60 40, 60 30 C 60 20, 50 10, 40 10 C 20 10, 10 30, 10 50 C 10 80, 40 95, 70 90 C 90 85, 95 60, 90 40" strokeLinecap="round" />
    </svg>
);

SpiralIcon.propTypes = {
    className: PropTypes.string,
};

// The Star (Floating)
const StarDoodle = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
);

StarDoodle.propTypes = {
    className: PropTypes.string,
};

const SquiggleDoodle = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="3">
        <path d="M4 12C6 8 10 8 12 12C14 16 18 16 20 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

SquiggleDoodle.propTypes = {
    className: PropTypes.string,
};

// --- ANIMATIONS ---
const floatAnimation = {
    y: [-15, 15, -15],
    rotate: [0, 10, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
};

const spinAnimation = {
    rotate: 360,
    transition: { duration: 20, repeat: Infinity, ease: "linear" }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ContactPage = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        // --- EMAILJS CONFIGURATION ---
        // Login to https://dashboard.emailjs.com/ to get these keys
        const SERVICE_ID = "service_k8wi7n5";
        const TEMPLATE_ID = "template_k7q8o4i";
        const PUBLIC_KEY = "zVOe2FcOadbMtMxKv";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setIsSubmitting(false);
                setStatus('success');
                e.target.reset(); // Clear form inputs
                // Remove success message after 5 seconds
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                console.log(error.text);
                setIsSubmitting(false);
                setStatus('error');
            });
    };
  useEffect(() => {
    window.scroll(0, 0)
  })
    return (
        <div className="min-h-screen pt-20 font-sans selection:bg-lime-200 selection:text-slate-900 overflow-x-hidden bg-[#f8f9fc]">

            {/* --- BACKGROUND DECORATION --- */}
            <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob z-0"></div>
            <div className="fixed top-[20%] right-[-10%] w-[400px] h-[400px] bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 z-0"></div>

            {/* --- HERO SECTION --- */}
            <section className="relative pt-12 pb-20 lg:pt-20 z-10">
                <div className="max-w-7xl mx-auto px-6">

                    {/* HEADER */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-center mb-16 relative"
                    >
                        <motion.div animate={floatAnimation} className="absolute -top-10 left-[20%] text-lime-500 opacity-60 hidden md:block">
                            <StarDoodle className="w-12 h-12" />
                        </motion.div>

                        <div className="inline-flex items-center justify-center gap-3 flex-wrap">
                            <span className="font-serif text-5xl md:text-7xl text-slate-900 tracking-tight font-bold">Get in</span>
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                className="relative"
                            >
                                <span className="block bg-[#A23FF8] text-white font-sans font-bold text-4xl md:text-6xl px-8 py-3 rounded-full transform -rotate-2 shadow-xl shadow-blue-600/30">
                                    Touch
                                </span>
                            </motion.div>
                        </div>
                        <p className="mt-6 text-slate-500 text-lg max-w-2xl mx-auto">
                            We’d love to hear from you. Whether you have a question about courses, pricing, or just want to say hi.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center relative">

                        {/* LEFT: Contact Form (Glassmorphism) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="bg-white/70 backdrop-blur-xl border border-white/50 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-slate-800">Send us a message</h3>
                                    <p className="text-slate-500 text-sm mt-1">We usually respond within 24 hours.</p>
                                </div>

                                {/* Form Starts Here */}
                                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                                    <div className="group">
                                        <label className="text-sm font-bold text-slate-600 ml-1 mb-2 block">Name</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.01, borderColor: "#3b82f6" }}
                                            type="text"
                                            name="user_name" // Added Name Attribute
                                            required
                                            placeholder="Full Name"
                                            className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 outline-none transition-all shadow-sm group-hover:bg-blue-50/30"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="group">
                                            <label className="text-sm font-bold text-slate-600 ml-1 mb-2 block">Email</label>
                                            <motion.input
                                                whileFocus={{ scale: 1.01, borderColor: "#3b82f6" }}
                                                type="email"
                                                name="user_email" // Added Name Attribute
                                                required
                                                placeholder="email@example.com"
                                                className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 outline-none transition-all shadow-sm group-hover:bg-blue-50/30"
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="text-sm font-bold text-slate-600 ml-1 mb-2 block">Phone</label>
                                            <motion.input
                                                whileFocus={{ scale: 1.01, borderColor: "#3b82f6" }}
                                                type="tel"
                                                name="user_phone" // Added Name Attribute
                                                placeholder="+1 234 567 890"
                                                className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 outline-none transition-all shadow-sm group-hover:bg-blue-50/30"
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="text-sm font-bold text-slate-600 ml-1 mb-2 block">Message</label>
                                        <motion.textarea
                                            whileFocus={{ scale: 1.01, borderColor: "#3b82f6" }}
                                            name="message" // Added Name Attribute
                                            required
                                            rows="4"
                                            placeholder="Tell us about your project..."
                                            className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 outline-none transition-all shadow-sm resize-none group-hover:bg-blue-50/30"
                                        ></motion.textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(205, 234, 101, 0.6)" }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit" // Changed to submit
                                        disabled={isSubmitting} // Disable while sending
                                        className="w-full py-4 bg-[#A23FF8] text-slate-900 font-bold text-lg rounded-xl shadow-lg shadow-lime-500/20 hover:bg-[#d6ef75] transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>Sending... <Loader2 className="animate-spin" size={20} /></>
                                        ) : (
                                            <>SUBMIT NOW <Send size={20} className="text-slate-800" /></>
                                        )}
                                    </motion.button>

                                    {/* Success Message */}
                                    {status === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-3 bg-green-100 text-green-700 rounded-xl flex items-center justify-center gap-2 text-sm font-medium mt-2"
                                        >
                                            <CheckCircle size={18} /> Message sent successfully!
                                        </motion.div>
                                    )}

                                    {/* Error Message */}
                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-3 bg-red-100 text-red-700 rounded-xl flex items-center justify-center gap-2 text-sm font-medium mt-2"
                                        >
                                            <XCircle size={18} /> Failed to send. Please try again.
                                        </motion.div>
                                    )}
                                </form>
                            </div>
                        </motion.div>

                        {/* RIGHT: Illustration & Vectors */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative flex flex-col items-center"
                        >
                            <motion.div
                                animate={spinAnimation}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-200 opacity-50 -z-10"
                            >
                                <SpiralIcon className="w-[500px] h-[500px]" />
                            </motion.div>

                            <motion.div animate={floatAnimation} className="absolute -top-10 right-10 text-lime-500">
                                <SquiggleDoodle className="w-16 h-16 rotate-12" />
                            </motion.div>

                            <motion.img
                                whileHover={{ scale: 1.02, rotate: 1 }}
                                src="https://i.postimg.cc/x8kvRrH3/Chat_GPT_Image_Jan_4_2026_11_12_22_AM.png"
                                alt="Contact Support"
                                className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl"
                            />

                            <div className="absolute bottom-10 -right-5 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-20"></div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* --- INFO CARDS --- */}
            <section className="py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        <motion.div whileHover={{ y: -10 }} className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <Mail size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Email Support</h3>
                            <p className="text-slate-500 text-sm mb-4">For general inquiries and renewal support.</p>
                            <a href="mailto:ashishkaintura305@gmail.com" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                                ashishkaintura305@gmail.com
                            </a>
                        </motion.div>

                        <motion.div whileHover={{ y: -10 }} className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
                            <div className="w-14 h-14 bg-lime-100 text-[#A23FF8] rounded-2xl flex items-center justify-center mb-6">
                                <Clock size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Support Hours</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Mon-Fri: 7PM - 10PM<br />
                                Sat-Sun: 10AM - 2PM
                            </p>
                        </motion.div>

                        <motion.div whileHover={{ y: -10 }} className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                <MessageSquare size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Common Questions</h3>
                            <p className="text-slate-400 text-sm mb-6">Need answers fast? Check our FAQ section.</p>
                            <a href="#faq" className="inline-flex items-center gap-2 text-[#CDEA65] font-semibold hover:gap-3 transition-all">
                                Go to FAQs <Send size={16} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- FAQ SECTION --- */}
            <section id="faq" className="py-24 bg-white relative z-10">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-slate-900">
                            Frequently Asked Questions
                        </h2>
                        <div className="h-1.5 w-24 bg-[#CDEA65] rounded-full mx-auto mt-6" />
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "How long does it take to build a website?",
                                a: "It depends on the complexity. A simple landing page typically takes 3-5 days, while a full multi-page website or web app can take 2-4 weeks to complete.",
                            },
                            {
                                q: "Will my website be mobile-friendly?",
                                a: "Absolutely! I follow a mobile-first approach, ensuring your website looks stunning and functions perfectly on all devices, from smartphones to desktops.",
                            },
                            {
                                q: "Do you provide support after the site is launched?",
                                a: "Yes, I offer 4 weeks of free support post-launch to fix any bugs or minor adjustments. I also offer long-term maintenance packages if you need ongoing updates.",
                            },
                            {
                                q: "What do you need from me to get started?",
                                a: "I usually need a brief overview of your project goals, any design preferences or examples you like, and the content (text/images) you want on the site.",
                            },
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:bg-white hover:shadow-lg"
                            >
                                <h4 className="font-bold text-lg text-slate-900 mb-3 flex items-start gap-3">
                                    <span className="text-blue-500 mt-1">
                                        <MessageSquare size={20} />
                                    </span>
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 ml-8 leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;