// src/pages/ContactPage.js
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

const ContactPage = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-16 px-8 text-center"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <motion.h2 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get In Touch
      </motion.h2>
      <motion.p 
        className="text-xl mb-6 text-gray-300"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
      </motion.p>
      <motion.div 
        className="max-w-md mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="mb-4">
          Feel free to reach out to me via email at: <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">kuldeep.sharma@example.com</a> (Placeholder)
        </p>
        <p className="mb-4">
          Connect with me on LinkedIn: <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/kuldeepsharma</a> (Placeholder)
        </p>
        {/* Placeholder for a contact form if desired later */}
        {/* <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Or Send Me a Message</h3>
          <form className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <label htmlFor="name" className="block text-left mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-blue-500 focus:border-blue-500"/>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.1 }}
            >
              <label htmlFor="email" className="block text-left mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-blue-500 focus:border-blue-500"/>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}
            >
              <label htmlFor="message" className="block text-left mb-1">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </motion.div>
            <motion.button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.3 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div> */}
      </motion.div>
    </motion.section>
  );
};
export default ContactPage;
