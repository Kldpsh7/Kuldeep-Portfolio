// src/pages/EducationPage.js
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

const educationData = [
  {
    institution: "University of Advanced Technology",
    degree: "M.S. in Computer Science (AI Specialization - Placeholder)",
    year: "2021 - 2023 (Expected/Completed)",
    details: "Relevant coursework: Machine Learning, Deep Learning, Natural Language Processing. Capstone Project: [Placeholder]"
  },
  {
    institution: "Tech Institute of India",
    degree: "B.Tech in Information Technology",
    year: "2015 - 2019",
    details: "Key modules: Data Structures & Algorithms, Web Development, Database Management. Graduated with Honors."
  }
];

const EducationPage = () => {
  return (
    <motion.section 
      id="education" 
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
        Education
      </motion.h2>
      <div className="space-y-8 max-w-3xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div 
            key={index} 
            className="bg-[#182030] p-6 rounded-lg shadow-lg" // Updated background
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} // Staggered animation
          >
            <h3 className="text-2xl font-semibold text-blue-400">{edu.degree}</h3>
            <p className="text-xl font-medium text-gray-300">{edu.institution}</p>
            <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
            <p className="text-gray-400">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
export default EducationPage;
