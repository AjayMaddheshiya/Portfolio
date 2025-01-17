import React from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            Ajay Maddheshiya
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
            <SocialLinks />
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
              <div className="flex flex-col p-4">
                <NavLinks />
                <div className="flex justify-center gap-4 mt-4">
                  <SocialLinks />
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

function NavLinks() {
  return (
    <div className="flex md:flex-row flex-col gap-4 md:gap-8">
      <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
      <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
      <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
      <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a href="https://github.com/AjayMaddheshiya" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
        <Github size={20} />
      </a>
      <a href="https://www.linkedin.com/in/ajay-maddheshiya-60284b284/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
        <Linkedin size={20} />
      </a>
      <a href="ajaysahu274202@gmail.com" className="hover:text-blue-600 transition-colors">
        <Mail size={20} />
      </a>
    </div>
  );
}