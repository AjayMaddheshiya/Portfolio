import React from 'react';
import { BookOpen, Code, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-600 mb-6">
              I'm a final-year Computer Science student at Amity University, passionate about software development
              and problem-solving. My journey in tech started with simple Web Development, and now I'm diving deep
              into full-stack development and machine learning.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Currently maintaining a 7.29 CGPA while working on various personal projects and participating
              in hackathons. I'm always eager to learn new technologies and contribute to meaningful projects.
            </p>
            <motion.div 
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <BookOpen className="text-blue-600" />
                <span>Computer Science Major</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Code className="text-blue-600" />
                <span>Full Stack Developer</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Coffee className="text-blue-600" />
                <span>Problem Solver</span>
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Education', content: ['B.Tech in Computer Science', 'Expected 2025'] },
              { title: 'Experience', content: ['2 Internships', '5+ Projects'] },
              { title: 'Interests', content: ['Full Stack Development', 'Web Development'] },
              { title: 'Goals', content: ['Software Engineer', 'Tech Innovation'] }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="font-bold mb-2 text-blue-600">{item.title}</h3>
                {item.content.map((text, idx) => (
                  <p key={idx} className={idx === 0 ? 'text-gray-800' : 'text-sm text-gray-600'}>
                    {text}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}