import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: 'Languages', items: ['Java', 'JavaScript', 'Python', 'C++', 'SQL'] },
  { category: 'Web Technologies', items: ['React', 'Node.js', 'HTML/CSS', 'TypeScript', 'Express'] },
  { category: 'Tools & Platforms', items: ['Git', 'Docker', 'AWS', 'Linux', 'VS Code'] },
  { category: 'Concepts', items: ['Data Structures', 'Algorithms', 'OOP', 'Database Design', 'REST APIs'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div 
              key={skillGroup.category} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-bold text-lg mb-4 text-blue-600">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, index) => (
                  <motion.li 
                    key={skill} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}