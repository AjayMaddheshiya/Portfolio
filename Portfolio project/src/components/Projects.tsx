import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Full-Featured E-Commerce Website',
    description: 'Developed a scalable e-commerce platform with user authentication, cart functionality, and payment gateway integration.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
    tech: ['Javascript', 'React', 'Node.js', 'MongoDb'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'AI-Powered Image Generator Website',
    description: 'Built and deployed a web-based AI tool for generating images from textual descriptions with a focus on user experience.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=600',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'CareBot: AI-Driven Healthcare Management System',
    description: 'Developing an AI-powered system for efficient patient management and personalized healthcare recommendations.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600',
    tech: ['TypeScript', 'VS Code API', 'ESLint'],
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <motion.span 
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 hover:text-blue-600"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 hover:text-blue-600"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}