// src/pages/ProjectsPage.js
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

const projectData = [
  {
    title: "AI-Powered Personal Portfolio (This Project!)",
    description: "A modern, futuristic portfolio featuring a Gemini-based chatbot to answer questions about my resume and skills. Built with React, Tailwind CSS, and Framer Motion.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Node.js (for chatbot API)", "Gemini API"],
    imageUrl: "https://via.placeholder.com/400x250/1a202c/e2e8f0?text=Project+Showcase", // Placeholder
    liveLink: "#", // Placeholder
    repoLink: "#"  // Placeholder
  },
  {
    title: "E-commerce Platform 'ShopSphere'",
    description: "A full-featured e-commerce website with product listings, user authentication, shopping cart, and a mock payment gateway. Focused on clean UI/UX and robust backend.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API (mocked)"],
    imageUrl: "https://via.placeholder.com/400x250/1a202c/e2e8f0?text=Project+Showcase", // Placeholder
    liveLink: "#", // Placeholder
    repoLink: "#"  // Placeholder
  }
];

const ProjectsPage = () => {
  return (
    <motion.section 
      id="projects" 
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
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectData.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-[#182030] rounded-lg shadow-lg overflow-hidden" // Updated background
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} // Staggered animation
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-3 text-sm">{project.description}</p>
              <div className="mb-3">
                <strong className="text-gray-300">Technologies:</strong>
                <span className="text-gray-400 ml-2">{project.technologies.join(', ')}</span>
              </div>
              <div className="flex space-x-4">
                {project.liveLink !== "#" && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a>}
                {project.repoLink !== "#" && <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
export default ProjectsPage;
