// src/pages/HomePage.js
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

const HomePage = () => {
  return (
    <motion.section 
      id="home" 
      className="min-h-[calc(100vh-120px)] flex flex-col justify-center items-center text-center p-8" // Existing classes
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* ... content from previous step ... */}
      <motion.h1 
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Kuldeep Sharma
      </motion.h1>
      <motion.p 
        className="text-2xl mb-8 text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Full-Stack Developer | AI Enthusiast | Lifelong Learner
      </motion.p>
    </motion.section>
  );
};
export default HomePage;
