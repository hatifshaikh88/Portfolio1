import React from "react";
import { motion } from "framer-motion";

const Exprience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      duration: "2020 - Present",
      description:
        "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    },
    {
      title: "Full Stack Developer",
      company: "CodeWave Solutions",
      duration: "2019 - 2020",
      description:
        "Developed scalable web applications with React, Node.js, and MongoDB. Collaborated with design and backend teams.",
    },
    {
      title: "UI/UX Engineer",
      company: "Pixel Studio",
      duration: "2018 - 2019",
      description:
        "Designed and developed engaging interfaces improving user experience and conversion rates across multiple platforms.",
    },
    {
      title: "React Developer Intern",
      company: "DevPoint Labs",
      duration: "2017 - 2018",
      description:
        "Built and optimized responsive UI components for client dashboards and landing pages.",
    },
    {
      title: "Freelance Web Developer",
      company: "Remote",
      duration: "2016 - 2017",
      description:
        "Delivered modern websites for small businesses using React, Tailwind CSS, and Firebase.",
    },
    {
      title: "Frontend Mentor",
      company: "Open Source",
      duration: "2015 - 2016",
      description:
        "Contributed to open-source UI projects, reviewed PRs, and helped new developers with React best practices.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="experience"
      className="py-20 bg-dark-200 text-white"
    >
      {/* Section Heading */}
      <h1 className="text-4xl text-center font-bold mb-4">
        My<span className="text-purple"> Experience</span>
      </h1>
      <p className="mx-auto mb-16 text-gray-400 max-w-2xl text-center">
        My professional journey so far.
      </p>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto px-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative flex items-start mb-10 pl-16 group"
          >
            {/* Circle and Vertical Line */}
            <div className="absolute left-[1.15rem] top-4 w-6 h-6 bg-purple rounded-full border-[3px] border-dark-200 z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500"></div>
            <div className="absolute left-7 top-5 bottom-0 w-[3px] bg-purple transition-all duration-300 group-hover:bg-purple-500"></div>

            {/* Card */}
            <div className="bg-dark-300 rounded-2xl p-6 shadow-lg w-full transition-transform duration-300 group-hover:-translate-y-2">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg sm:text-xl font-bold">{exp.title}</h3>
                <span className="bg-purple/40 text-purple px-4 py-1 rounded-full text-sm font-medium">
                  {exp.duration}
                </span>
              </div>
              <p className="text-gray-400 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Exprience;
