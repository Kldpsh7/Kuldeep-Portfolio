// src/pages/AboutPage.js
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

const AboutPage = () => {
  return (
    <motion.section 
      id="about" 
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
        About Me
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        <p className="mb-6 text-lg">
          Hello! I'm Kuldeep Sharma, a passionate and results-driven Full-Stack Developer with a keen interest in Artificial Intelligence and modern web technologies. My journey in tech has been fueled by a relentless curiosity and a desire to build impactful solutions.
        </p>
        <p className="mb-6 text-lg">
          [Placeholder for more detailed biography: Talk about your journey, key skills, what you love about development, your approach to problem-solving, etc.]
        </p>
        <h3 className="text-2xl font-semibold mb-3 mt-8">My Philosophy</h3>
        <p className="text-lg">
          [Placeholder: Describe your work philosophy, values, or what you believe makes a great developer/project.]
        </p>
      </div>
    </motion.section>
  );
};
export default AboutPage;
