import React from "react";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      {/* Heading */}
      <h1 className="text-4xl text-center font-bold mb-4">
        Get In
        <span className="text-purple"> Touch</span>
      </h1>
      <p className="mx-auto mb-16 text-gray-400 max-w-2xl text-center">
        Have a project in mind or want to collaborate? Let's talk!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-dark-200 ml-25 rounded-2xl w-full p-6 transition-transform duration-300 ">
          <h4 className="text-gray-400 text-2xl">Your Name</h4>
          <input
            type="text"
            text-bold
            className="w-full h-13 rounded mt-3 bg-dark-300 "
          />
          <h4 className="text-2xl text-gray-400 mt-7">Email Address</h4>
          <input
            type="email"
            text-bold
            className="w-full h-13 rounded mt-3 bg-dark-300 "
          />
          <h4 className="text-2xl text-gray-400 mt-7">Message</h4>
          <textarea
            name="text"
            id="message"
            className="w-full h-30 rounded mt-3 bg-dark-300 "
          ></textarea>
          <div className="flex gap-5 mt-7">
            <a
              href="#"
              className="flex-1 text-center mt-7 px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 duration-300 transition"
            >
              Send Message
            </a>
          </div>
        </div>
        
      </div>
    </motion.div>
  );
};

export default Contacts;
