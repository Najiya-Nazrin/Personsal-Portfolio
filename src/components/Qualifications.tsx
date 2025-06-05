import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const Qualifications = () => {
  const education = [
    {
      degree: "B.Tech in AI and Machine Learning",
      institution: "Mar Athanasius College of Engineering",
      year: "2023 – present",
      description: "Currently pursuing B.Tech in Artificial Intelligence and Machine Learning",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic College Kalamassery",
      year: "2020 – 2023",
      description: "Completed diploma in Computer Engineering",
    },
    {
      degree: "Plus Two in Computer Science",
      institution: "Govt Boy's Higher Secondary School (GBHSS)",
      year: "2018 – 2020",
      description: "Completed higher secondary education in Computer Science",
    },
    {
      degree: "SSLC",
      institution: "VVBHSS Aluva",
      year: "2017 – 2018",
      description: "Completed secondary education",
    },
  ];

  const experience = [
    {
      position: "Vendor",
      company: "Gtaste Startup",
      year: "2021 – 2023",
      description: "Worked as a part-time vendor at Gtaste startup in Ernakulam",
    },
    {
      position: "Flutter Development Intern",
      company: "Laxmiinfotech",
      year: "2022",
      description: "Created a todo app during the internship at Laxmiinfotech, Ernakulam",
    },
  ];

  return (
    <section id="qualifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">Qualifications</h2>
          <p className="text-lg text-brown-700 max-w-3xl mx-auto">
            My educational background and professional experience in technology and entrepreneurship
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap size={24} className="text-brown-600 mr-3" />
              <h3 className="text-2xl font-semibold text-brown-900">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="border-l-2 border-brown-200 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-brown-600 rounded-full -left-[7px] top-2" />
                  <h4 className="text-lg font-semibold text-brown-900">{item.degree}</h4>
                  <p className="text-brown-700">{item.institution}</p>
                  <p className="text-brown-600 text-sm">{item.year}</p>
                  <p className="text-brown-700 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <Briefcase size={24} className="text-brown-600 mr-3" />
              <h3 className="text-2xl font-semibold text-brown-900">Experience</h3>
            </div>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="border-l-2 border-brown-200 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-brown-600 rounded-full -left-[7px] top-2" />
                  <h4 className="text-lg font-semibold text-brown-900">{item.position}</h4>
                  <p className="text-brown-700">{item.company}</p>
                  <p className="text-brown-600 text-sm">{item.year}</p>
                  <p className="text-brown-700 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;