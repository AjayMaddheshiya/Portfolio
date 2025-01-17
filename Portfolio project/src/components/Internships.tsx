import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const internships = [
  {
    company: "Codsoft",
    position: "Web Development Intern",
    duration: "Jan 2024 - Feb 2025",
    location: "Remote",
    description: [
      "Designed and developed responsive websites using HTML, CSS, and JavaScript",
      "Enhanced user engagement by optimizing website performance and UI/UX design",
      "Collaborated on website functionalities to improve overall user experience"
    ]
  },
  {
    company: "Extion Infotech",
    position: "Data Science Intern",
    duration: "Oct 2024 - Nov 2024",
    location: "Remote",
    description: [
      "Analyzed datasets and derived actionable insights using Python and Pandas",
      "Developed machine learning models to predict customer behavior",
      "Prepared detailed reports to support strategic decision-making"
    ]
  }
];

export default function Internships() {
  return (
    <section id="internships" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Internship Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{internship.company}</h3>
                  <p className="text-blue-600 font-medium">{internship.position}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    {internship.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    {internship.location}
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {internship.description.map((point, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <Briefcase size={16} className="mr-2 mt-1 text-blue-600" />
                    <span className="text-gray-700">{point}</span>
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