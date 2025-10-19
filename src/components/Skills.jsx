import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaServer, FaLightbulb } from "react-icons/fa";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="skills"
      className="py-20 bg-dark-200"
    >
      {/* Heading */}
      <h1 className="text-4xl text-center font-bold mb-4">
        My
        <span className="text-purple"> Skills</span>
      </h1>
      <p className="mx-auto mb-16 text-gray-400 max-w-2xl text-center">
        Technologies I work with to bring ideas to life
      </p>

      {/* Cards */}
      <div className="px-6 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <h3 className="text-3xl font-semibold">Frontend Development</h3>
          <p className="text-gray-400 mt-3">
            Building responsive and interactive user interfaces with modern frameworks.
          </p>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">React</button>
          <button className="text-gray-300 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">Next.js</button>
          <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">TypeScript</button>
          <button className="text-gray-300 mt-3 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">JavaScript</button>
        </div>

        <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <h3 className="text-3xl font-semibold">Backend Development</h3>
          <p className="text-gray-400 mt-3">
            Creating robust server-side applications and RESTful APIs.
          </p>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">Node.js</button>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">Express JS</button>
          <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">Laravel</button>
          <button className="text-gray-300 mt-3 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">Django</button>

        </div>

        <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <h3 className="text-3xl font-semibold">Database Management</h3>
          <p className="text-gray-400 mt-3">
            Designing and optimizing databases for performance and scalability.
          </p>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">PostgreSQL</button>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">MongoDB</button>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">MySQL</button>
        </div>

        <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <h3 className="text-3xl font-semibold">Mobile Development</h3>
          <p className="text-gray-400 mt-3">
            Building cross-platform mobile applications with modern tools.
          </p>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">React Native</button>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">Swift</button>
          <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">Flutter</button>
          <button className="text-gray-300 mt-3 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">Icon</button>
        </div>

        <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <h3 className="text-3xl font-semibold">Cloud & Deveops</h3>
          <p className="text-gray-400 mt-3">
            Deploying and managing applications in cloud environments.
          </p>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">Linux</button>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">Docker</button>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">AWS</button>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">SHLD/HLD</button>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">CI/CD</button>
        </div>

        <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <h3 className="text-3xl font-semibold">Tools & Technologies</h3>
          <p className="text-gray-400 mt-3">
            Essential tools and technologies I use in my development workflow.
          </p>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">Git & Github</button>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">Webpack</button>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">Jest</button>
          <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer">Figma</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
