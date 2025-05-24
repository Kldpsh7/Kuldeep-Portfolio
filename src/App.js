// src/App.js
import './index.css'; // Tailwind styles
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Chatbot from './components/Chatbot'; // Import the Chatbot component

function App() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-dark-background text-dark-text">
        <Header />
        
        <main className="p-4 container mx-auto">
          <HomePage />
          <AboutPage />
          <ExperiencePage />
          <SkillsPage />
          <EducationPage />
          <ProjectsPage />
          <ContactPage />
        </main>

        <footer className="p-4 mt-8 bg-gray-800 text-white text-center">
          <p>&copy; {new Date().getFullYear()} Kuldeep Sharma</p>
        </footer>
        <Chatbot /> {/* Add the Chatbot component here */}
      </div>
    </div>
  );
}

export default App;
