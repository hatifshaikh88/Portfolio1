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
      <div className="ml-30 mr-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-dark-300 rounded-2xl p-6 w-81                  transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
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
              Next.js
            </button>
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer  ">
              Tailwind CSS
            </button>
            <button className="text-gray-300 mt-3 mr-2 bg-dark-200 px-3 py-1 rounded-full cursor-pointer  ">
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

        <div className="bg-dark-300 rounded-2xl p-6 w-81                  transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
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
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer  ">
              Tailwind CSS
            </button>
            <button className="text-gray-300 bg-dark-200 px-3 py-1 mt-3 rounded-full cursor-pointer mr-2 ">
              Node.js
            </button>
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer  ">
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

        <div className="bg-dark-300 rounded-2xl p-6 w-81 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
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

        <div className="bg-dark-300 rounded-2xl p-6 w-81                  transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
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
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer  ">
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
              className="flex-1 px-4 py-2 border border-purple font-medium rounded-lg text-center hover:bg-purple/20 transition duration-300"
            >
              Code
            </a>
          </div>
        </div>

        <div className="bg-dark-300 rounded-2xl p-6 w-81                  transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
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
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer ">
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

        <div className="bg-dark-300 rounded-2xl p-6 w-81                  transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <img
            className="h-55 w-full"
            src="data:image/jpeg;base64,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"
            alt="profile"
          />
          <h3 className="text-2xl mt-7 mb-2 font-semibold">Fitness Tracker</h3>
          <p className="text-gray-400 mb-4">
            A mobile app for tracking workouts, nutrition, and health metrics.
          </p>
          <span className="px-3 py-1 bg-dark-400 rounded-b-full ">
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer mr-2">
              React
            </button>
            <button className="text-gray-300 bg-dark-200 px-3 py-1 rounded-full cursor-pointer ">
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
      <div className="flex flex-col gap-5 ml-125 mt-7 w-1/4 items-center justify-between">
        <a
          href="#"
          className="flex-1 px-4 w-55 h-15 py-2 border border-purple font-medium rounded-lg  text-center hover:bg-purple/20 transition duration-300"
        >
          View More Projects ➔
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
