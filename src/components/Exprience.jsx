import React from "react";
import { motion } from "framer-motion";



const Exprience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="exprience"
      className="py-20 bg-dark-200"
    >
      {/* Heading */}
      <h1 className="text-4xl text-center font-bold mb-4">
        My
        <span className="text-purple"> Exprience</span>
      </h1>
      <p className="mx-auto mb-16 text-gray-400 max-w-2xl text-center">
        My professional journey so far.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-6 flex-col">  
        <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
           <h3 className="text-2xl mb-2 font-semibold">
                <span className="text-right">Senior Frontend Developer</span>                             
                {/* <span className="text-left bg-purple/50 rounded "> 2025 Present</span> */}
            </h3>
            <p className="text-gray-400 mb-4">
                TechCorp Inc.
                Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.
          </p>
        </div>
        <div className="bg-dark-300 rounded-2xl p-6 transition-transform  duration-300 hover:-translate-y-2 cursor-pointer">
            <h3 className="text-2xl mb-2 font-semibold">
                Senior Frontend Developer
                {/* <span className="bg-purple rounded-full"> 2025 Present</span> */}
            </h3>
            <p className="text-gray-400 mb-4">
                TechCorp Inc.
                Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.
          </p>
        </div>
        <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
             <h3 className="text-2xl mb-2 font-semibold">
                Senior Frontend Developer
            </h3>
            <p className="text-gray-400 mb-4">
                TechCorp Inc.
                Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.
          </p>          
        </div>
        <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
             <h3 className="text-2xl mb-2 font-semibold">
                Senior Frontend Developer
            </h3>
            <p className="text-gray-400 mb-4">
                TechCorp Inc.
                Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Exprience;
