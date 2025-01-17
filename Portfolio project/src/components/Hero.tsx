import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/profile.jpg"
            alt="Profile" 
            className="w-40 h-40 rounded-full mx-auto mb-8 object-cover shadow-lg border-4 border-white"
          />
        </motion.div>
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Ajay Maddheshiya
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Computer Science Student & Aspiring Software Developer
        </motion.p>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Passionate about creating elegant solutions to complex problems. 
          Focusing on web development, artificial intelligence, and software engineering.
        </motion.p>
        <motion.a 
          href="#about"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
          <ArrowDown size={20} />
        </motion.a>
      </div>
    </section>
  );
}