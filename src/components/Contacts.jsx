import React from "react";
import { motion } from "framer-motion";
import ContactCard from "./ContactCards";

const Contacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="contact"
      className="py-16 px-4 sm:px-8 bg-dark-200"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl text-center font-bold mb-4">
        Get In<span className="text-purple"> Touch</span>
      </h1>
      <p className="mx-auto mb-10 sm:mb-16 text-gray-400 max-w-2xl text-center text-sm sm:text-base px-2">
        Have a project in mind or want to collaborate? Let's talk!
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <div className="bg-dark-300 rounded-2xl w-full p-5 sm:p-6 transition-transform duration-300">
          <h4 className="text-gray-400 text-xl sm:text-2xl">Your Name</h4>
          <input
            type="text"
            className="w-full h-12 rounded border-none mt-3 bg-dark-200 outline-none font-bold focus:ring-0 focus:border-none px-3 text-sm sm:text-base"
          />

          <h4 className="text-xl sm:text-2xl text-gray-400 mt-6 sm:mt-7">
            Email Address
          </h4>
          <input
            type="email"
            className="w-full h-12 rounded border-none mt-3 bg-dark-200 outline-none font-bold focus:ring-0 focus:border-none px-3 text-sm sm:text-base"
          />

          <h4 className="text-xl sm:text-2xl text-gray-400 mt-6 sm:mt-7">
            Message
          </h4>
          <textarea
            name="text"
            id="message"
            className="w-full h-32 rounded border-none mt-3 bg-dark-200 outline-none focus:ring-0 focus:border-none px-3 py-2 text-sm sm:text-base resize-none"
          ></textarea>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-7 justify-center items-center">
  <a
    href="#"
    className="w-full sm:w-auto flex items-center justify-center text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 duration-300 transition"
  >
    Send Message
  </a>
</div>

        </div>

        {/* Contact Info */}
        <div className="bg-dark-200 rounded-2xl w-full p-5 sm:p-6 transition-transform duration-300">
          <ContactCard />
        </div>
      </div>
    </motion.div>
  );
};

export default Contacts;
