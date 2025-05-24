// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion

const Header = () => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Experience', path: '/experience' },
    { title: 'Skills', path: '/skills' },
    { title: 'Education', path: '/education' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Kuldeep Sharma</Link>
        <ul className="flex space-x-4">
          {navLinks.map(link => (
            <motion.li 
              key={link.title}
              whileHover={{ scale: 1.1, color: '#60a5fa' }} // text-blue-400
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer" // Add cursor pointer for better UX
            >
              <Link to={link.path} className="hover:text-blue-400">{link.title}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
