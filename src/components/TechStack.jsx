import React from 'react';
import { motion } from 'framer-motion';
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiPostman, SiExpress } from "react-icons/si";

const TechStack = () => {
    const techStack = [
        { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
        { name: 'JavaScript', icon: <IoLogoJavascript className="text-yellow-500 text-5xl" /> },
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-950 text-5xl" /> },
        { name: 'React', icon: <FaReact className="text-blue-400 text-5xl" /> },
        { name: 'Tailwind CSS', icon: <RiTailwindCssFill className="text-teal-500 text-5xl" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-5xl" /> },
        { name: 'Express JS', icon: <SiExpress className="text-gray-700 text-5xl" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500 text-5xl" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-5xl" /> },
        { name: 'Git', icon: <FaGitAlt className="text-orange-500 text-5xl" /> }
    ];

    return (
        <section>
            <div className="max-w-7xl mx-auto px-6 mt-20 mb-20">
                <h2 
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}
                    className="text-4xl font-bold text-center text-[#012322] mb-8"
                >
                    Technologies I Know
                </h2>
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                >
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-all"
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            {tech.icon}
                            <span className="text-xl mt-4 text-gray-700 font-medium">{tech.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
