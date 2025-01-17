import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Internships />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Ajay Maddheshiya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;