// src/App.js
import './index.css'; // Tailwind styles
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import { AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Chatbot from './components/Chatbot'; // Import the Chatbot component

function AppContent() { // Create a new component to use useLocation hook
  const location = useLocation();
  return (
    <div className="dark">
      <div className="min-h-screen bg-dark-background text-dark-text">
        <Header /> {/* Header is now part of the Router context */}
        
        <main className="p-4 container mx-auto">
          <AnimatePresence mode="wait"> {/* Use mode="wait" for cleaner transitions */}
            <Routes location={location} key={location.pathname}> {/* Pass location and key */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>

        <footer className="p-4 mt-8 bg-gray-800 text-white text-center">
          <p>&copy; {new Date().getFullYear()} Kuldeep Sharma</p>
        </footer>
        <Chatbot /> {/* Add the Chatbot component here */}
      </div>
    </div>
  );
}

// Wrap AppContent with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
