import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaServer, FaLightbulb } from "react-icons/fa";
import ProfileImage from "../assets/ProfileImage.jpeg";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="px-6 mx-auto max-w-7xl container">
        {/* Heading */}
        <h1 className="text-4xl text-center font-bold mb-4">
          About
          <span className="text-purple"> Me</span>
        </h1>
        <p className="mx-auto mb-16 text-gray-400 max-w-2xl text-center">
          Get to know more about my background and passion.
        </p>

        {/* Image + My Journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={ProfileImage}
              alt="Profile"
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
              <p className="text-gray-300 mb-6">
                I'm a passionate full-stack developer with over 5 years of
                experience creating digital solutions for businesses around the
                world. My journey started with basic HTML/CSS websites and has
                evolved into building complex web applications with modern
                frameworks.
              </p>
              <p className="text-gray-300 mb-6">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through tech blogs and tutorials. I believe in continuous
                learning and pushing the boundaries of what's possible on the
                web.
              </p>

              {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-dark-300 rounded-2xl p-6                 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                    >
                        <div className="text-purple text-4xl mb-4">
                            <h3>Innovative</h3>
                        </div>
                        <p>
                            I love creating unique solutions to complex problems with cutting-edge technologies.
                        </p>
                    </div>
                    <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                    >
                        <div className="text-purple text-4xl mb-4">
                            <h3>Design Oriented</h3>
                        </div>
                        <p>
                            Beautiful design and user experience are at the heart of everything I create.
                        </p>
                    </div>
                    <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                    >
                        <div className="text-purple text-4xl mb-4">
                            <h3>Clean Code</h3>
                        </div>
                        <p>
                            I write maintainable, efficient code following best
                            practices and modern patterns.
                        </p>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
