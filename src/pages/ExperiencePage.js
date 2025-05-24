// src/pages/ExperiencePage.js
import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const experiences = [
  {
    company: "FutureTech Solutions Inc.",
    location: "Remote",
    title: "Senior Full-Stack Developer",
    dates: "Jan 2022 - Present",
    responsibilities: [
      "Leading development of scalable web applications using React, Node.js, and Python.",
      "Designing and implementing microservices architecture.",
      "Mentoring junior developers and conducting code reviews."
    ]
  },
  {
    company: "Innovatech Ltd.",
    location: "San Francisco, CA",
    title: "Software Engineer",
    dates: "June 2019 - Dec 2021",
    responsibilities: [
      "Developed and maintained features for a SaaS platform.",
      "Collaborated with cross-functional teams to define project requirements.",
      "Contributed to the improvement of development processes."
    ]
  }
];

const ExperiencePage = () => {
  return (
    <motion.section 
      id="experience" 
      className="py-16 px-8"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <motion.h2 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Work Experience
      </motion.h2>
      <div className="space-y-12 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="bg-[#182030] p-6 rounded-lg shadow-lg" // Updated background
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} // Staggered animation
          >
            <h3 className="text-2xl font-semibold text-blue-400">{exp.title}</h3>
            <p className="text-xl font-medium text-gray-300">{exp.company} - {exp.location}</p>
            <p className="text-sm text-gray-500 mb-3">{exp.dates}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
export default ExperiencePage;
