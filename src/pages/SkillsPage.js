// src/pages/SkillsPage.js
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

const skillsData = {
  "Frontend": ["React", "JavaScript (ES6+)", "HTML5", "CSS3/Sass", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Node.js", "Express.js", "Python", "Flask/Django (Basics)"],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL"],
  "AI/ML": ["Gemini API (Conceptual)", "Basic Machine Learning Concepts"],
  "Tools & Others": ["Git/GitHub", "Docker (Basics)", "RESTful APIs", "Agile Methodologies"]
};

const SkillsPage = () => {
  return (
    <motion.section 
      id="skills" 
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
        Skills & Technologies
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {Object.entries(skillsData).map(([category, skillsList], categoryIndex) => (
          <motion.div 
            key={category} 
            className="bg-[#182030] p-6 rounded-lg shadow-lg" // Updated background
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }} // Stagger category animation
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">{category}</h3>
            <ul className="space-y-2">
              {skillsList.map((skill, skillIndex) => (
                <motion.li 
                  key={skill} 
                  className="bg-gray-700 p-2 rounded text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }} // Stagger skill animation
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
export default SkillsPage;
