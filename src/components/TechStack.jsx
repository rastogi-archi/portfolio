import { motion } from 'framer-motion';
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMongodb, SiPostman, SiExpress, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const TechStack = () => {
    const techStack = [
        { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
        { name: 'JavaScript', icon: <IoLogoJavascript className="text-yellow-500 text-5xl" /> },
        { name: 'Java', icon: <FaJava className="text-blue-400 text-5xl" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-400 text-5xl" /> },
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-700 text-5xl" /> },
        { name: 'React', icon: <FaReact className="text-blue-400 text-5xl" /> },
        { name: 'Next.js', icon: <RiNextjsFill className="text-black text-5xl" /> },
        { name: 'Tailwind CSS', icon: <RiTailwindCssFill className="text-teal-500 text-5xl" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-5xl" /> },
        { name: 'Express JS', icon: <SiExpress className="text-gray-700 text-5xl" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500 text-5xl" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-5xl" /> },
        { name: 'GitHub', icon: <FaGithub className="text-gray-800 text-5xl" /> },
    ];

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <section>
            <div className="max-w-7xl mx-auto px-6 mt-20 mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-4xl font-bold text-center text-[#012322] mb-10"
                >
                    Technologies I Know
                </motion.h2>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ scale: 1.07 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                            className="flex flex-col items-center p-6 bg-white shadow-md hover:shadow-xl rounded-xl transition"
                        >
                            {tech.icon}
                            <span className="text-xl mt-3 text-gray-700 font-medium">{tech.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
