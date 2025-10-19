import React from "react";
import { motion } from "framer-motion";
import Portfolio from "../assets/Portfolio.jpg"
import Ecommerce from "../assets/Ecommerce.webp"

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="projects"
      className="py-20 bg-dark-200"
    >
      {/* Heading */}
      <h1 className="text-4xl text-center font-bold mb-4">
        My
        <span className="text-purple"> Projects</span>
      </h1>
      <p className="mx-auto mb-16 text-gray-400 max-w-2xl text-center">
        A selection of my recent work
      </p>

      {/* Cards */}
      <div className="px-6 mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <img
            className="h-55 w-full"
            src={Portfolio}
            alt="profile"
          />
          <h3 className="text-2xl mt-7 mb-2 font-semibold">
            Portfolio Website
          </h3>
          <p className="text-gray-400 mb-4">
            A personal portfolio to showcase projects, skills, and blogs with
            dark/light mode support.
          </p>
          <span className="px-3 py-1 bg-dark-400 rounded-b-full ">
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer mr-2 ">
              Tailwind CSS
            </button>
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer  ">
              Next.js
            </button>
            <button className="text-gray-300 mt-3 ml-2 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer  ">
              Markdown
            </button>
            <button className="text-gray-300 mt-3 bg-dark-200 px-3 py-1 rounded-full cursor-pointer ">
              Framer Motion
            </button>
          </span>
          <div className="flex gap-2 mt-5">
            <a
              href="#"
              className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 duration-300 transition"
            >
              View Demo
            </a>
            <a
              href="#"
              className="flex-1 px-4 py-2 border border-purple font-medium rounded-lg text-center hover:bg-purple/20 transition duration-300"
            >
              Code
            </a>
          </div>
        </div>

        <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <img
            className="h-55 w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsV_p1zGAkjdGcBUuG03XbcfwZ7nAbR1DgkQ&s"
            alt="profile"
          />
          <h3 className="text-2xl mt-7 mb-2 font-semibold">Chat App</h3>
          <p className="text-gray-400 mb-4">
            A real-time chat application with group messaging, emojis, and file
            sharing.
          </p>
          <span className="px-3 py-1 bg-dark-400 rounded-b-full ">
            <button className="text-gray-300 bg-dark-200 mr-2 px-3 py-1 rounded-full cursor-pointer  ">
              React
            </button>
            <button className="text-gray-300 bg-dark-200 mr-2 px-3 py-1 rounded-full cursor-pointer  ">
              Tailwind CSS
            </button>
            <button className="text-gray-300 bg-dark-200 px-3 py-1 mt-3 rounded-full cursor-pointer mr-2 ">
              Node.js
            </button>
            <button className="text-gray-300 mt-3 bg-dark-200 px-3 py-1 rounded-full cursor-pointer  ">
              MongoDB
            </button>
          </span>
          <div className="flex gap-2 mt-5">
            <a
              href="#"
              className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 duration-300 transition"
            >
              View Demo
            </a>
            <a
              href="#"
              className="flex-1 px-4 py-2 border border-purple font-medium rounded-lg text-center hover:bg-purple/20 transition duration-300"
            >
              Code
            </a>
          </div>
        </div>

        <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <img
            className="h-55 w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDUNeGnRrohEoNk63mXhf0ATWOxpvMXplMw&s"
            alt="profile"
          />
          <h3 className="text-2xl mt-7 mb-2 font-semibold">
            AI Image Generator
          </h3>
          <p className="text-gray-400 mb-4">
            Generate images using AI prompts powered by OpenAI's DALL·E model
            and Cloudinary.
          </p>
          <span className="px-3 py-1 bg-dark-400 rounded-b-full ">
            <button className="text-gray-300 bg-dark-200 mr-2 px-3 py-1 rounded-full cursor-pointer ">
              React
            </button>
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer  ">
              Tailwind CSS
            </button>
            <button className="text-gray-300 bg-dark-200 mr-2 mt-3  px-3 py-1 rounded-full cursor-pointer  ">
              OpenAI API
            </button>
            <button className="text-gray-300 bg-dark-200 mt-3 px-3 py-1 rounded-full cursor-pointer  ">
              Cloudinary
            </button>
          </span>
          <div className="flex gap-2 mt-5">
            <a
              href="#"
              className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 duration-300 transition"
            >
              View Demo
            </a>
            <a
              href="#"
              className="flex-1 px-4 py-2 border border-purple font-medium rounded-lg text-center hover:bg-purple/20 transition duration-300"
            >
              Code
            </a>
          </div>
        </div>

        <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <img
            className="h-55 w-full"
            src={Ecommerce}
            alt="profile"
          />
          <h3 className="text-2xl mt-7 mb-2 font-semibold">
            E-Commerce Platform
          </h3>
          <p className="text-gray-400 mb-4">
            A full-featured online store with shopping cart, user
            authentication, and payment processing.
          </p>
          <span className="px-3 py-1 bg-dark-400 rounded-b-full ">
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer mr-2 ">
              React
            </button>
            <button className="text-gray-300 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer  ">
              Tailwind CSS
            </button>
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer mr-2 mt-3 ">
              Node.js
            </button>
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer mt-3">
              MongoDB
            </button>
          </span>
          <div className="flex gap-2 mt-5">
            <a
              href="#"
              className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 duration-300 transition"
            >
              View Demo
            </a>
            <a
              href="#"
              className="flex-1 px-4 py-2 border border-purple-800 font-medium rounded-lg text-center hover:bg-purple/20 transition duration-300"
            >
              Code
            </a>
          </div>
        </div>

        <div className="bg-dark-300 rounded-2xl p-6               transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <img
            className="h-55 w-full"
            src="https://res.cloudinary.com/dky3cpvtf/image/upload/v1711996674/5_dndm7s.png"
            alt="profile"
          />
          <h3 className="text-2xl mt-7 mb-2 font-semibold">
            Task Management App
          </h3>
          <p className="text-gray-400 mb-4">
            A productivity application with drag-and-drop functionality and
            real-time updates.
          </p>
          <span className="px-3 py-1 bg-dark-400 rounded-b-full ">
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer mr-2">
              React
            </button>
            <button className="text-gray-300 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer ">
              Tailwind CSS
            </button>
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer mr-2 mt-3">
              Node.js
            </button>
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer mt-3">
              MongoDB
            </button>
          </span>
          <div className="flex gap-2 mt-5">
            <a
              href="#"
              className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 duration-300 transition"
            >
              View Demo
            </a>
            <a
              href="#"
              className="flex-1 px-4 py-2 border border-purple font-medium rounded-lg text-center hover:bg-purple/20 transition duration-300"
            >
              Code
            </a>
          </div>
        </div>

        <div className="bg-dark-300 rounded-2xl p-6                 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <img
            className="h-55 w-full"
            src="https://img.freepik.com/free-vector/workout-tracker-app-interface_52683-46943.jpg"
            alt="profile"
          />
          <h3 className="text-2xl mt-7 mb-2 font-semibold">Fitness Tracker</h3>
          <p className="text-gray-400 mb-4">
            A Mobile app for tracking workouts, nutrition, and health metrics.
          </p>
          <span className="px-3 py-1 bg-dark-400 rounded-b-full ">
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer mr-2">
              React
            </button>
            <button className="text-gray-300 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer ">
              Tailwind CSS
            </button>
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer mr-2 mt-3">
              Node.js
            </button>
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer mt-3">
              MongoDB
            </button>
          </span>
          <div className="flex gap-2 mt-5">
            <a
              href="#"
              className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 duration-300 transition"
            >
              View Demo
            </a>
            <a
              href="#"
              className="flex-1 px-4 py-2 border border-purple font-medium rounded-lg text-center hover:bg-purple/20 transition duration-300"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-7">
        <a
          href="#"
          className="px-4 py-2 border border-purple-800 font-medium rounded-lg text-center hover:bg-purple/20 transition duration-300 w-full max-w-xs"
        >
          View More Projects ➔
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
