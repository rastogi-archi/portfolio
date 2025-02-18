import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <section className="min-h-screen py-12">
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center p-8 bg-white"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-[#012322] mb-6"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-700 leading-relaxed"
          >
            Hi, I'm{" "}
            <span className="font-semibold text-[#2a9776] hover:text-[#01504d] transition-colors">
              Archi Rastogi
            </span>
            , a creative and driven
            <span className="text-[#2a9776] font-medium"> tech enthusiast</span> with a passion for solving problems through innovation and design. I thrive on building efficient, user-centered digital experiences and contributing to impactful projects.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-700 mt-6"
          >
            Let's connect and create something extraordinary together!
          </motion.p>
        </motion.div>

        {/* Contact Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4">
            <Phone className="text-[#01504d] size-8" />
            <p className="text-lg font-medium text-gray-800">+91-9368006517</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4">
            <FaWhatsapp className="text-[#01504d] size-8" />
            <p className="text-lg font-medium text-gray-800">+91-9368006517</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4">
            <Mail className="text-[#01504d] size-8" />
            <p className="text-lg font-medium text-gray-800 break-all">
              rastogiarchi18@gmail.com
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4">
            <MapPin className="text-[#01504d] size-8" />
            <p className="text-lg font-medium text-gray-800">Ghaziabad, India</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
